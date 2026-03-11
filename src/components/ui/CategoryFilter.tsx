import { categories } from "../../data/categories";

interface CategoryFilterProps {
    selected: string
    onSelect: (slug: string) => void
}

export default function CategoryFilter({selected, onSelect} : CategoryFilterProps) {
  return (
    <div className="flex items-center gap-3">
        {/* opcion todos */}
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

        {/* Catgorias */}
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
  )
}
