'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { WhatsAppButton } from './whatsapp-button'

export function FloatingReserve() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const targets = ['hero-cta', 'footer-cta']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const onScreen = new Set<Element>()

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target)
        else onScreen.delete(entry.target)
      }
      const heroAbove = (document.getElementById('hero-cta')?.getBoundingClientRect().bottom ?? 0) < 0
      setVisible(onScreen.size === 0 && heroAbove)
    })

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md bg-gradient-to-t from-background via-background/80 to-transparent px-5 pt-6 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
      )}
    >
      <WhatsAppButton
        className={cn('w-full', visible && 'pointer-events-auto')}
        label="Reservar mesa"
        tabIndex={visible ? 0 : -1}
      />
    </div>
  )
}
