import { FloatingReserve } from '@/components/floating-reserve'
import { MenuTabs } from '@/components/menu/menu-tabs'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <div className="min-h-dvh bg-muted/60">
      <div className="mx-auto min-h-dvh max-w-md bg-background shadow-xl shadow-foreground/5">
        <SiteHeader />
        <main>
          <MenuTabs />
        </main>
        <SiteFooter />
      </div>
      <FloatingReserve />
    </div>
  )
}
