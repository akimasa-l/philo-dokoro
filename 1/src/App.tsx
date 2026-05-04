export default function GachaScreen() {
  const characters = [
    {
      rarity: "SSR",
      name: "Celestia",
      color: "from-yellow-300 to-orange-500",
    },
    {
      rarity: "SR",
      name: "Noir",
      color: "from-purple-400 to-pink-500",
    },
    {
      rarity: "R",
      name: "Aqua",
      color: "from-cyan-300 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_40%)]" />

      <div className="relative z-10 max-w-md mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-3xl font-black tracking-wide">ASTRA GATE</div>
            <div className="text-sm text-slate-300">Limited Time Summon</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/10 shadow-xl">
            <div className="text-xs text-slate-300">Gems</div>
            <div className="text-xl font-bold">12,840</div>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/70 via-indigo-500/60 to-cyan-500/70" />

          <div className="relative p-6 min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-300 text-black font-black px-3 py-1 rounded-full text-xs mb-4 animate-pulse">
                ★ RATE UP EVENT
              </div>

              <h1 className="text-5xl font-black leading-none mb-2 drop-shadow-lg">
                CELESTIA
              </h1>

              <div className="text-lg font-semibold text-cyan-100 mb-4">
                Starbreaker Princess
              </div>

              <p className="text-sm text-slate-100 max-w-xs leading-relaxed">
                A limited SSR character with dazzling cosmic magic and ultimate burst attacks.
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              {characters.map((c) => (
                <div
                  key={c.name}
                  className={`flex-1 rounded-2xl p-3 bg-gradient-to-br ${c.color} shadow-xl border border-white/20 backdrop-blur-md`}
                >
                  <div className="text-xs font-bold opacity-80">{c.rarity}</div>
                  <div className="text-lg font-black">{c.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center backdrop-blur-md">
            <div className="text-xs text-slate-300">SSR Rate</div>
            <div className="text-xl font-black text-yellow-300">3%</div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center backdrop-blur-md">
            <div className="text-xs text-slate-300">Pulls Today</div>
            <div className="text-xl font-black">24</div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center backdrop-blur-md">
            <div className="text-xs text-slate-300">Pity</div>
            <div className="text-xl font-black text-pink-300">67</div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-lg font-bold hover:scale-[1.02] transition-transform shadow-xl">
            Single Pull ×1
            <div className="text-sm text-slate-300 font-medium">Cost: 300 Gems</div>
          </button>

          <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-black text-xl font-black shadow-2xl hover:scale-[1.02] transition-transform relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-1000" />
            <span className="relative">10x SUMMON</span>
            <div className="relative text-sm font-semibold opacity-80">
              Guaranteed SR or higher
            </div>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-3 text-xs text-slate-400">
          <button className="hover:text-white transition-colors">
            Rates
          </button>
          <button className="hover:text-white transition-colors">
            Details
          </button>
          <button className="hover:text-white transition-colors">
            History
          </button>
        </div>
      </div>
    </div>
  );
}
