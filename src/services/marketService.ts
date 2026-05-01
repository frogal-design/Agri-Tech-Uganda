import { GoogleGenAI, Type } from "@google/genai";
import { supabase } from "../lib/supabase";
import { MarketPrice } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function refreshMarketPrices(): Promise<MarketPrice[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Search for the latest agricultural market prices in Uganda (Kampala, Mbarara, Gulu, etc.) for common crops. Return a JSON array of objects with fields: market, variety, grade, price, change, and trend ('up', 'down', 'stable').",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              market: { type: Type.STRING },
              variety: { type: Type.STRING },
              grade: { type: Type.STRING },
              price: { type: Type.STRING },
              change: { type: Type.STRING },
              trend: { type: Type.STRING }
            },
            required: ["market", "variety", "grade", "price", "change", "trend"]
          }
        }
      }
    });

    const newPrices = JSON.parse(response.text) as Partial<MarketPrice>[];
    
    const formattedPrices = newPrices.map(p => ({
      market: p.market || "Unknown",
      variety: p.variety || "Crop",
      grade: p.grade || "G1",
      price: p.price || "0",
      change: p.change || "0%",
      trend: (['up', 'down', 'stable'].includes(p.trend || '') ? p.trend : 'stable') as any,
      date: new Date().toISOString()
    }));

    if (formattedPrices.length > 0) {
      // Use a delete-all then insert for simplicity in this demo sync
      await supabase.from('market_prices').delete().not('market', 'is', null);
      const { data, error } = await supabase.from('market_prices').insert(formattedPrices).select();
      if (error) throw error;
      return data as MarketPrice[];
    }
    
    return [];
  } catch (error) {
    console.error("Failed to fetch real market data:", error);
    throw error;
  }
}
