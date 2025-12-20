'use client'

import { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'rustx-theme'

type Theme = 'light' | 'dark'

const applyTheme = (theme: Theme) => {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = theme
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

const resolveTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const next = resolveTheme()
    setTheme(next)
    applyTheme(next)
  }, [])

  const handleToggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    window.localStorage.setItem(THEME_STORAGE_KEY, next)
  }

  return (
    <button
      type="button"
      aria-label="切换深浅色"
      aria-pressed={theme === 'dark'}
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold tracking-[0.12em] text-slate-700 shadow-sm transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
    >
      <SunIcon className="h-4 w-4" />
      <span className="hidden sm:inline">主题</span>
    </button>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  )
}
