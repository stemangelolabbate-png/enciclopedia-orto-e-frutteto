import React from 'react';
import { ViewTab, ClimateZone } from '../types';
import { CLIMATE_ZONES } from '../utils/climateHelper';
import { BookOpen, Sprout, CalendarDays, HeartHandshake, PlusCircle, ShieldAlert, MapPin, Flower2 } from 'lucide-react';

interface NavbarProps {
  currentTab: ViewTab;
  onTabChange: (tab: ViewTab) => void;
  activePlantingsCount: number;
  urgentRemindersCount?: number;
  onOpenNewPlanting: () => void;
  climateZone: ClimateZone;
  onOpenClimateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  activePlantingsCount,
  urgentRemindersCount = 0,
  onOpenNewPlanting,
  climateZone,
  onOpenClimateModal,
}) => {
  const zoneInfo = CLIMATE_ZONES[climateZone] || CLIMATE_ZONES.centro;

  return (
    <header id="main-header" className="sticky top-0 z-30 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <div 
            id="brand-logo"
            onClick={() => onTabChange('enciclopedia')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform duration-200">
              🌱
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif font-bold text-lg sm:text-xl text-stone-100 tracking-tight">
                  Enciclopedia dell'Orto
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/50 rounded-full">
                  Virtuale
                </span>
              </div>
              <p className="text-xs text-stone-400 font-sans hidden sm:block">
                Ortaggi, Frutti, Aromatiche, Malattie & Giorni di Crescita
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Desktop) */}
          <nav id="nav-tabs" className="hidden xl:flex items-center space-x-1 p-1 bg-stone-800/80 rounded-xl border border-stone-700/60">
            <button
              id="tab-enciclopedia"
              onClick={() => onTabChange('enciclopedia')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'enciclopedia'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Enciclopedia</span>
            </button>

            <button
              id="tab-orto"
              onClick={() => onTabChange('orto')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                currentTab === 'orto'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <Sprout className="w-4 h-4" />
              <span>Il Mio Orto & Giorni</span>
              {activePlantingsCount > 0 && (
                <span className="px-1.5 py-0.2 text-xs font-bold bg-amber-500 text-stone-950 rounded-full">
                  {activePlantingsCount}
                </span>
              )}
              {urgentRemindersCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" title={`${urgentRemindersCount} promemoria urgenti`} />
              )}
            </button>

            <button
              id="tab-malattie"
              onClick={() => onTabChange('malattie')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'malattie'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Malattie & Parassiti</span>
            </button>

            <button
              id="tab-calendario"
              onClick={() => onTabChange('calendario')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'calendario'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <CalendarDays className="w-4 h-4" />
              <span>Calendario & Clima</span>
            </button>

            <button
              id="tab-consociazioni"
              onClick={() => onTabChange('consociazioni')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'consociazioni'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Consociazioni</span>
            </button>

            <button
              id="tab-fiori"
              onClick={() => onTabChange('fiori')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'fiori'
                  ? 'bg-pink-700 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <Flower2 className="w-4 h-4 text-pink-300" />
              <span>Giardino dei Fiori</span>
            </button>
          </nav>

          {/* Location & Quick CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Climate Location Badge / Button */}
            <button
              id="btn-open-climate-selector"
              onClick={onOpenClimateModal}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700/80 text-stone-200 text-xs sm:text-sm font-medium transition"
              title="Cambia zona climatica dell'orto"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">{zoneInfo.titoloBreve}</span>
              <span className="sm:hidden">{climateZone.toUpperCase()}</span>
            </button>

            <button
              id="btn-quick-new-planting"
              onClick={onOpenNewPlanting}
              className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition shadow-sm"
              title="Calcola o avvia una nuova semina con conteggio giorni"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden md:inline">Calcola Semina</span>
              <span className="md:hidden">Semina</span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Sub-Navigation */}
        <div id="mobile-nav-tabs" className="xl:hidden flex items-center justify-between border-t border-stone-800 py-2.5 overflow-x-auto gap-1 text-xs no-scrollbar">
          <button
            id="mobile-tab-enciclopedia"
            onClick={() => onTabChange('enciclopedia')}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition shrink-0 ${
              currentTab === 'enciclopedia'
                ? 'bg-emerald-600 text-white'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Enciclopedia</span>
          </button>

          <button
            id="mobile-tab-orto"
            onClick={() => onTabChange('orto')}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition shrink-0 ${
              currentTab === 'orto'
                ? 'bg-emerald-600 text-white'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Sprout className="w-3.5 h-3.5" />
            <span>Il Mio Orto</span>
            {activePlantingsCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-amber-500 text-stone-950 font-bold rounded-full">
                {activePlantingsCount}
              </span>
            )}
          </button>

          <button
            id="mobile-tab-malattie"
            onClick={() => onTabChange('malattie')}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition shrink-0 ${
              currentTab === 'malattie'
                ? 'bg-amber-600 text-white'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Malattie & Bio</span>
          </button>

          <button
            id="mobile-tab-calendario"
            onClick={() => onTabChange('calendario')}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition shrink-0 ${
              currentTab === 'calendario'
                ? 'bg-emerald-600 text-white'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Calendario</span>
          </button>

          <button
            id="mobile-tab-consociazioni"
            onClick={() => onTabChange('consociazioni')}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition shrink-0 ${
              currentTab === 'consociazioni'
                ? 'bg-emerald-600 text-white'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Consociazioni</span>
          </button>

          <button
            id="mobile-tab-fiori"
            onClick={() => onTabChange('fiori')}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition shrink-0 ${
              currentTab === 'fiori'
                ? 'bg-pink-700 text-white'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Flower2 className="w-3.5 h-3.5 text-pink-300" />
            <span>Fiori & Api</span>
          </button>
        </div>
      </div>
    </header>
  );
};
