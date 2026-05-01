export interface Ad {
  id: string;
  created_at: string;
  title: string;
  description: string;
  contact: string;
  category: string;
  price: string;
  image_url?: string;
  type: 'selling' | 'buying' | 'service';
}

export interface MarketPrice {
  id: string;
  date: string;
  market: string;
  variety: string;
  grade: string;
  price: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
}
