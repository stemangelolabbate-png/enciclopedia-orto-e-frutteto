import React, { useState, useMemo, useEffect } from 'react';
import { Flower, FlowerType, Sunlight, Difficulty } from '../types';
import { FLOWERS_DATA } from '../data/flowersData';
import { MONTH_NAMES } from '../data/plants';
import { FlowerDetailModal } from './FlowerDetailModal';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  Sun, 
  Droplet, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Utensils, 
  Flower2, 
  ArrowUpDown
} from 'lucide-react';

export const FlowersSection: React.FC = () => {
  const currentMonth = new Date().getMonth() + 1; // 1-12

  // Filters State
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<FlowerType | 'tutti'>('tutti');
  const [selectedExposure, setSelectedExposure] = useState<Sunlight | 'tutti'>('tutti');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'tutti'>('tutti');
  const [floweringMonth, setFloweringMonth] = useState<number | null>(null);
  const [onlyPollinators, setOnlyPollinators] = useState(false);
  const [onlyEdible, setOnlyEdible] = useState(false);
  const [onlyGardenFriends, setOnlyGardenFriends] = useState(false);
  const [onlyFragrant, setOnlyFragrant] = useState(false);
  const [sortBy, setSortBy] = useState<'nome' | 'fioritura' | 'altezza'>('nome');

  // Selected Flower for Modal
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);

  // Failsafe: ripristina lo scorrimento del body quando la modale del fiore si chiude
  useEffect(() => {
    if (!selectedFlower) {
      document.body.style.overflow = '';
    }
  }, [selectedFlower]);

  // Available flower types
  const flowerTypes: FlowerType[] = [
    'Annuale',
    'Perenne',
    'Bulbosa',
    'Biennale',
    'Rampicante',
    'Arbusto da fiore'
  ];

  // Filtering and Sorting
  const filteredFlowers = useMemo(() => {
    return FLOWERS_DATA.filter((flower) => {
      // Search query filter
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matchesName = flower.nome.toLowerCase().includes(q);
        const matchesSci = flower.nomeScientifico.toLowerCase().includes(q);
        const matchesFam = flower.famiglia.toLowerCase().includes(q);
        const matchesDesc = flower.descrizione.toLowerCase().includes(q);
        const matchesColors = flower.coloriPrincipali.some(c => c.toLowerCase().includes(q));
        const matchesBenefit = flower.beneficioOrtoDescrizione?.toLowerCase().includes(q);

        if (!matchesName && !matchesSci && !matchesFam && !matchesDesc && !matchesColors && !matchesBenefit) {
          return false;
        }
      }

      // Type filter
      if (selectedType !== 'tutti' && flower.tipo !== selectedType) {
        return false;
      }

      // Exposure filter
      if (selectedExposure !== 'tutti' && flower.esposizione !== selectedExposure) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'tutti' && flower.difficolta !== selectedDifficulty) {
        return false;
      }

      // Month of flowering filter
      if (floweringMonth !== null && !flower.mesiFioritura.includes(floweringMonth)) {
        return false;
      }

      // Toggles
      if (onlyPollinators && !flower.attiraImpollinatori) return false;
      if (onlyEdible && !flower.edule) return false;
      if (onlyGardenFriends && !flower.amicoOrto) return false;
      if (onlyFragrant && !flower.profumata) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'nome') {
        return a.nome.localeCompare(b.nome, 'it');
      }
      if (sortBy === 'fioritura') {
        const minA = a.mesiFioritura[0] || 12;
        const minB = b.mesiFioritura[0] || 12;
        return minA - minB;
      }
      if (sortBy === 'altezza') {
        return a.altezzaMediaCm.max - b.altezzaMediaCm.max;
      }
      return 0;
    });
  }, [
    search,
    selectedType,
    selectedExposure,
    selectedDifficulty,
    floweringMonth,
    onlyPollinators,
    onlyEdible,
    onlyGardenFriends,
    onlyFragrant,
    sortBy
  ]);

  const resetFilters = () => {
    setSearch('');
    setSelectedType('tutti');
    setSelectedExposure('tutti');
    setSelectedDifficulty('tutti');
    setFloweringMonth(null);
    setOnlyPollinators(false);
    setOnlyEdible(false);
    setOnlyGardenFriends(false);
    setOnlyFragrant(false);
    setSortBy('nome');
  };

  const isFilterActive = Boolean(
    search ||
    selectedType !== 'tutti' ||
    selectedExposure !== 'tutti' ||
    selectedDifficulty !== 'tutti' ||
    floweringMonth !== null ||
    onlyPollinators ||
    onlyEdible ||
    onlyGardenFriends ||
    onlyFragrant
  );

  return (
    <div id="flowers-section-container" className="space-y-6">
      {/* Hero Banner for Flowers Section */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-pink-950/70 via-purple-950/60 to-stone-900 border border-pink-900/40 p-6 sm:p-8 text-stone-100 shadow-md">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/60 border border-pink-700/50 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flower2 className="w-3.5 h-3.5" />
            Sezione Speciale Botanica & Biodiversità
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Il Giardino dei Fiori & delle Api
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
            Esplora <strong>35 varietà complete di fiori</strong> ornamentali, bulbose, perenni, aromatiche e fioriture campestri. 
            Scopri come i fiori creano un ecosistema virtuoso: <strong>attirano impollinatori essenziali per ortaggi e alberi da frutto</strong>, 
            difendono naturalmente l'orto dai nematodi con il bio-diserbo radicale e offrono deliziosi <strong>fiori commestibili</strong> per la cucina.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
            <span className="bg-stone-900/80 px-3 py-1 rounded-lg border border-pink-500/30 text-pink-200">
              🌸 <strong>{FLOWERS_DATA.length}</strong> Varietà di Fiori
            </span>
            <span className="bg-stone-900/80 px-3 py-1 rounded-lg border border-amber-500/30 text-amber-200">
              🐝 <strong>{FLOWERS_DATA.filter(f => f.attiraImpollinatori).length}</strong> Amici di Api & Farfalle
            </span>
            <span className="bg-stone-900/80 px-3 py-1 rounded-lg border border-emerald-500/30 text-emerald-200">
              🥗 <strong>{FLOWERS_DATA.filter(f => f.edule).length}</strong> Fiori Commestibili
            </span>
            <span className="bg-stone-900/80 px-3 py-1 rounded-lg border border-cyan-500/30 text-cyan-200">
              🛡️ <strong>{FLOWERS_DATA.filter(f => f.amicoOrto).length}</strong> Bio-difesa per l'Orto
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filters Panel */}
      <div id="flower-filters-panel" className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Search Input Row */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            id="input-search-flowers"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cerca fiore per nome comune, scientifico, colore, virtù (es. Girasole, Tagete, Lavanda, Eduli)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-pink-500 text-sm text-stone-900 transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 rounded-md"
              title="Cancella ricerca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-stone-400 font-medium text-[11px]">Consigliati:</span>
          {[
            { label: '🐝 Piante per Api', q: 'api' },
            { label: '🥗 Fiori Commestibili', q: 'commestibile' },
            { label: '🛡️ Tagete e Bio-difesa', q: 'tagete' },
            { label: '🪻 Lavanda e Profumi', q: 'lavanda' },
            { label: '🌷 Bulbose', q: 'tulipano' },
            { label: '🌻 Girasoli giganti', q: 'girasole' }
          ].map((chip) => (
            <button
              key={chip.q}
              onClick={() => setSearch(chip.q)}
              className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 text-xs font-medium transition"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Type selector chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <button
            onClick={() => setSelectedType('tutti')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition ${
              selectedType === 'tutti'
                ? 'bg-pink-700 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Tutti i Tipi ({FLOWERS_DATA.length})
          </button>
          {flowerTypes.map((type) => {
            const count = FLOWERS_DATA.filter(f => f.tipo === type).length;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition ${
                  selectedType === type
                    ? 'bg-pink-700 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {type} ({count})
              </button>
            );
          })}
        </div>

        {/* Multi-Filter Bar & Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
          {/* Toggles */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setOnlyPollinators(!onlyPollinators)}
              className={`px-2.5 py-1.5 rounded-lg font-medium border transition flex items-center gap-1 ${
                onlyPollinators
                  ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              🐝 Attira Api & Farfalle
            </button>

            <button
              onClick={() => setOnlyEdible(!onlyEdible)}
              className={`px-2.5 py-1.5 rounded-lg font-medium border transition flex items-center gap-1 ${
                onlyEdible
                  ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-semibold'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Utensils className="w-3 h-3" /> Fiori Eduli
            </button>

            <button
              onClick={() => setOnlyGardenFriends(!onlyGardenFriends)}
              className={`px-2.5 py-1.5 rounded-lg font-medium border transition flex items-center gap-1 ${
                onlyGardenFriends
                  ? 'bg-cyan-100 border-cyan-300 text-cyan-900 font-semibold'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              <ShieldCheck className="w-3 h-3" /> Amici dell'Orto
            </button>

            <button
              onClick={() => setOnlyFragrant(!onlyFragrant)}
              className={`px-2.5 py-1.5 rounded-lg font-medium border transition flex items-center gap-1 ${
                onlyFragrant
                  ? 'bg-rose-100 border-rose-300 text-rose-900 font-semibold'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-3 h-3" /> Profumati
            </button>
          </div>

          {/* Controls: Month, Exposure, Sorting */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Month selector */}
            <select
              value={floweringMonth === null ? '' : floweringMonth}
              onChange={(e) => setFloweringMonth(e.target.value === '' ? null : Number(e.target.value))}
              className="px-2.5 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-stone-700 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-pink-500"
            >
              <option value="">Fioritura: Qualsiasi mese</option>
              {MONTH_NAMES.map((m, idx) => (
                <option key={m} value={idx + 1}>
                  Fioritura in {m} {idx + 1 === currentMonth ? '(Mese attuale)' : ''}
                </option>
              ))}
            </select>

            {/* Exposure */}
            <select
              value={selectedExposure}
              onChange={(e) => setSelectedExposure(e.target.value as Sunlight | 'tutti')}
              className="px-2.5 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-stone-700 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-pink-500"
            >
              <option value="tutti">Esposizione: Tutte</option>
              <option value="Pieno sole">☀️ Pieno sole</option>
              <option value="Mezz'ombra">⛅ Mezz'ombra</option>
              <option value="Ombra">☁️ Ombra</option>
            </select>

            {/* Sorting */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-stone-700 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-pink-500"
            >
              <option value="nome">Ordina: Nome A-Z</option>
              <option value="fioritura">Ordina: Mese Fioritura</option>
              <option value="altezza">Ordina: Altezza</option>
            </select>

            {isFilterActive && (
              <button
                onClick={resetFilters}
                className="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-semibold transition"
                title="Ripristina tutti i filtri"
              >
                Reset filtri
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count & Subtitle */}
      <div className="flex items-center justify-between px-1">
        <p className="text-xs sm:text-sm text-stone-600">
          Mostrando <strong>{filteredFlowers.length}</strong> di {FLOWERS_DATA.length} varietà di fiori
          {floweringMonth && ` in fiore a ${MONTH_NAMES[floweringMonth - 1]}`}
        </p>
        <span className="text-xs text-pink-700 font-medium hidden sm:inline">
          Clicca su un fiore per aprire la scheda botanica dettagliata
        </span>
      </div>

      {/* Flowers Grid */}
      {filteredFlowers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-500 space-y-3">
          <div className="text-4xl">🌸</div>
          <h3 className="text-lg font-bold text-stone-800">Nessun fiore trovato</h3>
          <p className="text-sm max-w-md mx-auto">
            Nessuna varietà corrisponde ai filtri impostati. Prova a modificare i termini di ricerca o a resettare i filtri.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-pink-700 text-white text-xs font-semibold hover:bg-pink-800 transition"
          >
            Azzera tutti i filtri
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredFlowers.map((flower) => {
            const isCurrentlyFlowering = flower.mesiFioritura.includes(currentMonth);

            return (
              <div
                key={flower.id}
                id={`flower-card-${flower.id}`}
                onClick={() => setSelectedFlower(flower)}
                className="group relative bg-white rounded-2xl border border-stone-200 hover:border-pink-300 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Card Top Row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform shrink-0">
                        {flower.icona}
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-pink-700 uppercase tracking-wider block">
                          {flower.tipo}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-pink-700 transition-colors leading-snug">
                          {flower.nome}
                        </h3>
                        <p className="text-xs italic text-stone-400 font-sans">
                          {flower.nomeScientifico}
                        </p>
                      </div>
                    </div>

                    {isCurrentlyFlowering && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-pink-100 text-pink-800 border border-pink-200 shrink-0">
                        In Fiore Ora
                      </span>
                    )}
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                    {flower.descrizione}
                  </p>

                  {/* Mini Flowering Timeline (Months 1-12) */}
                  <div className="mb-3 bg-stone-50 rounded-lg p-2 border border-stone-100">
                    <div className="flex items-center justify-between text-[10px] text-stone-400 mb-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-pink-500" />
                        Mesi di fioritura:
                      </span>
                      <span className="font-medium text-stone-600">
                        {flower.mesiFioritura.map(m => MONTH_NAMES[m - 1].slice(0, 3)).join(', ')}
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-0.5 text-center">
                      {['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'].map((mChar, idx) => {
                        const mNum = idx + 1;
                        const isF = flower.mesiFioritura.includes(mNum);
                        const isCurrent = mNum === currentMonth;

                        return (
                          <div
                            key={idx}
                            title={`${MONTH_NAMES[idx]}: ${isF ? 'Fioritura attiva' : 'Non in fiore'}`}
                            className={`h-4 rounded-xs flex items-center justify-center text-[9px] font-bold transition ${
                              isF
                                ? 'bg-pink-600 text-white'
                                : 'bg-stone-200/80 text-stone-400'
                            } ${isCurrent ? 'ring-1 ring-amber-500 font-extrabold' : ''}`}
                          >
                            {mChar}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Attributes chips */}
                  <div className="flex flex-wrap gap-2 text-xs text-stone-500 mb-3">
                    <span className="inline-flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded-md">
                      <Sun className="w-3 h-3 text-amber-500" />
                      {flower.esposizione}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded-md">
                      <Droplet className="w-3 h-3 text-sky-500" />
                      {flower.irrigazione.livello}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded-md">
                      ↕️ {flower.altezzaMediaCm.min}-{flower.altezzaMediaCm.max} cm
                    </span>
                  </div>
                </div>

                {/* Card Footer Badges & CTA */}
                <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px]">
                    {flower.attiraImpollinatori && (
                      <span className="text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-md font-medium" title="Attira Api e Farfalle">
                        🐝 Api
                      </span>
                    )}
                    {flower.edule && (
                      <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-md font-medium" title="Fiore Commestibile">
                        🥗 Edule
                      </span>
                    )}
                    {flower.amicoOrto && (
                      <span className="text-cyan-700 bg-cyan-50 border border-cyan-200 px-1.5 py-0.5 rounded-md font-medium" title="Bio-difesa per l'Orto">
                        🛡️ Bio
                      </span>
                    )}
                    {flower.profumata && (
                      <span className="text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded-md font-medium" title="Fiore Profumato">
                        🌸 Profumo
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-pink-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Scheda &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal for detail view */}
      <FlowerDetailModal
        flower={selectedFlower}
        onClose={() => setSelectedFlower(null)}
      />
    </div>
  );
};
