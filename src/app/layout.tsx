import { type Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { Caprasimo } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { FreeTrialBanner } from '@/components/FreeTrial'

import '@/styles/tailwind.css'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const caprasimo = Caprasimo({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Laura Dasi',
    default: 'Laura Dasi',
  },
  description:
    'Aerial artist and coach 🧚‍♀️, Lifelong dancer 💃🏻, Yoga teacher 🧘‍♀️',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} h-full bg-zinc-950 antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>
              <div className="flex min-h-screen flex-col">{children}</div>
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
