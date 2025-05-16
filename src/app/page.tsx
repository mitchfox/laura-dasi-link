'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  // LinkedInIcon,
  // YouTubeIcon,
  // FacebookIcon,
} from '@/components/SocialIcons'
import { Satisfy } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import WithMeLogo from '@/images/photos/withmelogo.png'
import Laura_img from '../images/photos/laura_img.jpg'
// import MealPlan from '../images/photos/meal_plan.webp'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 transform p-1 transition-transform hover:scale-110"
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-white transition group-hover:fill-white/80" />
    </Link>
  )
}

function LinkBox({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  href: string
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
    >
      <div className="flex flex-1 items-center gap-4">
        {image ? (
          <div className="aspect-square h-12 w-12 min-w-[3rem] overflow-hidden rounded-xl">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ) : (
          Icon && (
            <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl bg-white/5 p-2">
              <Icon className="h-6 w-6" />
            </div>
          )
        )}
        <div className="text-left">
          <h2 className="pr-6 text-xs font-bold text-white">{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-white/80">{description}</p>
          )}
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  )
}

export default function Home() {
  const socialLinks = [
    {
      href: 'https://www.instagram.com/lauradasiaerial/',
      icon: InstagramIcon,
    },
    // {
    //   href: 'https://linkedin.com/company/dca-health-coaching',
    //   icon: LinkedInIcon,
    // },
    // {
    //   href: 'https://youtube.com/@DCAHealthCoaching',
    //   icon: YouTubeIcon,
    // },
    // {
    //   href: 'https://facebook.com/dcanutrition',
    //   icon: FacebookIcon,
    // },
  ]

  const linksData = [
    {
      title: 'Access my course on WithMe',
      description: 'Learn how to master your aerial skills with me',
      href: 'https://withme.so/LauraDasiAerial',
      image: WithMeLogo,
      icon: null,
    },
    // {
    //   title: 'Connect with me on Instagram',
    //   description: 'Follow my journey and get inspired',
    //   href: 'https://withme.so/LauraDasiAerial',
    //   image: null,
    //   icon: InstagramIcon,
    // }
  ]

  return (
    <>
      <Container className="flex-1 bg-zinc-950 pb-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30dvh] bg-gradient-to-b from-transparent via-transparent to-zinc-950 sm:hidden"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.95) 75%, #000000 100%)',
                }}
              />
              <div className="mx-auto h-[70dvh] sm:mt-12 sm:h-48 sm:w-40 md:h-72 md:w-64">
                <img
                  src={Laura_img.src}
                  alt="Founders"
                  className="h-full w-full object-cover object-top sm:rounded-3xl"
                />
              </div>
            </div>

            <div className="relative z-30">
              <h1
                className={`${satisfy.className} -mt-12 mb-4 text-5xl leading-none text-white sm:mt-6 sm:text-6xl`}
              >
                Laura Dasi
              </h1>
              <p className="mb-8 px-6 text-sm text-white/80">
                Aerial artist and coach 🧚‍♀️, Lifelong dancer 💃🏻, Yoga teacher 🧘‍♀️
              </p>

              <div className="mb-12 flex justify-center gap-6">
                {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
                {socialLinks.map(({ href, icon: Icon }) => (
                  <SocialLink key={href} href={href} icon={Icon} />
                ))}
              </div>

              <div className="space-y-4 px-4">
                {linksData.map(({ title, description, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    {...(icon ? { icon } : {})}
                    {...(image ? { image: image.src } : {})}
                  />
                ))}
              </div>
              <FreeTrialBanner />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
