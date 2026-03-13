import { categories } from "../../data/categories"

interface CategoryFilterProps {
    selected: string
    onSelect: (slug: string) => void
}

export default function CategoryFilter({selected, onSelect} : CategoryFilterProps) {

  const allOptions = [
    { slug: 'todos', name: 'TODOS' },
    ...categories.map(cat => ({ slug: cat.slug, name: cat.name }))
  ]

  return (
    <>
      {/* Dropdown — solo móvil */}
      <div className="md:hidden w-full max-w-xs">
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full bg-dark border border-white/20 text-white font-lato text-sm tracking-widest px-4 py-3 rounded-full appearance-none text-center cursor-pointer focus:outline-none focus:border-gold-light transition-colors duration-300"
        >
          {allOptions.map((opt) => (
            <option key={opt.slug} value={opt.slug} className="bg-dark">
              {opt.name}
            </option>
          ))}
        </select>
        {/* Flecha indicadora */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-light pointer-events-none">
            ▼
        </span>
      </div>

      {/* Botones — tablet y desktop */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={() => onSelect('todos')}
          className={`px-6 py-2 rounded-full font-lato text-sm tracking-widest transition-all duration-300
            ${selected === 'todos'
              ? 'bg-gold-light text-dark font-bold'
              : 'border border-white/20 text-white/60 hover:border-gold-light hover:text-gold-light'
            }`}
        >
          TODOS
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onSelect(cat.slug)}
            className={`px-6 py-2 rounded-full font-lato text-sm tracking-widest transition-all duration-300
              ${selected === cat.slug
                ? 'bg-gold-light text-dark font-bold'
                : 'border border-white/20 text-white/60 hover:border-gold-light hover:text-gold-light'
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </>
  )
}