import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/menu-data'
import { cn } from '@/lib/utils'

export function WhatsAppButton({
  className,
  label = 'Reservar por WhatsApp',
  id,
  tabIndex,
}: {
  className?: string
  label?: string
  id?: string
  tabIndex?: number
}) {
  return (
    <a
      id={id}
      tabIndex={tabIndex}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-lg shadow-whatsapp/25 transition-transform hover:brightness-105 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp',
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </a>
  )
}
