'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

type ScrollCardProps = {
  id?: string
  className?: string
  children: ReactNode
}

export default function ScrollCard({ id, className, children }: ScrollCardProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting)
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  const classes = ['scroll-card', 'relative', 'overflow-hidden', className].filter(Boolean).join(' ')

  return (
    <section id={id} ref={ref} data-active={active} className={classes}>
      {children}
    </section>
  )
}
