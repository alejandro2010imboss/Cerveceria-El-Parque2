'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { ChevronDown, Filter, X } from 'lucide-react'
import { menu, type AllergenId } from '@/lib/menu-data'
import { cn } from '@/lib/utils'
import { allergenIds, allergens } from './allergens'
import { DishCard } from './dish-card'

export function MenuTabs() {
  const [activeId, setActiveId] = useState(menu[0].id)
  const [excluded, setExcluded] = useState<AllergenId[]>([])
  const [filterOpen, setFilterOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const activeCategory = menu.find((c) => c.id === activeId) ?? menu[0]
  const visibleDishes = activeCategory.dishes.filter(
    (dish) => !dish.allergens?.some((a) => excluded.includes(a)),
  )
  const hiddenCount = activeCategory.dishes.length - visibleDishes.length

  function selectTab(id: string) {
    setActiveId(id)
    tabRefs.current[id]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    const top = sectionRef.current?.getBoundingClientRect().top ?? 0
    if (top < 0) sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + menu.length) % menu.length
    selectTab(menu[next].id)
    tabRefs.current[menu[next].id]?.focus()
  }

  function toggleAllergen(id: AllergenId) {
    setExcluded((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]))
  }

  return (
    <section ref={sectionRef} id="carta" aria-labelledby="carta-title" className="scroll-mt-0">
      <div className="px-5 pt-10 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Nuestra carta</p>
        <h2 id="carta-title" className="mt-1 font-serif text-3xl font-medium">
          Para picar y compartir
        </h2>
      </div>

      <div className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-md">
        <div
          role="tablist"
          aria-label="Secciones de la carta"
          className="flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {menu.map((category, index) => {
            const isActive = category.id === activeId
            return (
              <button
                key={category.id}
                ref={(el) => {
                  tabRefs.current[category.id] = el
                }}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectTab(category.id)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-card text-foreground hover:bg-muted',
                )}
              >
                {category.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="px-5 pt-4">
        <button
          type="button"
          onClick={() => setFilterOpen((o) => !o)}
          aria-expanded={filterOpen}
          aria-controls="allergen-filter"
          className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-left text-sm"
        >
          <span className="flex items-center gap-2 font-medium">
            <Filter className="size-4 text-muted-foreground" aria-hidden="true" />
            Filtrar por alérgenos
            {excluded.length > 0 && (
              <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">
                {excluded.length}
              </span>
            )}
          </span>
          <ChevronDown
            className={cn('size-4 text-muted-foreground transition-transform', filterOpen && 'rotate-180')}
            aria-hidden="true"
          />
        </button>

        {filterOpen && (
          <div id="allergen-filter" className="mt-2 rounded-xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Toca para ocultar platos que contengan:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {allergenIds.map((id) => {
                const { label, icon: Icon } = allergens[id]
                const isExcluded = excluded.includes(id)
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={isExcluded}
                    onClick={() => toggleAllergen(id)}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                      isExcluded
                        ? 'border-primary bg-primary/10 text-primary line-through decoration-1'
                        : 'border-border bg-background text-foreground hover:bg-muted',
                    )}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                  </button>
                )
              })}
            </div>
            {excluded.length > 0 && (
              <button
                type="button"
                onClick={() => setExcluded([])}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground underline-offset-4 hover:underline"
              >
                <X className="size-3" aria-hidden="true" />
                Quitar filtros
              </button>
            )}
          </div>
        )}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeCategory.id}`}
        aria-labelledby={`tab-${activeCategory.id}`}
        className="px-5 pt-6 pb-4"
      >
        <p className="font-serif text-base italic text-muted-foreground">{activeCategory.intro}</p>
        <div className="mt-2">
          {visibleDishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
        {hiddenCount > 0 && (
          <p className="mt-2 rounded-xl bg-muted px-4 py-3 text-center text-sm text-muted-foreground" aria-live="polite">
            {hiddenCount === 1
              ? '1 plato oculto por tus filtros de alérgenos.'
              : `${hiddenCount} platos ocultos por tus filtros de alérgenos.`}
          </p>
        )}
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Precios con IVA incluido. Si tienes alguna alergia o intolerancia, consulta a nuestro equipo: disponemos de
          información detallada de cada plato.
        </p>
      </div>
    </section>
  )
}
