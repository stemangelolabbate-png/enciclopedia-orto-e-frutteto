import React, { useState, useEffect, useMemo } from 'react';
import { ViewTab, Plant, ActivePlanting, FilterState, ClimateZone } from './types';
import { PLANTS_DATA, MONTH_NAMES } from './data/plants';
import { matchesPlantQuery, calculatePlantRelevanceScore } from './utils/searchHelper';
import { getAdjustedMonths, CLIMATE_ZONES } from './utils/climateHelper';
import { calculateGrowthStatus } from './utils/gardenCalculator';
import { Navbar } from './components/Navbar';
import { SearchAndFilters } from './components/SearchAndFilters';
import { PlantCard } from './components/PlantCard';
import { PlantDetailModal } from './components/PlantDetailModal';
import { SowingCalculatorModal } from './components/SowingCalculatorModal';
import { MyGardenTracker } from './components/MyGardenTracker';
import { SowingCalendar } from './components/SowingCalendar';
import { CompanionGuide } from './components/CompanionGuide';
import { PestDiseaseManager } from './components/PestDiseaseManager';
import { FlowersSection } from './components/FlowersSection';
import { ClimateModal } from './components/ClimateModal';
import { 
  BookOpen, 
  Calendar, 
  CalendarClock, 
  ShieldAlert,
  MapPin,
  Sparkles,
  Flower2
} from 'lucide-react';

const PLANTINGS_STORAGE_KEY = 'orto_virtuale_plantings_v1';
const CLIMATE_STORAGE_KEY = 'orto_virtuale_climate_zone_v1';

// Initial default seed plantings to showcase the live day counter immediately
const INITIAL_SAMPLE_PLANTINGS: ActivePlanting[] = [
  {
    id: 'sample-pomodoro',
    plantId: 'pomodoro',
    nomePersonalizzato: 'Pomodori Cuore di Bue (Cassone 1)',
    dataSemina: (() => {
      const d = new Date();
      d.setDate(d.getDate() - 25);
      return d.toISOString().split('T')[0];
    })(),
    tipoAvvio: 'seme',
    giorniStimatiRaccolto: 80,
    note: 'Seminati in terra soffice con compost maturo; spuntate prime foglie.',
    completata: false,
    creatoIl: new Date().toISOString(),
  },
  {
    id: 'sample-basilico',
    plantId: 'basilico',
    nomePersonalizzato: 'Basilico Genovese Profumato',
    dataSemina: (() => {
      const d = new Date();
      d.setDate(d.getDate() - 10);
      return d.toISOString().split('T')[0];
    })(),
    tipoAvvio: 'seme',
    giorniStimatiRaccolto: 40,
    note: 'In vaso sul davanzale soleggiato, bagnato regolarmente.',
    completata: false,
    creatoIl: new Date().toISOString(),
  },
  {
    id: 'sample-fragola',
    plantId: 'fragola',
    nomePersonalizzato: 'Fragole Rifiorenti dell\'Orto',
    dataSemina: (() => {
      const d = new Date();
      d.setDate(d.getDate() - 52);
      return d.toISOString().split('T')[0];
    })(),
    tipoAvvio: 'trapianto',
    giorniStimatiRaccolto: 70,
    note: 'Trapiantate con pacciamatura di paglia pulita; comparsi i primi frutti.',
    completata: false,
    creatoIl: new Date().toISOString(),
  }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('enciclopedia');

  // Climate Zone & First-time Location prompt
  const [climateZone, setClimateZone] = useState<ClimateZone>(() => {
    try {
      const saved = localStorage.getItem(CLIMATE_STORAGE_KEY);
      if (saved && (saved === 'nord' || saved === 'centro' || saved === 'sud')) {
        return saved as ClimateZone;
      }
    } catch {
      // ignore
    }
    return 'centro';
  });

  const [isClimateModalOpen, setIsClimateModalOpen] = useState<boolean>(false);

  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false);

  // Active Plantings State
  const [plantings, setPlantings] = useState<ActivePlanting[]>(() => {
    try {
      const saved = localStorage.getItem(PLANTINGS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_SAMPLE_PLANTINGS;
  });

  // Modals state
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [calculatorOpen, setCalculatorOpen] = useState<boolean>(false);
  const [calculatorInitialPlant, setCalculatorInitialPlant] = useState<Plant | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [selectedDiseaseIdForManager, setSelectedDiseaseIdForManager] = useState<string | null>(null);

  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    ricerca: '',
    categoria: 'tutti',
    sottoCategoria: 'tutti',
    difficolta: 'tutti',
    meseAttivo: null,
    soloSeminaOra: false,
    esposizione: 'tutti',
    ordinamento: 'nome',
  });

  // Persist plantings
  useEffect(() => {
    try {
      localStorage.setItem(PLANTINGS_STORAGE_KEY, JSON.stringify(plantings));
    } catch {
      // storage unavailable
    }
  }, [plantings]);

  // Handle Climate Zone Change
  const handleSelectClimateZone = (zone: ClimateZone) => {
    setClimateZone(zone);
    try {
      localStorage.setItem(CLIMATE_STORAGE_KEY, zone);
    } catch {
      // ignore
    }
    showToast(`Zona impostata: ${CLIMATE_ZONES[zone].nome} 📍`);
  };

  // Show temporary toast notification
  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Add planting from calculator
  const handleSavePlanting = (data: Omit<ActivePlanting, 'id' | 'creatoIl'>) => {
    const newPlanting: ActivePlanting = {
      ...data,
      id: 'planting-' + Date.now(),
      creatoIl: new Date().toISOString(),
    };
    setPlantings((prev) => [newPlanting, ...prev]);
    showToast(`"${data.nomePersonalizzato}" è stato aggiunto al Tuo Orto!`);
    setCurrentTab('orto');
  };

  // Toggle crop completed
  const handleToggleComplete = (id: string) => {
    setPlantings((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = !p.completata;
          if (updated) {
            showToast(`Complimenti! "${p.nomePersonalizzato}" segnato come raccolto! 🧺`);
          }
          return { ...p, completata: updated };
        }
        return p;
      })
    );
  };

  // Delete planting
  const handleDeletePlanting = (id: string) => {
    setPlantings((prev) => prev.filter((p) => p.id !== id));
    showToast('Coltivazione rimossa dal diario.');
  };

  // Log care action (watering, fertilizer, pest treatment)
  const handleLogCareAction = (plantingId: string, actionType: 'irrigazione' | 'concimazione' | 'difesa') => {
    const nowIso = new Date().toISOString();
    setPlantings((prev) =>
      prev.map((p) => {
        if (p.id === plantingId) {
          if (actionType === 'irrigazione') {
            showToast(`💧 Annaffiatura registrata per "${p.nomePersonalizzato}"!`);
            return { ...p, ultimoAnnaffiato: nowIso };
          }
          if (actionType === 'concimazione') {
            showToast(`🌱 Concimazione registrata per "${p.nomePersonalizzato}"!`);
            return { ...p, ultimoConcimato: nowIso };
          }
          if (actionType === 'difesa') {
            showToast(`🛡️ Trattamento bio registrato per "${p.nomePersonalizzato}"!`);
            return { ...p, ultimoTrattamentoBio: nowIso };
          }
        }
        return p;
      })
    );
  };

  // Open calculator for a specific plant
  const handleOpenCalculator = (plant: Plant) => {
    setCalculatorInitialPlant(plant);
    setCalculatorOpen(true);
  };

  // Open calculator generally
  const handleOpenNewPlantingGeneral = () => {
    setCalculatorInitialPlant(PLANTS_DATA[0]);
    setCalculatorOpen(true);
  };

  // Select another plant by name (used in modal companion links)
  const handleSelectAnotherPlant = (name: string) => {
    const found = PLANTS_DATA.find(
      (p) =>
        p.nome.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(p.nome.toLowerCase())
    );
    if (found) {
      setSelectedPlant(found);
    }
  };

  // Open Disease Manager for a specific adversity
  const handleOpenDiseaseManagerWithId = (diseaseQuery?: string) => {
    setSelectedDiseaseIdForManager(diseaseQuery || null);
    setCurrentTab('malattie');
  };

  // High-performance intelligent search & filter
  const filteredPlants = useMemo(() => {
    return PLANTS_DATA.filter((plant) => {
      // Intelligent text search with morphological variants (plurals, accents, synonyms)
      if (filters.ricerca.trim()) {
        if (!matchesPlantQuery(plant, filters.ricerca)) {
          return false;
        }
      }

      // Category filter
      if (filters.categoria !== 'tutti' && plant.categoria !== filters.categoria) {
        return false;
      }

      // Sub-category filter
      if (filters.sottoCategoria !== 'tutti' && plant.sottoCategoria !== filters.sottoCategoria) {
        return false;
      }

      // Difficulty filter
      if (filters.difficolta !== 'tutti' && plant.difficolta !== filters.difficolta) {
        return false;
      }

      // Exposure filter
      if (filters.esposizione !== 'tutti' && plant.esposizione !== filters.esposizione) {
        return false;
      }

      // Month filter (climate-zone aware)
      if (filters.meseAttivo !== null) {
        const terraMonths = getAdjustedMonths(plant.mesiSeminaTerra, climateZone, 'semina');
        const semenzaioMonths = getAdjustedMonths(plant.mesiSeminaSemenzaio, climateZone, 'semina');
        const canSow = terraMonths.includes(filters.meseAttivo) || semenzaioMonths.includes(filters.meseAttivo);
        if (!canSow) return false;
      }

      return true;
    }).sort((a, b) => {
      // Prioritize semantic and morphological relevance score when searching
      if (filters.ricerca.trim()) {
        const scoreA = calculatePlantRelevanceScore(a, filters.ricerca);
        const scoreB = calculatePlantRelevanceScore(b, filters.ricerca);
        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        }
      }

      if (filters.ordinamento === 'nome') {
        return a.nome.localeCompare(b.nome, 'it');
      }
      if (filters.ordinamento === 'giorniRaccolto') {
        return a.giorniRaccolto.min - b.giorniRaccolto.min;
      }
      if (filters.ordinamento === 'difficolta') {
        const order = { Facile: 1, Media: 2, Esperto: 3 };
        return order[a.difficolta] - order[b.difficolta];
      }
      return 0;
    });
  }, [filters, climateZone]);

  const currentMonthNum = new Date().getMonth() + 1;
  const activePlantingsCount = plantings.filter((p) => !p.completata).length;

  // Calculate urgent reminders count across all active crops
  const urgentRemindersCount = useMemo(() => {
    return plantings
      .filter((p) => !p.completata)
      .reduce((acc, planting) => {
        const plant = PLANTS_DATA.find((item) => item.id === planting.plantId) || PLANTS_DATA[0];
        const status = calculateGrowthStatus(plant, planting, climateZone);
        const urgent = status.promemoria.filter((r) => r.urgente).length;
        return acc + urgent;
      }, 0);
  }, [plantings, climateZone]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans">
      {/* Toast Notification Banner */}
      {notification && (
        <div
          id="toast-notification"
          className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-stone-700 flex items-center space-x-3 transition-all"
        >
          <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
            ✓
          </span>
          <span className="text-sm font-medium">{notification}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        activePlantingsCount={activePlantingsCount}
        urgentRemindersCount={urgentRemindersCount}
        onOpenNewPlanting={handleOpenNewPlantingGeneral}
        climateZone={climateZone}
        onOpenClimateModal={() => {
          setIsFirstVisit(false);
          setIsClimateModalOpen(true);
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* VIEW 1: ENCICLOPEDIA BOTANICA INTERATTIVA */}
        {currentTab === 'enciclopedia' && (
          <div id="view-enciclopedia" className="space-y-6">
            {/* Hero Quick Welcome */}
            <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md border border-emerald-800/40 relative overflow-hidden">
              <div className="max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-800/60 border border-emerald-700 text-emerald-300 text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Enciclopedia Botanica dell'Orto</span>
                </div>
                <h1 className="text-xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                  Tutto quello che vuoi coltivare, a portata di ricerca
                </h1>
                <p className="text-stone-300 text-xs sm:text-base mt-1.5 sm:mt-2 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Cerca tra {PLANTS_DATA.length} varietà complete di ortaggi, frutti, legumi, alberi da frutto e piante aromatiche con giorni esatti di crescita, lune e rimedi biologici.
                </p>

                {/* Quick Shortcuts */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-3.5 sm:mt-5">
                  <button
                    onClick={() => {
                      setFilters({
                        ...filters,
                        meseAttivo: currentMonthNum,
                        ricerca: '',
                        categoria: 'tutti',
                      });
                    }}
                    className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Semina ORA ad {MONTH_NAMES[currentMonthNum - 1]}</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab('orto')}
                    className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center gap-1.5 transition border border-stone-700 active:scale-95"
                  >
                    <CalendarClock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mio Orto ({activePlantingsCount})</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab('malattie')}
                    className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-amber-900/60 hover:bg-amber-800/80 text-amber-200 text-xs font-semibold flex items-center gap-1.5 transition border border-amber-700/60 active:scale-95"
                  >
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Guida Malattie & Rimedi Bio</span>
                    <span className="sm:hidden">Malattie Bio</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab('fiori')}
                    className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-pink-950/70 hover:bg-pink-900/80 text-pink-200 text-xs font-semibold flex items-center gap-1.5 transition border border-pink-700/50 active:scale-95"
                  >
                    <Flower2 className="w-3.5 h-3.5 text-pink-300" />
                    <span>Fiori & Api (35)</span>
                  </button>

                  <button
                    onClick={() => setIsClimateModalOpen(true)}
                    className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-emerald-300 text-xs font-medium flex items-center gap-1 transition border border-stone-700 active:scale-95"
                  >
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{CLIMATE_ZONES[climateZone].titoloBreve}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Search & Filter Component */}
            <SearchAndFilters
              filters={filters}
              onFilterChange={setFilters}
              totalResults={filteredPlants.length}
              totalPlants={PLANTS_DATA.length}
            />

            {/* Plants Grid */}
            {filteredPlants.length === 0 ? (
              <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200">
                <span className="text-4xl block mb-3">🔍</span>
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  Nessuna pianta trovata per "{filters.ricerca}"
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mt-1 mb-4">
                  Prova a digitare il nome singolare o plurale (es. pomodori, zucchine, basilico, melanzane) oppure azzera i filtri.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      ricerca: '',
                      categoria: 'tutti',
                      sottoCategoria: 'tutti',
                      difficolta: 'tutti',
                      meseAttivo: null,
                      soloSeminaOra: false,
                      esposizione: 'tutti',
                      ordinamento: 'nome',
                    })
                  }
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition"
                >
                  Mostra tutte le {PLANTS_DATA.length} piante
                </button>
              </div>
            ) : (
              <div
                id="plants-cards-grid"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filteredPlants.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onSelectPlant={setSelectedPlant}
                    onOpenCalculator={handleOpenCalculator}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: IL MIO ORTO & CONTEGGIO GIORNI */}
        {currentTab === 'orto' && (
          <MyGardenTracker
            plantings={plantings}
            onToggleComplete={handleToggleComplete}
            onDeletePlanting={handleDeletePlanting}
            onOpenNewPlanting={handleOpenNewPlantingGeneral}
            onSelectPlant={(plantId) => {
              const p = PLANTS_DATA.find((item) => item.id === plantId);
              if (p) setSelectedPlant(p);
            }}
            climateZone={climateZone}
            onLogCareAction={handleLogCareAction}
          />
        )}

        {/* VIEW 3: SEZIONE MALATTIE, PARASSITI E RIMEDI BIO */}
        {currentTab === 'malattie' && (
          <PestDiseaseManager
            onSelectPlant={(plantId) => {
              const p = PLANTS_DATA.find((item) => item.id === plantId);
              if (p) setSelectedPlant(p);
            }}
            initialDiseaseId={selectedDiseaseIdForManager}
            onClearInitialDisease={() => setSelectedDiseaseIdForManager(null)}
          />
        )}

        {/* VIEW 4: CALENDARIO LUNARE DELLE SEMINE */}
        {currentTab === 'calendario' && (
          <SowingCalendar
            onSelectPlant={setSelectedPlant}
            onOpenCalculator={handleOpenCalculator}
            climateZone={climateZone}
            onOpenClimateModal={() => setIsClimateModalOpen(true)}
          />
        )}

        {/* VIEW 5: GUIDA ALLE CONSOCIAZIONI */}
        {currentTab === 'consociazioni' && (
          <CompanionGuide onSelectPlant={setSelectedPlant} />
        )}

        {/* VIEW 6: SEZIONE DEDICATA AI FIORI & BIODIVERSITÀ */}
        {currentTab === 'fiori' && (
          <FlowersSection />
        )}
      </main>

      {/* FOOTER */}
      <footer className="mt-auto bg-stone-900 text-stone-400 border-t border-stone-800 py-8 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🌱</span>
            <span className="font-serif font-bold text-stone-200">
              Enciclopedia dell'Orto & Frutteto
            </span>
            <span className="text-stone-500">— Guida Botanica & Difesa Biologica</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <button
              onClick={() => setCurrentTab('enciclopedia')}
              className="hover:text-stone-200 transition"
            >
              Enciclopedia ({PLANTS_DATA.length} piante)
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('fiori')}
              className="hover:text-pink-300 transition text-pink-400/90 font-medium"
            >
              🌸 Giardino dei Fiori (35 varietà)
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('orto')}
              className="hover:text-stone-200 transition"
            >
              Diario & Promemoria
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('malattie')}
              className="hover:text-stone-200 transition"
            >
              Malattie & Parassiti Bio
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('calendario')}
              className="hover:text-stone-200 transition"
            >
              Calendario Lunare ({CLIMATE_ZONES[climateZone].titoloBreve})
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('consociazioni')}
              className="hover:text-stone-200 transition"
            >
              Consociazioni
            </button>
          </div>
        </div>
      </footer>

      {/* PLANT DETAIL MODAL */}
      <PlantDetailModal
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
        onOpenCalculator={handleOpenCalculator}
        onSelectAnotherPlant={handleSelectAnotherPlant}
        climateZone={climateZone}
        onOpenDiseaseManager={handleOpenDiseaseManagerWithId}
      />

      {/* SOWING CALCULATOR MODAL */}
      <SowingCalculatorModal
        initialPlant={calculatorInitialPlant}
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onSaveToGarden={handleSavePlanting}
      />

      {/* CLIMATE / LOCATION ONBOARDING & SETUP MODAL */}
      <ClimateModal
        isOpen={isClimateModalOpen}
        onClose={() => setIsClimateModalOpen(false)}
        selectedZone={climateZone}
        onSelectZone={handleSelectClimateZone}
        isFirstVisit={isFirstVisit}
      />
    </div>
  );
}
