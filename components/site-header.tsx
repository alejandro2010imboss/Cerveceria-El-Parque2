import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import { restaurant } from '@/lib/menu-data'
import { WhatsAppButton } from './whatsapp-button'

export function SiteHeader() {
  return (
    <header>
      <div className="relative h-72 overflow-hidden">
        <Image
          src="/images/hero-tapas.png"
          alt="Mesa con patatas bravas, jamón ibérico, gambas al ajillo y vino tinto"
          fill
          priority
          sizes="(max-width: 448px) 100vw, 448px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-background" />
        <p className="absolute top-5 left-5 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
          Desde 1998
        </p>
      </div>

      <div className="relative -mt-16 px-5">
        <h1 className="font-serif text-5xl font-medium leading-none tracking-tight text-balance">{restaurant.name}</h1>
        <p className="mt-2 text-base text-muted-foreground">{restaurant.tagline}</p>

        <WhatsAppButton id="hero-cta" className="mt-6 w-full" />

        <div className="mt-6 grid gap-3">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm">
              <span className="block font-medium">{restaurant.address}</span>
              <span className="text-muted-foreground">{restaurant.city}</span>
            </span>
          </a>

          <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
            <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <dl className="grid w-full grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
              {restaurant.schedule.map((row) => (
                <div key={row.days} className="contents">
                  <dt className="font-medium">{row.days}</dt>
                  <dd className={row.hours === 'Cerrado' ? 'text-muted-foreground' : 'text-right tabular-nums'}>
                    <span className={row.hours === 'Cerrado' ? 'block text-right' : undefined}>{row.hours}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </header>
  )
}
