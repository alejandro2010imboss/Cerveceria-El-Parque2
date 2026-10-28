import { Flame, Leaf, Star } from 'lucide-react'
import { formatPrice, type Dish } from '@/lib/menu-data'
import { AllergenIcon } from './allergens'

export function DishCard({ dish }: { dish: Dish }) {
  const isFavorite = dish.tags?.includes('favorito')
  const isVeggie = dish.tags?.includes('vegetariano')
  const isSpicy = dish.tags?.includes('picante')

  return (
    <article className="flex flex-col gap-3 border-b border-border py-5 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1.5">
          {isFavorite && (
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
              <Star className="size-3 fill-current" aria-hidden="true" />
              Favorito de la casa
            </span>
          )}
          <h3 className="font-serif text-lg font-medium leading-snug text-balance">
            {dish.name}
            {isVeggie && (
              <Leaf className="ml-1.5 inline size-4 align-[-2px] text-success" aria-label="Vegetariano" role="img" />
            )}
            {isSpicy && (
              <Flame className="ml-1 inline size-4 align-[-2px] text-primary" aria-label="Picante" role="img" />
            )}
          </h3>
        </div>
        <p className="shrink-0 pt-0.5 text-right font-semibold tabular-nums">
          {formatPrice(dish.price)}
          {dish.note && <span className="block text-[11px] font-normal text-muted-foreground">{dish.note}</span>}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{dish.description}</p>
      {dish.allergens && dish.allergens.length > 0 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Alérgenos">
          {dish.allergens.map((id) => (
            <li key={id}>
              <AllergenIcon id={id} />
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
