import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  TrendingUp, 
  Megaphone as Ads, 
  Smartphone as USSD,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const farmerImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAHtq6Z8pAMAF0VqKFq7N4YSkUdk3xCXT5jnzsLIel7EwAhufk0k-mi5bMQmJuDKkWmO68pI8doPV4cwOPZ0TC2JynEUOF758A_I269ZA5irqRmnFKqB-LQ93RyHcrxozZbpISxkL1lxAVDZYh3FcAlU5MOIk9bIo5-qj36ofRGjO8fjgvlyQdUfXSkuZHelWjDdjhRno_q51JLbItWtyFVUZ9AETVU5sPB4YN3BWsvPpwqzDtJXN9PBrG_i_VF6xAqrQRc-KDw0ZVJ";

export default function App() {
  const [activeTab, setActiveTab] = useState('ussd');
  const [step1Value, setStep1Value] = useState('1');
  const [step2Value, setStep2Value] = useState('');

  const marketPrices = [
    { name: 'Maize', price: '1,200', unit: 'kg', trend: 'up' },
    { name: 'Beans (Nambale)', price: '3,500', unit: 'kg', trend: 'stable' },
    { name: 'Coffee (Robusta)', price: '7,800', unit: 'kg', trend: 'up' },
    { name: 'Matooke', price: '15,000', unit: 'bunch', trend: 'down' },
    { name: 'Cassava', price: '800', unit: 'kg', trend: 'stable' },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white border-b-2 border-black flex justify-between items-center px-4 h-14 sticky top-0 z-50">
        <div className="text-xl font-display font-black uppercase tracking-wider text-black">
          AGRI-TECH UGANDA
        </div>
        <div className="flex gap-4">
          <button className="p-1 hover:bg-primary hover:text-white transition-colors border-2 border-transparent hover:border-black active:translate-y-0.5">
            <User size={20} />
          </button>
          <button className="p-1 hover:bg-primary hover:text-white transition-colors border-2 border-transparent hover:border-black active:translate-y-0.5">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto w-full p-4 mt-6">
        <AnimatePresence mode="wait">
          {activeTab === 'ussd' ? (
            <motion.div
              key="ussd"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {/* Title Section */}
              <div className="mb-10 border-l-8 border-primary pl-4">
                <h1 className="font-display text-4xl font-bold uppercase">USSD System Terminal</h1>
                <p className="text-xl mt-2 text-gray-600">Real-time simulation of the offline farmer gateway.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Step 1: Language Selection */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-secondary-container text-black font-mono text-xs font-bold px-2 py-1 border-2 border-black">STEP 01</span>
                    <h2 className="font-display text-xl font-bold uppercase">Language Init</h2>
                  </div>
                  
                  <div className="ussd-card">
                    <div className="ussd-terminal-header">
                      <span>NETWORK: AIRTEL UG</span>
                      <span>*135#</span>
                    </div>
                    <div className="font-mono text-lg border-b border-black/10 py-4 mb-4">
                      <p className="mb-2">Welcome to Agri-Tech Uganda.</p>
                      <p>Select Language:</p>
                      <ul className="mt-2 space-y-1">
                        <li>1. English</li>
                        <li>2. Swahili</li>
                        <li>3. Luganda</li>
                        <li>4. Luo</li>
                      </ul>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-grow bg-gray-100 border-2 border-black px-3 h-12 flex items-center font-mono">
                        <span className="text-black">{step1Value}</span>
                        <div className="ml-1 w-2 h-6 bg-primary animate-pulse" />
                      </div>
                      <button className="bg-primary px-6 h-12 text-white font-display font-bold border-2 border-black hover:bg-black transition-colors flex items-center gap-2 font-black uppercase">
                        <span>SEND</span>
                      </button>
                    </div>
                  </div>
                </section>

                {/* Step 2: Main Menu */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-secondary-container text-black font-mono text-xs font-bold px-2 py-1 border-2 border-black">STEP 02</span>
                    <h2 className="font-display text-xl font-bold uppercase">Service Menu</h2>
                  </div>
                  
                  <div className="ussd-card">
                    <div className="ussd-terminal-header">
                      <span>NETWORK: AIRTEL UG</span>
                      <span>SESSION: 22891</span>
                    </div>
                    <div className="font-mono text-lg border-b border-black/10 py-4 mb-4">
                      <p className="mb-2 text-primary font-bold">AGRI-TECH MAIN MENU</p>
                      <ul className="space-y-1">
                        <li>1. Market Prices</li>
                        <li>2. Advertise</li>
                        <li>3. Crop Diseases</li>
                        <li>4. New Agritech</li>
                        <li>5. Expert Opinions</li>
                        <li className="pt-2 text-gray-500">0. Back</li>
                      </ul>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="text"
                        placeholder="Enter choice..."
                        className="flex-grow bg-gray-100 border-2 border-black px-3 h-12 font-mono outline-none focus:ring-0"
                        value={step2Value}
                        onChange={(e) => setStep2Value(e.target.value)}
                      />
                      <button className="bg-primary px-6 h-12 text-white font-display font-bold border-2 border-black hover:bg-black transition-colors font-black uppercase">
                        SEND
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              {/* Infrastructure Status */}
              <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#dee3e8] border-2 border-black p-4">
                  <p className="text-xs font-bold uppercase text-gray-600 mb-1">Bandwidth</p>
                  <p className="font-display text-2xl font-bold uppercase">2G/EDGE</p>
                  <div className="mt-2 h-2 bg-stone-300">
                    <div className="bg-secondary h-full w-[15%]"></div>
                  </div>
                  <p className="text-[10px] mt-1 font-mono uppercase">Optimized for low signal</p>
                </div>

                <div className="bg-secondary-container border-2 border-black p-4">
                  <p className="text-xs font-bold uppercase text-gray-800 mb-1">Active Users</p>
                  <p className="font-display text-2xl font-bold uppercase">12,482</p>
                  <p className="text-[10px] mt-1 font-mono uppercase">Rural Uganda Reach</p>
                </div>

                <div className="bg-primary-container border-2 border-black p-4">
                  <p className="text-xs font-bold uppercase text-gray-800 mb-1">Uptime</p>
                  <p className="font-display text-2xl font-bold uppercase text-black">99.9%</p>
                  <p className="text-[10px] mt-1 font-mono uppercase text-black/80 font-bold">SMS/USSD Gateway Active</p>
                </div>
              </section>

              {/* Visual Context */}
              <section className="mt-12">
                <div className="border-2 border-black bg-white overflow-hidden ussd-shadow">
                  <div className="bg-primary text-white font-display font-bold p-3 border-b-2 border-black tracking-widest text-center uppercase">
                    Field Impact Data
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-4 border-r-0 md:border-r-2 border-black flex items-center justify-center bg-gray-50">
                      <img 
                        className="w-full h-80 object-cover border-2 border-black grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
                        src={farmerImage}
                        alt="Ugandan farmer in field"
                      />
                    </div>
                    <div className="p-8 bg-stone-50 flex flex-col justify-center">
                      <h3 className="font-display text-2xl font-bold mb-4 uppercase">Bridging the Gap</h3>
                      <p className="text-lg mb-6 leading-relaxed">
                        Agri-Tech Uganda's USSD interface provides critical market data and disease diagnostics even without internet connectivity. Our brutalist design ensures readability under harsh sunlight for farmers across the region.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-tertiary-container text-black font-bold text-xs px-3 py-1 border-2 border-black uppercase italic">Offline First</span>
                        <span className="bg-tertiary-container text-black font-bold text-xs px-3 py-1 border-2 border-black uppercase italic">USSD Gateway</span>
                        <span className="bg-tertiary-container text-black font-bold text-xs px-3 py-1 border-2 border-black uppercase italic">Real-Time Data</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : activeTab === 'prices' ? (
            <motion.div
              key="prices"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="mb-10 border-l-8 border-secondary pl-4">
                <h1 className="font-display text-4xl font-bold uppercase">Real-Time Market Prices</h1>
                <p className="text-xl mt-2 text-gray-600">Wholesale commodity prices across major Uganda markets.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-primary text-white p-4 border-2 border-black font-display font-bold uppercase tracking-widest flex justify-between">
                  <span>Commodity</span>
                  <div className="flex gap-20">
                    <span>Unit</span>
                    <span className="w-32 text-right">Price (UGX)</span>
                  </div>
                </div>
                {marketPrices.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-black p-4 flex justify-between items-center group hover:bg-secondary-container transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 border-2 border-black ${item.trend === 'up' ? 'bg-error' : item.trend === 'down' ? 'bg-secondary' : 'bg-gray-400'}`} />
                      <span className="text-xl font-bold font-display uppercase italic">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-20">
                      <span className="font-mono text-gray-600">Per {item.unit}</span>
                      <span className="w-32 text-right text-2xl font-black font-mono">{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gray-100 border-2 border-black p-6 border-dashed">
                <p className="font-mono text-sm text-center text-gray-500 italic">
                  Data sourced from Ministry of Agriculture, Animal Industry and Fisheries (MAAIF). Updates hourly.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="ads"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center h-64"
            >
              <p className="font-display text-2xl font-bold uppercase">Coming Soon: Merchant Portal</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch h-20 bg-white border-t-2 border-black font-display text-xs font-black uppercase">
        <button 
          onClick={() => setActiveTab('prices')}
          className={`flex flex-col items-center justify-center w-full h-full border-r border-black transition-colors ${activeTab === 'prices' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
        >
          <TrendingUp className="mb-1" size={24} />
          <span>Prices</span>
        </button>
        <button 
          onClick={() => setActiveTab('ads')}
          className={`flex flex-col items-center justify-center w-full h-full border-r border-black transition-colors ${activeTab === 'ads' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
        >
          <Ads className="mb-1" size={24} />
          <span>Ads</span>
        </button>
        <button 
          onClick={() => setActiveTab('ussd')}
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeTab === 'ussd' ? 'bg-primary text-white' : 'hover:bg-gray-100 text-black'}`}
        >
          <USSD className="mb-1" size={24} />
          <span>USSD</span>
        </button>
      </nav>
    </div>
  );
}
