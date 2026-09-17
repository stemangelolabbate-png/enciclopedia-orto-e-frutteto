import React, { useState } from 'react';
import { Plant } from '../types';
import { PLANTS_DATA } from '../data/plants';
import { HeartHandshake, CheckCircle, AlertTriangle, Sparkles, ChevronRight, Info } from 'lucide-react';

interface CompanionGuideProps {
  onSelectPlant: (plant: Plant) => void;
}

export const CompanionGuide: React.FC<CompanionGuideProps> = ({
  onSelectPlant,
}) => {
  const [selectedPlantId, setSelectedPlantId] = useState<string>('pomodoro');

  const currentPlant = PLANTS_DATA.find((p) => p.id === selectedPlantId) || PLANTS_DATA[0];

  const handlePickPlant = (name: string) => {
    const found = PLANTS_DATA.find((p) => 
      p.nome.toLowerCase().includes(name.toLowerCase()) || 
      name.toLowerCase().includes(p.nome.toLowerCase())
    );
    if (found) {
      setSelectedPlantId(found.id);
    }
  };

  return (
    <div id="companion-guide-section" className="space-y-6 font-sans">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-stone-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md border border-emerald-800">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-emerald-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
            <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Sinergie e Difesa Naturale</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Guida alle Consociazioni nell'Orto
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2 sm:line-clamp-none">
            In natura le piante si aiutano a vicenda: alcune aromatiche allontanano gli insetti,
            i legumi fissano l'azoto e certe unioni migliorano il sapore del raccolto.
          </p>
        </div>
      </div>

      {/* Interactive Companion Selector */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-6">
        <div>
          <label htmlFor="companion-plant-select" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
            Seleziona una pianta per scoprire chi piantare vicino:
          </label>
          <select
            id="companion-plant-select"
            value={selectedPlantId}
            onChange={(e) => setSelectedPlantId(e.target.value)}
            className="w-full sm:w-auto min-w-[280px] px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {PLANTS_DATA.map((p) => (
              <option key={p.id} value={p.id}>
                {p.icona} {p.nome} ({p.categoria})
              </option>
            ))}
          </select>
        </div>

        {/* Selected Plant Dossier */}
        <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200">
          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4 border-b border-stone-200 pb-3.5 sm:pb-4 mb-4">
            <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
              <span className="text-3xl sm:text-4xl p-1.5 sm:p-2 rounded-2xl bg-white border border-stone-200 shadow-2xs shrink-0">
                {currentPlant.icona}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif truncate">
                  {currentPlant.nome}
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-500 italic truncate">
                  {currentPlant.nomeScientifico} · {currentPlant.famiglia}
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectPlant(currentPlant)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 flex items-center gap-1 shadow-2xs"
            >
              <span>Vedi Scheda</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Amici & Nemici Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Amiche */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-900 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Consociazioni Amiche (Favorite)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentPlant.consociazioni.amiche.map((amica, i) => (
                  <button
                    key={i}
                    onClick={() => handlePickPlant(amica)}
                    className="px-3 py-1.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 font-bold text-xs hover:bg-emerald-600 hover:text-white transition shadow-2xs"
                  >
                    {amica} ↗
                  </button>
                ))}
              </div>
              <p className="text-xs text-emerald-950/80 leading-relaxed pt-1">
                <strong>Perché associarle:</strong> {currentPlant.consociazioni.motivo}
              </p>
            </div>

            {/* Nemiche */}
            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-3">
              <div className="flex items-center space-x-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Consociazioni Nemiche (Sconsigliate)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentPlant.consociazioni.nemiche.map((nemica, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white border border-rose-300 text-rose-900 font-bold text-xs"
                  >
                    {nemica}
                  </span>
                ))}
              </div>
              <p className="text-xs text-rose-950/80 leading-relaxed pt-1">
                <strong>Motivo:</strong> Possono competere aggressivamente per i medesimi nutrienti del terreno,
                rilasciare sostanze inibitorie attraverso le radici (allelopatia) o trasmettersi le stesse malattie fungine.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Classical Historical Guilds Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-stone-900 font-serif flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          Le 4 Consociazioni Classiche più Famose
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Trio delle Tre Sorelle */}
          <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">🌽 + 🫘 + 🎃</span>
              <h4 className="font-bold text-sm text-stone-900 mb-1">
                Le Tre Sorelle (Tradizione Nativa)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Il mais fa da tutore per il fagiolo rampicante; il fagiolo fissa azoto che nutre il mais; 
                la zucca copre il suolo con le grandi foglie impedendo le erbacce e conservando l'umidità.
              </p>
            </div>
            <span className="mt-3 pt-2 border-t border-stone-100 text-[11px] font-semibold text-emerald-700">
              Mais · Fagioli · Zucca
            </span>
          </div>

          {/* Pomodoro & Basilico */}
          <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">🍅 + 🌱</span>
              <h4 className="font-bold text-sm text-stone-900 mb-1">
                Il Binomio Mediterraneo
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Il basilico intensifica il sapore del pomodoro ed emette oli essenziali aromatici
                che disorientano mosche bianche, afidi e parassiti dannosi.
              </p>
            </div>
            <span className="mt-3 pt-2 border-t border-stone-100 text-[11px] font-semibold text-emerald-700">
              Pomodoro · Basilico Genovese
            </span>
          </div>

          {/* Carota & Cipolla */}
          <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">🥕 + 🧅</span>
              <h4 className="font-bold text-sm text-stone-900 mb-1">
                La Difesa Incrociata
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                L'odore solforato della cipolla allontana la temuta mosca della carota, mentre il profumo 
                della carota respinge la mosca della cipolla. Una protezione biologica al 100%!
              </p>
            </div>
            <span className="mt-3 pt-2 border-t border-stone-100 text-[11px] font-semibold text-emerald-700">
              Carota · Cipolla / Porro
            </span>
          </div>

          {/* Cavoli & Aromatiche */}
          <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl mb-2 block">🥬 + 🌿</span>
              <h4 className="font-bold text-sm text-stone-900 mb-1">
                La Sentinella dei Cavoli
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Rosmarino, salvia, timo e menta confondono con il loro intenso bouquet di aromi
                le farfalle della cavolaia impedendo loro di deporre le uova voraci.
              </p>
            </div>
            <span className="mt-3 pt-2 border-t border-stone-100 text-[11px] font-semibold text-emerald-700">
              Cavoli · Salvia · Rosmarino
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
