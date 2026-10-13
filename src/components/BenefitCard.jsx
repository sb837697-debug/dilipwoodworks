export default function BenefitCard({ icon: Icon, title, description, badge }) {
  return (
    <div className="bg-stone-900/90 rounded-2xl p-6 sm:p-7 border border-stone-800 hover:border-amber-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-amber-400" />
        </div>
        {badge && (
          <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-300/80 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-stone-300 leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
