import React from 'react';
import { FilterState, PlantCategory, Difficulty } from '../types';
import { MONTH_NAMES } from '../data/plants';
import { Search, X, Calendar, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface SearchAndFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  totalResults: number;
  totalPlants: number;
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  filters,
  onFilterChange,
  totalResults,
  totalPlants,
}) => {
  const currentRealMonth = new Date().getMonth() + 1; // 1-12

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, ricerca: e.target.value });
  };

  const handleClearSearch = () => {
    onFilterChange({ ...filters, ricerca: '' });
  };

  const handleCategoryChange = (categoria: PlantCategory | 'tutti') => {
    onFilterChange({ ...filters, categoria });
  };

  const handleDifficultyChange = (difficolta: Difficulty | 'tutti') => {
    onFilterChange({ ...filters, difficolta });
  };

  const handleMonthToggle = (month: number) => {
    if (filters.meseAttivo === month) {
      onFilterChange({ ...filters, meseAttivo: null });
    } else {
      onFilterChange({ ...filters, meseAttivo: month });
    }
  };

  const hasActiveFilters = 
    filters.ricerca !== '' || 
    filters.categoria !== 'tutti' || 
    filters.difficolta !== 'tutti' || 
    filters.meseAttivo !== null;

  const handleResetFilters = () => {
    onFilterChange({
      ricerca: '',
      categoria: 'tutti',
      sottoCategoria: 'tutti',
      difficolta: 'tutti',
      meseAttivo: null,
      soloSeminaOra: false,
      esposizione: 'tutti',
      ordinamento: 'nome',
    });
  };

  return (
    <div id="search-filter-section" className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-6 shadow-sm mb-8 space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          id="main-search-input"
          type="text"
          value={filters.ricerca}
          onChange={handleSearchChange}
          placeholder="Cerca ortaggio, frutto o aromatica (es. Basilico, Pomodoro, Fragola, Lamiaceae, peronospora...)"
          className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-stone-300 bg-stone-50/70 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent focus:bg-white text-base transition"
        />
        {filters.ricerca && (
          <button
            id="btn-clear-search"
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-600"
            aria-label="Cancella ricerca"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Quick Search Chips */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs -mt-1">
        <span className="text-stone-400 font-medium text-[11px]">Ricerche frequenti:</span>
        {[
          { label: '🍅 Pomodori', query: 'pomodori' },
          { label: '🌿 Erbe aromatiche', query: 'erbe aromatiche' },
          { label: '🍎 Alberi da frutto', query: 'alberi da frutto' },
          { label: '🌱 Legumi', query: 'legumi' },
          { label: '🍓 Frutti & Bacche', query: 'frutta' },
          { label: '🥔 Patate & Tuberi', query: 'patata' },
          { label: '🛡️ Peronospora', query: 'peronospora' },
          { label: '🐞 Afidi', query: 'afidi' },
        ].map((tag) => (
          <button
            key={tag.query}
            type="button"
            onClick={() => onFilterChange({ ...filters, ricerca: tag.query })}
            className={`px-2.5 py-1 rounded-lg transition text-xs font-medium ${
              filters.ricerca.toLowerCase() === tag.query.toLowerCase()
                ? 'bg-emerald-700 text-white shadow-2xs font-semibold'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200'
            }`}
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* Category Pills & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        {/* Category Pills */}
        <div id="category-pills" className="flex flex-wrap items-center gap-2">
          <button
            id="cat-pill-tutti"
            onClick={() => handleCategoryChange('tutti')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
              filters.categoria === 'tutti'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Tutte le Piante ({totalPlants})
          </button>

          <button
            id="cat-pill-ortaggio"
            onClick={() => handleCategoryChange('ortaggio')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition flex items-center space-x-1.5 ${
              filters.categoria === 'ortaggio'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <span>🥕</span>
            <span>Ortaggi</span>
          </button>

          <button
            id="cat-pill-frutto"
            onClick={() => handleCategoryChange('frutto')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition flex items-center space-x-1.5 ${
              filters.categoria === 'frutto'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <span>🍓</span>
            <span>Frutti</span>
          </button>

          <button
            id="cat-pill-aromatica"
            onClick={() => handleCategoryChange('aromatica')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition flex items-center space-x-1.5 ${
              filters.categoria === 'aromatica'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <span>🌿</span>
            <span>Erbe Aromatiche</span>
          </button>
        </div>

        {/* Sort and Filters helper */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm">
          <div className="flex items-center space-x-1 text-stone-500">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Ordina:</span>
          </div>
          <select
            id="select-sorting"
            value={filters.ordinamento}
            onChange={(e) => onFilterChange({ ...filters, ordinamento: e.target.value as FilterState['ordinamento'] })}
            className="bg-stone-100 border border-stone-300 rounded-lg px-2.5 py-1.5 text-stone-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="nome">Nome (A - Z)</option>
            <option value="giorniRaccolto">Tempo raccolto più veloce</option>
            <option value="difficolta">Difficoltà di coltivazione</option>
          </select>
        </div>
      </div>

      {/* Secondary Row: Sowing Month & Difficulty */}
      <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Month Selector for Sowing */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-stone-500 font-medium flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Semina nel mese:
          </span>
          
          <button
            id="btn-current-month"
            onClick={() => handleMonthToggle(currentRealMonth)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1 ${
              filters.meseAttivo === currentRealMonth
                ? 'bg-amber-500 text-stone-950 font-bold shadow-sm ring-2 ring-amber-300'
                : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            <span>🎯</span>
            <span>{MONTH_NAMES[currentRealMonth - 1]} (Questo mese)</span>
          </button>

          <select
            id="select-month-filter"
            value={filters.meseAttivo || ''}
            onChange={(e) => onFilterChange({ ...filters, meseAttivo: e.target.value ? Number(e.target.value) : null })}
            className="bg-stone-100 border border-stone-300 rounded-lg px-2 py-1 text-stone-700 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="">Tutti i 12 mesi</option>
            {MONTH_NAMES.map((m, idx) => (
              <option key={idx} value={idx + 1}>
                {m} {idx + 1 === currentRealMonth ? '(Mese corrente)' : ''}
              </option>
            ))}
          </select>

          {/* Difficulty filter */}
          <div className="flex items-center space-x-1 pl-2 border-l border-stone-200">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
            <select
              id="select-difficulty-filter"
              value={filters.difficolta}
              onChange={(e) => handleDifficultyChange(e.target.value as Difficulty | 'tutti')}
              className="bg-stone-100 border border-stone-300 rounded-lg px-2 py-1 text-stone-700 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="tutti">Tutte le difficoltà</option>
              <option value="Facile">Facile</option>
              <option value="Media">Media</option>
              <option value="Esperto">Esperto</option>
            </select>
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center space-x-3 text-xs text-stone-500">
          <span>
            Mostrati <strong>{totalResults}</strong> di {totalPlants}
          </span>
          {hasActiveFilters && (
            <button
              id="btn-reset-filters"
              onClick={handleResetFilters}
              className="text-rose-600 hover:text-rose-800 font-medium underline flex items-center space-x-1"
            >
              <X className="w-3 h-3" />
              <span>Resetta filtri</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
