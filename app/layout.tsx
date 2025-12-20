import type { Metadata } from 'next'
import Image from 'next/image'
import { Fraunces, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ThemeToggle from './components/ThemeToggle'

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const siteUrl = new URL('https://rustx-labs.github.io')

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'RustX Labs',
  description: 'RustX 实验室：打造实用工具、资源与社区协作的 Rust 创新空间。',
  applicationName: 'RustX Labs',
  keywords: ['Rust', 'RustX', '开源社区', '工程工具', '中文教程', '翻译'],
  authors: [{ name: 'RustX Labs', url: siteUrl }],
  creator: 'RustX Labs',
  publisher: 'RustX Labs',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    siteName: 'RustX Labs',
    title: 'RustX Labs',
    description: 'RustX 实验室：打造实用工具、资源与社区协作的 Rust 创新空间。',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'RustX Labs Open Graph',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RustX Labs',
    description: 'RustX 实验室：打造实用工具、资源与社区协作的 Rust 创新空间。',
    images: ['/og.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/logo.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const navItems = [
  { label: '首页', href: '#top' },
  { label: '方向', href: '#focus' },
  { label: '计划', href: '#programs' },
  { label: '社区', href: '#community' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="RustX Labs Logo" width={36} height={36} />
                <div className="hidden sm:block">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    RustX Labs
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    RustX 实验室
                  </p>
                </div>
              </div>
              <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-slate-900 dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <a
                  className="hidden rounded-full border border-slate-300/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-100 sm:inline-flex"
                  href="https://github.com/rustx-labs"
                >
                  GitHub
                </a>
                <ThemeToggle />
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
