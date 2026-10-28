import { Bean, Egg, Fish, Milk, Nut, Shell, Shrimp, Wheat, Wine, type LucideIcon } from 'lucide-react'
import type { AllergenId } from '@/lib/menu-data'
import { cn } from '@/lib/utils'

export const allergens: Record<AllergenId, { label: string; icon: LucideIcon }> = {
  gluten: { label: 'Gluten', icon: Wheat },
  lacteos: { label: 'Lácteos', icon: Milk },
  huevo: { label: 'Huevo', icon: Egg },
  pescado: { label: 'Pescado', icon: Fish },
  marisco: { label: 'Crustáceos', icon: Shrimp },
  moluscos: { label: 'Moluscos', icon: Shell },
  'frutos-secos': { label: 'Frutos secos', icon: Nut },
  soja: { label: 'Soja', icon: Bean },
  sulfitos: { label: 'Sulfitos', icon: Wine },
}

export const allergenIds = Object.keys(allergens) as AllergenId[]

export function AllergenIcon({ id, className }: { id: AllergenId; className?: string }) {
  const { label, icon: Icon } = allergens[id]
  return (
    <span
      title={label}
      className={cn(
        'inline-flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground',
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  )
}
