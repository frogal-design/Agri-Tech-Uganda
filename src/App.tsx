import React, { useState, useEffect } from 'react';
import { 
  User, 
  Settings, 
  TrendingUp, 
  Megaphone as Ads, 
  Smartphone as USSD,
  Search,
  Languages,
  PlusSquare,
  ChevronRight,
  TrendingDown,
  Minus,
  Phone,
  SignalHigh,
  BatteryFull,
  ArrowLeft,
  Menu,
  Verified,
  X,
  Loader2,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from './lib/supabase';
import { Ad, MarketPrice } from './types';
import { refreshMarketPrices } from './services/marketService';

const farmerHandImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuCOPA740SJzgynJgr0QP8T_yTXcQynHwMjAcWsAgxvlBMLCwa8cmCgQLP1OG1UuHvzC3cqktKeO2Cz7nglZeey3VV6NJPpHk3gqpZoc4zTVi4BkfXis8WYFpJDhYIO6M66EToukULe8sEXLaSimyG0E3GWpWR6dJ9dVL7jr-M38JNSXVcKU4WISvFdO5r8heygAJRurx_u_Lx3PjUs7xAJpcJwK2Vh2yrV-K2rRkZqiBYzShXuiBdUvMxBIwggSzHTzkv7gIHW5zozQ";
const tractorImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHCoDBnBeZvni36obMm5yAT9cqzxXT4XNgujAKCcTixMv8CruxarhXkUzk4Dg4DDOvvol7erMGGFxKP2ztiZ46NlzQaq7vTHlLzPhxcUoZKcp8t4tdtJ1NccU1uZshhXqSM8aWYP1hW-1K4FAgX1zvm6x0S4yna5GIr-qqXYx8QvEf_7_8xtLIPIrGVKdsQDL-Gbc3n3kye40_CS5BVV4tKSVQJWGe76PuR5XiOjP2Ag-JAuW7Ue6OcW3BlgGFDmAt2diiBdT8AHG";
const pumpImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBgtKTX9qYFfsS7J-Jr26daBwCALYk9cN1C1dKSSLaJnMxviFJ74NgDnxKLFLTkjjhmOzj5U-Whcxj8WxyK8cybSwWw3yWMDc-Xq35WFhQ51CSWzvP7VpMP3qoeB81susixmbszkj_4FKhQRS5-8UhWAjdLcd5Mix7aIglI8G_hy-1Cp12Ffa0NIEFaMbFtcEy2vReV3hwSNE4UNsgESQwSD8kbq9s8jpQHrqTDOXeU9lGWF_XOQHw_ue62RNMPSJnoxaQ5aim_q86a";
const fertilizerImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBn1FrAE5Y3f-ZgUadxGLAmS5Cy77eW9zv1cc0yhRdFrp-2S6z1n5Uz1J7-YUcaVqcrOCbRqkhuI4dDtOjsoZfZSLmDMCWpKSsVppDrZl3aupkdOcIeWO9FhcqTuDwggbc_gphXsvMRtKRJPsbxEqGGFJS8bs_qjB72_NRu7sCDzyxy8rBsJsO0me7lrYtpdHC01EEEHOFfUdbK5Cp9kb9B8UjLFdFlyVYH7aF_UvcNIlSuX8bsDlMEivbtDXq4idhmK42E16bilovW";
const marketImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAm2b0e01GajvVkDnDTfSUYpGbxt9ernAY17EvJU8vmhAgdj9UyaCl9oxQKIXkn8uantoqlYeVrxYG5Gtm1iWFzziCN6D-rKYnNHf8KTnLOFU3-9UL8wjJXoM4Jjve_H8j0AC8p60nHb7xZi2iVQ9BfYSK9CDsQE_atx04sL1_IINKz9FJkwbsVNUmrsbVOsesQWliB2Xefp5W8rTocbJvy0PjqqMHI3XD4sehvP5g9VqzUeR-LORnsQ1uzbkoNDfXCLiHK7YHftlaP";

export default function App() {
  const [activeTab, setActiveTab] = useState('ussd');
  const [ads, setAds] = useState<Ad[]>([]);
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPostForm, setShowPostForm] = useState(false);
  const [posting, setPosting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Form State
  const [newAd, setNewAd] = useState({
    title: '',
    description: '',
    contact: '',
    category: 'Maize',
    price: '',
    type: 'selling' as 'selling' | 'buying' | 'service'
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchInitialData();
    
    if (!supabase) return;

    // Subscribe to ads
    const adsSubscription = supabase
      .channel('public:ads')
      .on('postgres_changes', { event: '*', table: 'ads' }, payload => {
        if (payload.eventType === 'INSERT') {
          setAds(prev => [payload.new as Ad, ...prev]);
        } else if (payload.eventType === 'UPDATE') {
          setAds(prev => prev.map(ad => ad.id === payload.new.id ? payload.new as Ad : ad));
        } else if (payload.eventType === 'DELETE') {
          setAds(prev => prev.filter(ad => ad.id === payload.old.id));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(adsSubscription);
    };
  }, []);

  const fetchInitialData = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const [adsRes, pricesRes] = await Promise.all([
        supabase.from('ads').select('*').order('created_at', { ascending: false }),
        supabase.from('market_prices').select('*').order('date', { ascending: false })
      ]);

      if (adsRes.data) setAds(adsRes.data);
      if (pricesRes.data) setPrices(pricesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshPrices = async () => {
    try {
      setRefreshing(true);
      const updatedPrices = await refreshMarketPrices();
      setPrices(updatedPrices);
    } catch (error) {
      console.error('Error refreshing prices:', error);
      alert('Failed to refresh market prices. Please check your Gemini API key.');
    } finally {
      setRefreshing(false);
    }
  };

  const handleCopyUSSD = () => {
    navigator.clipboard.writeText('*135#');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePostAd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      alert('Postings are disabled because Supabase is not configured.');
      return;
    }
    if (!newAd.title || !newAd.description || !newAd.contact) return;

    try {
      setPosting(true);
      const { error } = await supabase.from('ads').insert([newAd]);
      if (error) throw error;
      
      setShowPostForm(false);
      setNewAd({
        title: '',
        description: '',
        contact: '',
        category: 'Maize',
        price: '',
        type: 'selling'
      });
    } catch (error) {
      console.error('Error posting ad:', error);
      alert('Failed to post ad. Please check your Supabase connection.');
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-white border-b-2 border-black">
        <div className="flex items-center gap-4">
          <span className="text-xl font-display font-black tracking-tighter uppercase text-black">AGRI-PULSE UG</span>
          {!supabase && (
             <div className="hidden md:flex items-center gap-2 bg-red-100 border border-red-500 px-2 py-0.5 rounded text-[10px] font-black uppercase text-red-600 animate-pulse">
               Missing Supabase Configuration
             </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center border-2 border-black bg-white px-3 h-10">
            <Search size={18} className="text-black" />
            <input aria-label="Search marketplace" className="border-none focus:ring-0 text-sm font-bold uppercase bg-transparent w-48 placeholder:text-gray-400" placeholder="Search marketplace..." type="text" />
          </div>
          <button aria-label="Change language" className="h-10 w-10 flex items-center justify-center hover:bg-accent transition-colors active:translate-y-0.5 border-black border-2 md:border-0">
            <Languages size={20} className="text-black" />
          </button>
          <button aria-label="User profile" className="h-10 w-10 flex items-center justify-center hover:bg-accent transition-colors active:translate-y-0.5 border-black border-2 md:border-0">
            <User size={20} className="text-black" />
          </button>
        </div>
      </header>

      <main className="pt-24 pb-28 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'ussd' ? (
            <motion.div 
              key="ussd"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-12 mb-8">
                <h1 className="font-display text-5xl font-black uppercase text-black leading-none mb-4 tracking-tighter italic">USSD SIMULATOR</h1>
                <p className="text-xl text-gray-700 max-w-2xl font-medium">
                  Test and preview the offline accessibility interface for AGRI-PULSE. Designed for low-connectivity environments with high-contrast accessibility.
                </p>
              </div>

              {/* Simulator Interface (Left) */}
              <div className="md:col-span-5 flex justify-center items-start">
                <div className="relative w-full max-w-[360px] aspect-[9/18] bg-black rounded-[40px] p-4 border-[6px] border-black neo-shadow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  <div className="w-full h-full bg-[#f3f3f3] rounded-[24px] overflow-hidden flex flex-col border-2 border-black">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-black/10">
                      <span className="font-mono text-[10px] font-bold">AGRI-NET UG</span>
                      <div className="flex gap-1 items-center">
                        <SignalHigh size={12} />
                        <BatteryFull size={12} />
                      </div>
                    </div>
                    <div className="flex-grow p-6 flex flex-col">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="bg-black text-accent p-2 font-mono text-[10px] font-bold uppercase">
                          DIALING *135#...
                        </div>
                        <button
                          onClick={handleCopyUSSD}
                          aria-label="Copy USSD code"
                          className="p-2 border-2 border-black bg-white hover:bg-accent transition-colors active:translate-y-0.5"
                        >
                          {copied ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </div>
                      <div className="bg-white border-2 border-black p-4 flex-grow font-mono space-y-4">
                        <p className="text-sm font-bold border-b border-black pb-2 mb-2 uppercase">AGRI-PULSE MAIN MENU</p>
                        <ul className="text-xs space-y-2 uppercase">
                          <li>1. Market Prices</li>
                          <li>2. Post Advertisement</li>
                          <li>3. Crop Diseases</li>
                          <li>4. Weather Forecast</li>
                          <li>5. Account Settings</li>
                          <li>6. Help / Feedback</li>
                        </ul>
                        <div className="mt-8">
                          <div className="border-b-2 border-black w-full h-8 flex items-center">
                            <span className="animate-pulse">|</span>
                          </div>
                          <div className="flex justify-between mt-2">
                            <button className="bg-black text-white px-3 py-1 text-[10px] uppercase font-bold">Cancel</button>
                            <button className="bg-accent text-black px-3 py-1 text-[10px] border-black border-2 font-black uppercase">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-16 border-t-2 border-black flex items-center justify-around bg-white">
                      <button aria-label="Back" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft size={20} className="text-black" />
                      </button>
                      <button aria-label="Home" className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <div className="w-6 h-6 bg-black rounded-sm"></div>
                      </button>
                      <button aria-label="Menu" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Menu size={20} className="text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation & Steps (Right) */}
              <div className="md:col-span-7 space-y-8">
                <div className="bg-white border-2 border-black p-6 neo-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-display text-2xl font-black">01</div>
                    <h2 className="font-display text-2xl font-black uppercase tracking-tight">Language Initialization</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="text-left p-4 border border-black hover:bg-accent transition-colors cursor-pointer group">
                      <span className="font-bold block mb-1 uppercase tracking-wider">ENGLISH</span>
                      <p className="text-xs text-gray-500 uppercase">Default System Language</p>
                    </button>
                    <button className="text-left p-4 border border-black hover:bg-accent transition-colors cursor-pointer">
                      <span className="font-bold block mb-1 uppercase tracking-wider">SWAHILI</span>
                      <p className="text-xs text-gray-500 uppercase">Regional Standard</p>
                    </button>
                    <button className="text-left p-4 border border-black hover:bg-accent transition-colors cursor-pointer">
                      <span className="font-bold block mb-1 uppercase tracking-wider">LUGANDA</span>
                      <p className="text-xs text-gray-500 uppercase">Central Region Dialect</p>
                    </button>
                    <button className="text-left p-4 border border-black hover:bg-accent transition-colors cursor-pointer">
                      <span className="font-bold block mb-1 uppercase tracking-wider">LUO</span>
                      <p className="text-xs text-gray-500 uppercase">Northern Region Dialect</p>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border-2 border-black bg-white p-4">
                    <TrendingUp className="mb-2 block text-black" size={24} />
                    <h4 className="font-bold uppercase mb-2 tracking-widest text-sm">Market Prices</h4>
                    <p className="text-xs text-gray-600">Get real-time wholesale and retail prices for 50+ crops across 15 districts.</p>
                  </div>
                  <div className="border-2 border-black bg-accent p-4">
                    <Ads className="mb-2 block text-black" size={24} />
                    <h4 className="font-bold uppercase mb-2 tracking-widest text-sm">Advertise</h4>
                    <p className="text-xs text-gray-800 font-medium">Post produce for sale directly from the field via simple numeric input.</p>
                  </div>
                </div>

                <div className="bg-primary text-white p-6 border-2 border-black neo-shadow">
                  <h4 className="font-bold uppercase text-accent mb-4 tracking-[0.2em] italic">DEBUG CONSOLE</h4>
                  <div className="font-mono text-xs space-y-1 opacity-80">
                    <p>&gt; SESSION_START ID: 98221-UA</p>
                    <p>&gt; POLLING GSM_NETWORK: OK</p>
                    <p>&gt; HANDSHAKE *135#: SUCCESS</p>
                    <p>&gt; RENDER_MENU: STEP_2_MAIN_OPTIONS</p>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button className="bg-accent text-black font-black px-6 py-2 border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-all">REFRESH SESSION</button>
                    <button className="border-2 border-white text-white font-black px-6 py-2 hover:bg-white hover:text-black transition-all">DOWNLOAD LOGS</button>
                  </div>
                </div>
              </div>

              <section className="md:col-span-12 my-8">
                <div className="relative h-[400px] border-2 border-black overflow-hidden group neo-shadow">
                  <img alt="Farmer in Uganda" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={farmerHandImage} />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                    <div className="bg-white border-2 border-black p-6 max-w-lg">
                      <h2 className="font-display text-3xl font-black uppercase mb-4 tracking-tighter">Bridging the Connectivity Gap</h2>
                      <p className="text-lg font-medium text-gray-700">Even without a smartphone, every farmer is connected. AGRI-PULSE USSD ensures no data is left behind, turning every basic handset into a powerful agricultural terminal.</p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : activeTab === 'ads' ? (
            <motion.div 
              key="ads"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-black pb-8">
                <div className="space-y-2">
                  <h1 className="font-display text-5xl font-black uppercase tracking-tighter italic">Advertisements</h1>
                  <p className="text-xl text-gray-600 max-w-xl font-medium">
                    High-precision trade portal for Ugandan agribusiness. Direct equipment sales, seed distribution, and expert livestock listings.
                  </p>
                </div>
                <button 
                  onClick={() => setShowPostForm(true)}
                  className="neo-button flex items-center gap-2 h-14"
                >
                  <PlusSquare size={20} />
                  <span>Post an Ad</span>
                </button>
              </section>

              <AnimatePresence>
                {showPostForm && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                  >
                    <div
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-title"
                      className="bg-white border-4 border-black p-8 w-full max-w-lg neo-shadow relative"
                    >
                      <button 
                        onClick={() => setShowPostForm(false)}
                        aria-label="Close modal"
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all"
                      >
                        <X size={24} />
                      </button>
                      
                      <h2 id="modal-title" className="font-display text-3xl font-black uppercase mb-8 tracking-tighter italic">Post New Advertisement</h2>
                      
                      <form onSubmit={handlePostAd} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <label htmlFor="ad-title" className="block text-xs font-black uppercase mb-2">Ad Title</label>
                            <input 
                              id="ad-title"
                              required
                              className="w-full border-2 border-black p-3 font-medium outline-none focus:bg-accent/10"
                              placeholder="e.g. Selling 50 Bags of Maize"
                              value={newAd.title}
                              onChange={e => setNewAd({...newAd, title: e.target.value})}
                            />
                          </div>
                          <div>
                            <label htmlFor="ad-category" className="block text-xs font-black uppercase mb-2">Category</label>
                            <select 
                              id="ad-category"
                              className="w-full border-2 border-black p-3 font-medium outline-none"
                              value={newAd.category}
                              onChange={e => setNewAd({...newAd, category: e.target.value})}
                            >
                              <option>Maize</option>
                              <option>Rice</option>
                              <option>Beans</option>
                              <option>Tobacco</option>
                              <option>Coffee</option>
                              <option>Cattle</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="ad-price" className="block text-xs font-black uppercase mb-2">Price (UGX)</label>
                            <input 
                              id="ad-price"
                              className="w-full border-2 border-black p-3 font-medium outline-none"
                              placeholder="e.g. 120,000"
                              value={newAd.price}
                              onChange={e => setNewAd({...newAd, price: e.target.value})}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="ad-description" className="block text-xs font-black uppercase mb-2">Description</label>
                          <textarea 
                            id="ad-description"
                            required
                            rows={3}
                            className="w-full border-2 border-black p-3 font-medium outline-none"
                            placeholder="Describe your product, variety, and state..."
                            value={newAd.description}
                            onChange={e => setNewAd({...newAd, description: e.target.value})}
                          />
                        </div>

                        <div>
                          <label htmlFor="ad-contact" className="block text-xs font-black uppercase mb-2">Contact Info</label>
                          <input 
                            id="ad-contact"
                            required
                            className="w-full border-2 border-black p-3 font-medium outline-none"
                            placeholder="Phone number or Location"
                            value={newAd.contact}
                            onChange={e => setNewAd({...newAd, contact: e.target.value})}
                          />
                        </div>

                        <button 
                          disabled={posting}
                          type="submit"
                          className="w-full neo-button flex items-center justify-center gap-2 h-16 disabled:opacity-50"
                        >
                          {posting ? <Loader2 className="animate-spin" /> : <PlusSquare size={20} />}
                          <span>{posting ? 'PUBLISHING...' : 'SUBMIT ADVERTISEMENT'}</span>
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <section className="flex flex-wrap gap-4 mb-12">
                <button className="bg-black text-accent border-2 border-black px-6 py-2 font-black uppercase text-sm tracking-widest">All Listings</button>
                <button className="bg-white text-black border-2 border-black px-6 py-2 font-black uppercase text-sm tracking-widest hover:bg-accent transition-colors">Tractors</button>
                <button className="bg-white text-black border-2 border-black px-6 py-2 font-black uppercase text-sm tracking-widest hover:bg-accent transition-colors">Irrigation</button>
                <button className="bg-white text-black border-2 border-black px-6 py-2 font-black uppercase text-sm tracking-widest hover:bg-accent transition-colors">Fertilizer</button>
                <button className="bg-white text-black border-2 border-black px-6 py-2 font-black uppercase text-sm tracking-widest hover:bg-accent transition-colors">Livestock</button>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {loading ? (
                  <div className="md:col-span-12 flex flex-col items-center justify-center py-20 opacity-20">
                    <Loader2 size={48} className="animate-spin mb-4" />
                    <p className="font-display text-2xl font-black uppercase italic">Retrieving marketplace data...</p>
                  </div>
                ) : ads.length === 0 ? (
                  <div className="md:col-span-12 text-center py-20 border-4 border-dashed border-black/10">
                    <p className="font-display text-2xl font-black uppercase text-black/20">No active advertisements found</p>
                  </div>
                ) : (
                  ads.map((ad, index) => (
                    <motion.div 
                      key={ad.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`${index === 0 ? 'md:col-span-8' : 'md:col-span-4'} border-2 border-black bg-white group overflow-hidden neo-shadow flex flex-col`}
                    >
                      <div className={`relative ${index === 0 ? 'h-64 md:h-96' : 'h-48'} border-b-2 border-black overflow-hidden bg-gray-100 flex items-center justify-center`}>
                        {ad.image_url ? (
                          <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={ad.image_url} alt={ad.title} />
                        ) : (
                          <div className="flex flex-col items-center opacity-10">
                            <Ads size={index === 0 ? 80 : 40} />
                            <span className="text-[10px] font-black uppercase mt-2">{ad.category}</span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-accent border-2 border-black px-4 py-2 font-black uppercase text-xs">
                          {ad.type} {index === 0 && '• Featured'}
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                             <span className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em]">{ad.category}</span>
                             <span className="text-[10px] font-mono text-gray-400">{new Date(ad.created_at).toLocaleDateString()}</span>
                          </div>
                          <h3 className={`font-display ${index === 0 ? 'text-3xl' : 'text-xl'} font-black uppercase mb-4 tracking-tighter leading-tight`}>{ad.title}</h3>
                          <p className={`text-gray-600 font-medium line-clamp-3 mb-6 ${index === 0 ? 'text-base' : 'text-sm'}`}>{ad.description}</p>
                        </div>
                        <div className="mt-auto">
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-end">
                              <span className="font-display font-black text-2xl">UGX {ad.price || 'Negotiable'}</span>
                              <div className="flex gap-2">
                                <button className="h-10 px-4 border-2 border-black font-black uppercase text-[10px] hover:bg-black hover:text-white transition-colors">Details</button>
                              </div>
                            </div>
                            <div className="bg-accent/20 border-2 border-black p-3 flex items-center gap-3">
                              <Phone size={14} />
                              <span className="font-black uppercase text-[10px] truncate">{ad.contact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          ) : activeTab === 'prices' ? (
            <motion.div 
              key="prices"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-black p-6 bg-accent neo-shadow">
                  <p className="text-xs font-black uppercase tracking-[0.2em] mb-2">Market Insight</p>
                  <h2 className="font-display text-2xl font-black uppercase tracking-tighter leading-tight italic">Maize prices are rising in Kampala markets.</h2>
                </div>
                <div className="border-2 border-black p-6 bg-white neo-shadow">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Last Update</p>
                  <h2 className="font-display text-2xl font-black uppercase tracking-tighter leading-tight">Oct 24, 2023 - 09:00 EAT</h2>
                </div>
                <div className="border-2 border-black p-6 bg-sky-blue text-white neo-shadow">
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">Top Variety</p>
                  <h2 className="font-display text-2xl font-black uppercase tracking-tighter leading-tight italic">Supa Rice (Grade 1)</h2>
                </div>
              </div>

              <section className="border-2 border-black bg-white overflow-hidden neo-shadow">
                <div className="p-6 border-b-2 border-black bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <h1 className="font-display text-3xl font-black uppercase tracking-tighter italic">Wholesale Market Prices</h1>
                  <div className="w-full md:w-auto flex items-center gap-4">
                    <button 
                      onClick={handleRefreshPrices}
                      disabled={refreshing}
                      className="bg-white text-black border-2 border-black px-6 py-2 font-black uppercase text-xs tracking-widest hover:bg-accent transition-colors flex items-center gap-2 h-12"
                    >
                      <RefreshCw size={18} className={refreshing ? 'animate-spin' : ''} />
                      <span>{refreshing ? 'Searching...' : 'Refresh Live Prices'}</span>
                    </button>
                    <div className="hidden md:flex items-center border-2 border-black bg-white px-4 h-12">
                      <Search size={20} className="text-gray-400 mr-3" />
                      <input className="border-none focus:ring-0 w-64 font-bold text-sm" placeholder="Search markets or crops..." type="text" />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary text-white border-b-2 border-black font-display font-black uppercase tracking-wider text-xs italic">
                        <th className="p-4 border border-black/20">Date</th>
                        <th className="p-4 border border-black/20">Market</th>
                        <th className="p-4 border border-black/20">Variety</th>
                        <th className="p-4 border border-black/20">Grade</th>
                        <th className="p-4 border border-black/20 text-right">Price (UGX)</th>
                        <th className="p-4 border border-black/20 text-center">Change</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-medium">
                      {loading ? (
                         <tr>
                           <td colSpan={6} className="p-10 text-center opacity-20 font-black uppercase italic">Syncing with national markets...</td>
                         </tr>
                      ) : prices.length === 0 ? (
                        <tr>
                           <td colSpan={6} className="p-10 text-center opacity-20 font-black uppercase italic">Market price data currently unavailable</td>
                         </tr>
                      ) : (
                        prices.map((row, i) => (
                          <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-accent/10 transition-colors`}>
                            <td className="p-4 border border-black/10 font-mono text-xs">{new Date(row.date).toLocaleDateString()}</td>
                            <td className="p-4 border border-black/10 font-black uppercase italic">{row.market}</td>
                            <td className="p-4 border border-black/10">{row.variety}</td>
                            <td className="p-4 border border-black/10 text-center">
                              <span className="bg-secondary-container px-2 py-0.5 border border-black font-black text-[10px]">{row.grade}</span>
                            </td>
                            <td className="p-4 border border-black/10 text-right font-black font-mono text-lg">{row.price}</td>
                            <td className="p-4 border border-black/10">
                              <div className={`flex items-center justify-center gap-1 font-black italic ${row.trend === 'up' ? 'text-red-600' : row.trend === 'down' ? 'text-green-600' : 'text-gray-400'}`}>
                                {row.trend === 'up' ? <TrendingUp size={14} /> : row.trend === 'down' ? <TrendingDown size={14} /> : <Minus size={14} />}
                                <span>{row.change}</span>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="p-6 bg-gray-50 flex justify-center items-center gap-8 border-t-2 border-black">
                  <button className="border-2 border-black bg-white px-6 py-2 font-black uppercase text-xs hover:translate-y-1 active:translate-y-0 active:bg-accent transition-all">PREVIOUS</button>
                  <span className="font-black italic tracking-widest text-sm">PAGE 1 OF 12</span>
                  <button className="border-2 border-black bg-white px-6 py-2 font-black uppercase text-xs hover:translate-y-1 active:translate-y-0 active:bg-accent transition-all">NEXT</button>
                </div>
              </section>

              <div className="mt-12 border-2 border-black overflow-hidden grid grid-cols-1 md:grid-cols-2 neo-shadow">
                <div className="p-10 flex flex-col justify-center bg-white">
                  <h3 className="font-display text-4xl font-black uppercase tracking-tighter italic mb-6">Why data matters?</h3>
                  <p className="text-lg font-medium text-gray-600 mb-8 leading-relaxed">
                    Accurate market information helps you negotiate better prices at the farm gate. Our data is updated daily from major hubs across Uganda.
                  </p>
                  <button className="bg-sky-blue text-white border-2 border-black py-4 font-display font-black uppercase tracking-[0.2em] hover:bg-black transition-all active:translate-y-1">
                    GET SMS ALERTS
                  </button>
                </div>
                <div className="h-80 md:h-auto min-h-[400px] relative">
                  <img alt="Ugandan Market" className="absolute inset-0 w-full h-full object-cover grayscale" src={marketImage} />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center h-96 border-4 border-dashed border-black/20"
            >
              <div className="text-center italic">
                <User size={64} className="mx-auto mb-4 opacity-20" />
                <p className="font-display text-3xl font-black uppercase text-black/20">Farmer Profile View coming soon</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 h-20 flex justify-around items-stretch bg-white border-t-2 border-black shadow-[0_-4px_0px_0px_rgba(0,0,0,1)]">
        <button 
          onClick={() => setActiveTab('prices')}
          className={`flex flex-col items-center justify-center w-full h-full border-r-2 border-black transition-all ${activeTab === 'prices' ? 'bg-accent text-black scale-100' : 'text-gray-400 grayscale hover:bg-gray-50'}`}
        >
          <TrendingUp size={24} className={activeTab === 'prices' ? 'fill-black' : ''} />
          <span className="font-display text-[10px] font-black uppercase mt-1">Markets</span>
        </button>
        <button 
          onClick={() => setActiveTab('ads')}
          className={`flex flex-col items-center justify-center w-full h-full border-r-2 border-black transition-all ${activeTab === 'ads' ? 'bg-accent text-black scale-100' : 'text-gray-400 grayscale hover:bg-gray-50'}`}
        >
          <Ads size={24} className={activeTab === 'ads' ? 'fill-black' : ''} />
          <span className="font-display text-[10px] font-black uppercase mt-1">Ads</span>
        </button>
        <button 
          onClick={() => setActiveTab('ussd')}
          className={`flex flex-col items-center justify-center w-full h-full border-r-2 border-black transition-all ${activeTab === 'ussd' ? 'bg-accent text-black scale-100 font-bold' : 'text-gray-400 grayscale hover:bg-gray-50'}`}
        >
          <USSD size={24} className={activeTab === 'ussd' ? 'fill-black' : ''} />
          <span className="font-display text-[10px] font-black uppercase mt-1">USSD</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center justify-center w-full h-full transition-all ${activeTab === 'profile' ? 'bg-accent text-black scale-100' : 'text-gray-400 grayscale hover:bg-gray-50'}`}
        >
          <User size={24} className={activeTab === 'profile' ? 'fill-black' : ''} />
          <span className="font-display text-[10px] font-black uppercase mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
