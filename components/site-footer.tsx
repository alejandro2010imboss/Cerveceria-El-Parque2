import { MapPin, Navigation, Phone } from 'lucide-react'
import { restaurant } from '@/lib/menu-data'
import { WhatsAppButton } from './whatsapp-button'

export function SiteFooter() {
  const query = encodeURIComponent(restaurant.mapQuery)

  return (
    <footer aria-labelledby="ubicacion-title" className="mt-6 bg-foreground pb-10 text-background">
      <div className="px-5 pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/60">Dónde estamos</p>
        <h2 id="ubicacion-title" className="mt-1 font-serif text-3xl font-medium">
          Ven a vernos
        </h2>
        <p className="mt-3 flex items-start gap-2 text-sm text-background/80">
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {restaurant.address}, {restaurant.city}
        </p>
      </div>

      <div className="mt-6 px-5">
        <div className="overflow-hidden rounded-2xl border border-background/10">
          <iframe
            title={`Mapa de ubicación de ${restaurant.name}`}
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="block h-64 w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-4 py-3 text-sm font-medium transition-colors hover:bg-background/10"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Cómo llegar
          </a>
          <a
            href={`tel:+${restaurant.whatsappNumber}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-4 py-3 text-sm font-medium transition-colors hover:bg-background/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            Llamar
          </a>
        </div>

        <WhatsAppButton id="footer-cta" className="mt-3 w-full" />
      </div>

      <div className="mt-10 border-t border-background/10 px-5 pt-6 text-xs text-background/60">
        <p>
          © {new Date().getFullYear()} {restaurant.name} · {restaurant.phoneDisplay}
        </p>
      </div>
    </footer>
  )
}
