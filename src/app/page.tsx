import type { ReactNode } from 'react';

import CiboLogo from '@/components/cibo-logo';
import FoodMarquee from '@/components/food-marquee';
import HeroSlideshow from '@/components/hero-slideshow';
import LightboxImage from '@/components/lightbox-image';
import MenuTabs from '@/components/menu-tabs';
import OpenTableWidget from '@/components/opentable-widget';
import ResponsiveImg from '@/components/responsive-img';
import Reveal from '@/components/reveal';
import RoomPanels from '@/components/room-panels';

const PHONE_HREF = 'tel:+14165043939';
const PHONE_LABEL = '416.504.3939';
// Extension 2 reaches the private events team directly.
const EVENTS_PHONE_HREF = 'tel:+14165043939,2';
const EVENTS_EMAIL = 'events.king@cibowinebar.com';
const GIFT_CARD_HREF = 'https://liberty-entertainment-group.vouchercart.com/33476/cibo-wine-bar-gift-card';
const MAPS_HREF = 'https://www.google.com/maps/search/?api=1&query=Cibo+Wine+Bar+522+King+St+W+Toronto';

// Restaurant details for search results: address, phone, hours and reservations.
const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Cibo Wine Bar King West',
    image: '/og.jpg',
    telephone: '+1-416-504-3939',
    servesCuisine: ['Italian', 'Wine Bar'],
    priceRange: '$$',
    acceptsReservations: true,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '522 King St W',
        postalCode: 'M5V 1K4',
        addressLocality: 'Toronto',
        addressRegion: 'ON',
        addressCountry: 'CA'
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Sunday'],
            opens: '11:30',
            closes: '24:00'
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Thursday', 'Friday', 'Saturday'],
            opens: '11:30',
            closes: '02:00'
        }
    ],
    sameAs: ['https://www.instagram.com/cibo_winebar/']
};

// The weekly specials board. Everyday Half-Priced Drinks runs every day we're open; the rest sit on their days.
const OFFERS = {
    pizza: { title: 'Half-Price Pizza', detail: 'Every pizza 50% off', dot: 'bg-[#cf2327]' },
    pasta: { title: '$15 Pasta', detail: 'Settebello, seven signature pastas', dot: 'bg-[#f3e8d8]' },
    late: { title: 'Late Night', detail: 'Open until 2am', dot: 'bg-[#92936c]' },
    mimosa: { title: 'Bottomless Mimosas', detail: '$30 · brunch 11:30am to 4pm', dot: 'bg-[#308d87]' }
};

const WEEK: { day: string; en: string; offers: (keyof typeof OFFERS)[] }[] = [
    { day: 'Martedì', en: 'Tuesday', offers: ['pizza'] },
    { day: 'Mercoledì', en: 'Wednesday', offers: ['pasta'] },
    { day: 'Giovedì', en: 'Thursday', offers: ['late'] },
    { day: 'Venerdì', en: 'Friday', offers: ['late'] },
    { day: 'Sabato', en: 'Saturday', offers: ['mimosa', 'late'] },
    { day: 'Domenica', en: 'Sunday', offers: ['mimosa'] }
];

// Shown at their natural proportions, uncropped.
const PLATES = [
    { src: '/images/pappardelle-ragu.jpg', caption: 'Pappardelle', alt: 'Fresh pappardelle in ragu with basil' },
    {
        src: '/images/pizza-yolk.jpg',
        caption: 'Pizza',
        alt: 'Blistered pizza with yellow cherry tomatoes, greens and shaved parmigiano'
    },
    {
        src: '/images/grilled-calamari.jpg',
        caption: 'Grilled Whole Calamari',
        alt: 'Grilled whole calamari over greens with diced tomato and lemon'
    },
    {
        src: '/images/salmon.jpg',
        caption: 'Salmone Fresco Atlantico',
        alt: 'Grilled Atlantic salmon with cherry tomatoes and greens'
    },
    {
        src: '/images/pasta-gnocchi.jpg',
        caption: 'Gnocchi',
        alt: 'House-made gnocchi with basil beside fresh pasta and tomatoes'
    },
    {
        src: '/images/tagliatelle-mushroom.jpg',
        caption: 'Tagliatelle ai Funghi',
        alt: 'Tagliatelle with wild mushrooms and shaved parmigiano'
    },
    {
        src: '/images/short-rib-eggs.jpg',
        caption: 'Short Rib & Eggs',
        alt: 'Braised short rib with crispy onions, mushrooms and two fried eggs'
    },
    {
        src: '/images/pappardelle-spread.jpg',
        caption: 'To Share',
        alt: 'Pappardelle with burrata and prosciutto on a table to share'
    }
];

// Small spaced capitals led by a hairline arrow, as above every section on the new site
const Eyebrow = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <div className={`flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase ${className}`}>
        <svg width='34' height='8' viewBox='0 0 34 8' fill='none' aria-hidden='true' className='shrink-0 opacity-50'>
            <path d='M0 4h32M29 1l3 3-3 3' stroke='currentColor' strokeWidth='1' />
        </svg>
        {children}
    </div>
);

// The new site's ornament: a hairline between two small rings
const Ornament = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center ${className}`} aria-hidden='true'>
        <span className='h-[7px] w-[7px] shrink-0 rounded-full border border-current' />
        <span className='h-px min-w-6 flex-1 bg-current' />
        <span className='h-[7px] w-[7px] shrink-0 rounded-full border border-current' />
    </div>
);

const Title = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <h2 className={`font-display text-5xl leading-[0.95] md:text-7xl ${className}`}>{children}</h2>
);

const CallButton = ({
    label = 'Call to Reserve',
    variant = 'red',
    className = ''
}: {
    label?: string;
    variant?: 'red' | 'light';
    className?: string;
}) => (
    <a href={PHONE_HREF} className={`${variant === 'light' ? 'btn-cibo-light' : 'btn-cibo'} px-8 py-4 ${className}`}>
        {label}
    </a>
);

const Page = () => {
    return (
        <main>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

            {/* ── Navigation, after the new site: Book a Table left, the red wordmark centred with KING WEST
                 beneath it, Call to Reserve right, joined by ring-and-hairline ornaments. Phones keep the
                 wordmark left and the call right. ── */}
            <nav className='fixed top-0 z-50 w-full border-b border-[#3e1c1c]/10 bg-[#f6efef]/95 backdrop-blur'>
                <div className='grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 px-5 md:h-[72px] md:grid-cols-[1fr_auto_1fr] md:gap-6 md:px-8'>
                    <div className='hidden items-center gap-5 md:flex'>
                        <a
                            href='#reserve'
                            className='shrink-0 text-xs font-semibold tracking-[0.2em] text-[#3e1c1c] uppercase transition-colors hover:text-[#cf2327]'>
                            Book a Table
                        </a>
                        <Ornament className='flex-1 text-[#3e1c1c]/25' />
                    </div>
                    <a
                        href='#top'
                        className='flex flex-col items-center justify-self-start md:justify-self-center'
                        aria-label='Cibo Wine Bar King West, back to top'>
                        <CiboLogo className='h-8 w-auto text-[#cf2327] md:h-9' />
                        <span className='mt-1 pl-[0.45em] text-[0.55rem] font-medium tracking-[0.45em] text-[#3e1c1c]/70 uppercase'>
                            King West
                        </span>
                    </a>
                    <div className='flex items-center justify-end gap-5'>
                        <Ornament className='hidden flex-1 text-[#3e1c1c]/25 md:flex' />
                        <a href={PHONE_HREF} className='btn-cibo shrink-0 px-5 py-3 md:px-6'>
                            Call to Reserve
                        </a>
                    </div>
                </div>
            </nav>

            {/* ── Hero: the red wordmark and the pitch on the blush background beside rounded photos, with the
                 booking strip underneath. Phones get the photos full-bleed behind the copy. ── */}
            <section id='top' className='glow-top mt-16 flex flex-col md:mt-[72px] md:min-h-[calc(100svh-72px)]'>
                <div className='relative grid flex-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-4 md:p-4 md:pl-0'>
                    {/* Phones: the photos fill the hero behind the copy. Larger screens: their own rounded column. */}
                    <HeroSlideshow className='absolute inset-0 md:relative md:inset-auto md:order-2 md:rounded-[17px]' />
                    <div
                        className='absolute inset-0 bg-gradient-to-t from-[#2a1212]/90 via-[#2a1212]/60 to-[#2a1212]/10 md:hidden'
                        aria-hidden='true'
                    />

                    {/* Wordmark at the top, the pitch and call anchored to the bottom */}
                    <div className='relative flex min-h-[calc(100svh-64px-140px)] flex-col justify-end gap-12 px-6 pt-10 pb-10 md:order-1 md:min-h-0 md:justify-between md:px-12 md:py-10 lg:px-20'>
                        {/* The wordmark is already in the nav on phones, so it only shows here on larger screens */}
                        <h1 className='hero-logo sr-only md:not-sr-only'>
                            <CiboLogo
                                title='Cibo Wine Bar King West: Italian restaurant and wine bar in Toronto'
                                className='w-36 text-[#cf2327] md:w-48'
                            />
                            <span className='mt-3 block text-xs font-medium tracking-[0.6em] text-[#3e1c1c]/70 uppercase'>
                                Wine Bar
                            </span>
                        </h1>

                        <div className='hero-logo max-w-md text-[#f6efef] md:text-[#3e1c1c]'>
                            <Eyebrow>King West · Toronto</Eyebrow>
                            <p className='font-display mt-5 text-5xl leading-[0.92] md:text-6xl'>
                                Rustic Italian
                                <br />
                                on King West
                            </p>
                            <Ornament className='mt-7 w-40 opacity-30' />
                            <p className='mt-6 text-lg leading-relaxed opacity-90'>
                                <span className='font-semibold text-[#f3c2b4] md:text-[#cf2327]'>
                                    Everyday Half-Priced Drinks
                                </span>
                                , from 2 to 6:30pm.
                            </p>
                            <div className='mt-8 flex flex-wrap items-center gap-x-6 gap-y-3'>
                                <CallButton />
                                <span className='text-xs font-semibold tracking-[0.2em] uppercase opacity-60'>
                                    522 King St West
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking strip: OpenTable's wide widget on larger screens, its compact one on phones */}
                <div className='flex flex-col gap-5 border-t border-[#3e1c1c]/10 bg-[#ece8e8] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12 md:py-5 lg:px-20'>
                    <div className='font-display text-2xl text-[#3e1c1c]'>Book a Table</div>
                    <OpenTableWidget className='flex w-full md:w-auto md:justify-end' />
                </div>
            </section>

            {/* ── La Settimana: a specials card over a full-bleed photo under a warm brown wash. Everyday Half-Priced Drinks
                 as a single line across the top, then each day with its offers on dotted leaders ── */}
            <section id='week' className='relative overflow-hidden px-6 py-20 md:px-12 md:py-28'>
                <ResponsiveImg
                    src='/images/pappardelle-spread.jpg'
                    sizes='100vw'
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover object-[50%_45%]'
                />
                <div className='absolute inset-0 bg-[#2a1212]/80' />
                <div className='absolute inset-0 bg-gradient-to-b from-[#2a1212]/50 via-transparent to-[#2a1212]/60' />
                <div className='relative mx-auto max-w-4xl text-[#f6efef]'>
                    <Reveal className='flex flex-col items-center text-center'>
                        <Eyebrow className='text-[#f3e8d8]/80'>Every week at Cibo</Eyebrow>
                        <Title className='mt-5'>La Settimana</Title>
                        <p className='mt-4 text-[#f6efef]/65'>Tuesday to Sunday · Closed Mondays</p>
                    </Reveal>

                    <Reveal className='mt-12'>
                        <div className='flex flex-col items-center gap-1 border-y border-[#f3e8d8]/30 py-6 text-center md:flex-row md:justify-between md:gap-6 md:text-left'>
                            <span className='font-display text-3xl text-[#f3e8d8]'>Everyday Half-Priced Drinks</span>
                            <span className='text-[#f6efef]/85'>Every day, 2 to 6:30pm</span>
                        </div>

                        <dl className='mt-4'>
                            {WEEK.map((row) => (
                                <div
                                    key={row.day}
                                    className='grid gap-2 border-b border-[#f6efef]/10 py-5 md:grid-cols-[180px_1fr] md:gap-8'>
                                    <dt className='flex items-baseline gap-3 md:flex-col md:gap-0.5'>
                                        <span className='font-display text-2xl'>{row.day}</span>
                                        <span className='text-xs tracking-[0.2em] text-[#f6efef]/45 uppercase'>
                                            {row.en}
                                        </span>
                                    </dt>
                                    <dd className='space-y-2.5 md:pt-1'>
                                        {row.offers.map((key) => {
                                            const offer = OFFERS[key];

                                            return (
                                                <div key={key} className='flex flex-wrap items-baseline gap-x-3'>
                                                    <span
                                                        className={`h-2 w-2 shrink-0 translate-y-[-1px] rounded-full ${offer.dot}`}
                                                        aria-hidden='true'
                                                    />
                                                    <span className='text-sm font-semibold tracking-[0.12em] uppercase'>
                                                        {offer.title}
                                                    </span>
                                                    <span className='mb-1 hidden flex-1 border-b border-dotted border-[#f6efef]/25 sm:block' />
                                                    <span className='w-full pl-5 text-[0.9375rem] text-[#f6efef]/65 sm:w-auto sm:pl-0 sm:text-right'>
                                                        {offer.detail}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <p className='mt-8 text-center text-sm text-[#f6efef]/55'>
                            At lunch: <span className='text-[#f6efef]/85'>Lunch in Fretta</span>, two courses for $25.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ── From the kitchen: a wall of rounded plates at their natural proportions ── */}
            <section id='food' className='px-4 py-20 md:px-8 md:py-32'>
                <Reveal className='mx-auto max-w-6xl px-2 md:px-4'>
                    <Eyebrow>Our Kitchen</Eyebrow>
                    <div className='mt-5 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end'>
                        <Title className='text-[#cf2327]'>Made to Be Shared</Title>
                        <p className='leading-relaxed text-[#3e1c1c]/75 md:text-lg'>
                            Pasta fresca made in house, pizza from the oven and plates made to pass around the table.
                        </p>
                    </div>
                </Reveal>
                <div className='mx-auto mt-12 max-w-7xl columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4'>
                    {PLATES.map((plate, i) => (
                        <Reveal key={plate.src} delay={(i % 4) * 80} className='mb-3 break-inside-avoid md:mb-5'>
                            <figure>
                                <div className='overflow-hidden rounded-[17px]'>
                                    <LightboxImage
                                        src={plate.src}
                                        alt={plate.alt}
                                        sizes='(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw'
                                        className='h-auto w-full transition-transform duration-700 hover:scale-[1.03]'
                                    />
                                </div>
                                <figcaption className='mt-2.5 text-xs font-semibold tracking-[0.15em] text-[#3e1c1c]/70 uppercase'>
                                    {plate.caption}
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── Il Menu: the full menu on the second background tone, then a strip of dishes ── */}
            <section id='menu' className='bg-[#ece8e8] px-6 pt-20 pb-14 md:px-12 md:pt-28 md:pb-16'>
                <div className='mx-auto max-w-6xl'>
                    <Reveal className='flex flex-col gap-6 border-b border-[#3e1c1c]/25 pb-8 md:flex-row md:items-end md:justify-between'>
                        <div>
                            <Eyebrow>Our Menu</Eyebrow>
                            <h2 className='font-display mt-5 text-7xl leading-none text-[#cf2327] md:text-[120px]'>
                                Il Menu
                            </h2>
                        </div>
                        <div className='md:pb-4 md:text-right'>
                            <p className='text-xs font-semibold tracking-[0.2em] uppercase'>
                                Executive Chef Francesco Di Salvo
                            </p>
                            <p className='mt-2 max-w-xs text-sm text-[#3e1c1c]/65 md:ml-auto'>
                                GF marks dishes made with gluten-free ingredients. Gluten-free pasta available.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal className='mt-12'>
                        <MenuTabs />
                    </Reveal>
                    <Reveal className='mt-16 border-t border-[#3e1c1c]/15 pt-10'>
                        <CallButton />
                    </Reveal>
                </div>
            </section>

            {/* ── A slow strip of dishes running under the menu ── */}
            <section aria-label='From the kitchen' className='bg-[#ece8e8] pb-4'>
                <FoodMarquee />
            </section>

            {/* ── Vino: rounded photos left, the wine bar right ── */}
            <section id='wine' className='px-6 py-20 md:px-12 md:py-32'>
                <div className='mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20'>
                    <div className='grid grid-cols-2 gap-3 md:order-1 md:gap-4'>
                        <Reveal>
                            <div className='aspect-[3/4] overflow-hidden rounded-[17px]'>
                                <LightboxImage
                                    src='/images/patio-cocktails.jpg'
                                    sizes='(max-width: 767px) 45vw, 300px'
                                    alt='Three cocktails on a wooden patio table in the sun'
                                    className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]'
                                />
                            </div>
                        </Reveal>
                        <Reveal delay={120} className='mt-12'>
                            <div className='aspect-[3/4] overflow-hidden rounded-[17px]'>
                                <LightboxImage
                                    src='/images/gin-tonic.jpg'
                                    sizes='(max-width: 767px) 45vw, 300px'
                                    alt='Gin and tonic with lemon and rosemary on a butcher block table'
                                    className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]'
                                />
                            </div>
                        </Reveal>
                    </div>
                    <Reveal className='md:order-2'>
                        <Eyebrow>The Wine Bar</Eyebrow>
                        <h2 className='font-display mt-4 text-[110px] leading-none text-[#3e1c1c] md:text-[160px]'>
                            Vino
                        </h2>
                        <p className='mt-6 max-w-lg leading-relaxed text-[#3e1c1c]/75 md:text-lg'>
                            Over twenty wines by the glass, from Prosecco and Lambrusco to a Super Tuscan and Amarone,
                            and a bottle list that runs from the Alps to Sicily. Cocktails and Italian amari at the bar
                            and on the patio.
                        </p>
                        <Ornament className='mt-9 w-full max-w-sm text-[#3e1c1c]/25' />
                        <div className='mt-6'>
                            <div className='font-display text-6xl text-[#cf2327]'>20+</div>
                            <div className='mt-1 text-xs font-semibold tracking-[0.2em] text-[#3e1c1c]/65 uppercase'>
                                Wines by the glass
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── After dark: left-aligned over the toast, under a warm brown wash ── */}
            <section className='relative overflow-hidden'>
                <ResponsiveImg
                    src='/images/table-toast.jpg'
                    sizes='100vw'
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover object-[50%_30%]'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-[#2a1212]/95 via-[#2a1212]/75 to-[#2a1212]/20' />
                <div className='relative mx-auto flex min-h-[640px] max-w-6xl items-center px-6 py-24 text-[#f6efef] md:px-12 lg:min-h-[80vh]'>
                    <Reveal className='max-w-xl'>
                        <Eyebrow className='text-[#f3e8d8]/85'>Thursday to Saturday</Eyebrow>
                        <h2 className='font-display mt-6 text-6xl leading-[0.9] md:text-[110px]'>
                            Cibo
                            <br />
                            After Dark
                        </h2>
                        <Ornament className='mt-8 w-48 opacity-40' />
                        <ul className='mt-8 space-y-3'>
                            {['Open until 2am', 'Cocktails & Italian amari', 'Bottle service'].map((item) => (
                                <li key={item} className='text-sm font-semibold tracking-[0.2em] uppercase opacity-90'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <CallButton label='Book Your Night' className='mt-12' />
                    </Reveal>
                </div>
            </section>

            {/* ── Private dining: the rooms as rounded photo panels; hover or tap one to open it ── */}
            <section id='events' className='px-6 py-20 md:px-12 md:py-32'>
                <div className='mx-auto max-w-7xl'>
                    <Reveal className='grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end'>
                        <div>
                            <Eyebrow>Private Dining & Events</Eyebrow>
                            <Title className='mt-5 text-[#cf2327]'>
                                Rooms for 12
                                <br />
                                to 110
                            </Title>
                        </div>
                        <div>
                            <p className='leading-relaxed text-[#3e1c1c]/75 md:text-lg'>
                                Four private rooms with natural daylight and full audio and video, from a rustic wine
                                cellar to sleek frosted glass, plus a lounge for standing receptions. Group menus start
                                at $45 per person.
                            </p>
                            <div className='mt-7 flex flex-wrap items-center gap-3'>
                                <a href={EVENTS_PHONE_HREF} className='btn-cibo px-7 py-4'>
                                    Call to Plan Your Event
                                </a>
                                <a href={`mailto:${EVENTS_EMAIL}`} className='btn-cibo-outline px-7 py-[14px]'>
                                    Email the Events Team
                                </a>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal className='mt-12'>
                        <RoomPanels />
                    </Reveal>
                </div>
            </section>

            {/* ── Reserve: full-width photo of the table under a warm brown wash, copy and booking on top ── */}
            <section id='reserve' className='relative overflow-hidden px-6 py-24 md:px-12 md:py-36'>
                <ResponsiveImg
                    src='/images/pizza-yolk.jpg'
                    sizes='100vw'
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover'
                />
                <div className='absolute inset-0 bg-[#2a1212]/75' />
                <div className='absolute inset-0 bg-gradient-to-t from-[#2a1212]/80 via-transparent to-[#2a1212]/50' />
                <div className='relative mx-auto max-w-6xl text-[#f6efef]'>
                    <Reveal className='grid gap-8 md:grid-cols-[1fr_auto] md:items-end'>
                        <div>
                            <Eyebrow className='text-[#f3e8d8]/85'>Reservations</Eyebrow>
                            <h2 className='font-display mt-5 text-6xl leading-[0.92] md:text-8xl'>Reserve a Table</h2>
                            <p className='mt-6 max-w-xl leading-relaxed text-[#f6efef]/85 md:text-lg'>
                                522 King St West at Brant. Open from 11:30am, until 2am Thursday to Saturday.
                            </p>
                        </div>
                        <CallButton label={`Call ${PHONE_LABEL}`} className='justify-self-start' />
                    </Reveal>
                    <Reveal delay={150} className='mt-12 border-t border-[#f6efef]/25 pt-10'>
                        <OpenTableWidget className='flex w-full justify-start' />
                    </Reveal>
                </div>
            </section>

            {/* ── Footer, after the new site: a red rounded sign-off card, the essentials in three columns
                 split by ring-and-hairline rules, the wordmark set huge along the bottom, then the
                 sub-footer bar ── */}
            <footer className='glow-bottom relative overflow-hidden text-[#3e1c1c]'>
                <div className='mx-auto max-w-6xl px-6 pt-20 md:px-12 md:pt-28'>
                    <Reveal className='flex flex-col gap-10 rounded-[24px] bg-[#cf2327] px-8 py-12 text-[#f6efef] md:flex-row md:items-end md:justify-between md:px-14 md:py-16'>
                        <div>
                            <Eyebrow className='text-[#f3e8d8]/85'>See you soon</Eyebrow>
                            <h2 className='font-display mt-5 text-[2.6rem] leading-[0.92] sm:text-5xl md:text-7xl'>
                                Ci vediamo
                                <br />a King West
                            </h2>
                        </div>
                        <div className='flex flex-col items-start gap-4 md:items-end'>
                            <CallButton variant='light' />
                            <a
                                href={PHONE_HREF}
                                className='text-xl font-semibold tracking-wide transition-opacity hover:opacity-75'>
                                {PHONE_LABEL}
                            </a>
                        </div>
                    </Reveal>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-12 py-16 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-x-10 md:text-left'>
                        <div>
                            <h3 className='font-display text-2xl'>Visit</h3>
                            <p className='mt-4 text-sm leading-relaxed'>
                                522 King St West
                                <br />
                                Toronto, ON M5V 1K4
                            </p>
                            <p className='mt-3 text-sm leading-relaxed text-[#3e1c1c]/60'>
                                At Brant St, by the King and Spadina streetcars. Valet on weekends and five public lots
                                within three blocks.
                            </p>
                            <a
                                href={MAPS_HREF}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-4 inline-block text-xs font-semibold tracking-[0.2em] text-[#cf2327] uppercase underline-offset-4 hover:underline'>
                                Get Directions
                            </a>
                        </div>

                        {/* Vertical ring-and-hairline rules between the columns on larger screens */}
                        <div
                            className='hidden flex-col items-center text-[#3e1c1c]/25 md:order-2 md:flex'
                            aria-hidden='true'>
                            <span className='h-[7px] w-[7px] rounded-full border border-current' />
                            <span className='w-px flex-1 bg-current' />
                            <span className='h-[13px] w-[13px] rounded-full border border-current' />
                            <span className='h-[7px] w-[7px] rounded-full border border-current' />
                        </div>

                        <div className='md:order-5'>
                            <h3 className='font-display text-2xl'>Follow & Gift</h3>
                            <div className='mt-4 space-y-2.5 text-xs font-semibold tracking-[0.2em] uppercase'>
                                <a
                                    href='https://www.instagram.com/cibo_winebar/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='block transition-colors hover:text-[#cf2327]'>
                                    Instagram
                                </a>
                                <a
                                    href={GIFT_CARD_HREF}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='block transition-colors hover:text-[#cf2327]'>
                                    Gift Cards
                                </a>
                            </div>
                            <a
                                href={`mailto:${EVENTS_EMAIL}`}
                                className='mt-4 block text-sm text-[#3e1c1c]/60 transition-colors hover:text-[#cf2327]'>
                                events.king@
                                <wbr />
                                cibowinebar.com
                            </a>
                        </div>

                        <div
                            className='hidden flex-col items-center text-[#3e1c1c]/25 md:order-4 md:flex'
                            aria-hidden='true'>
                            <span className='h-[7px] w-[7px] rounded-full border border-current' />
                            <span className='h-[13px] w-[13px] rounded-full border border-current' />
                            <span className='w-px flex-1 bg-current' />
                            <span className='h-[7px] w-[7px] rounded-full border border-current' />
                        </div>

                        <div className='col-span-2 md:order-3 md:col-span-1'>
                            <h3 className='font-display text-2xl'>Hours</h3>
                            <dl className='mx-auto mt-4 max-w-xs space-y-2 text-sm md:mx-0'>
                                {[
                                    { day: 'Tue, Wed & Sun', time: '11:30am to 12am' },
                                    { day: 'Thu to Sat', time: '11:30am to 2am' },
                                    { day: 'Monday', time: 'Closed' },
                                    { day: 'Half-priced drinks', time: 'Daily, 2 to 6:30pm' },
                                    { day: 'Brunch', time: 'Sat & Sun, 11:30 to 4pm' }
                                ].map((row) => (
                                    <div key={row.day} className='flex items-baseline justify-between gap-4'>
                                        <dt className='text-[#3e1c1c]/60'>{row.day}</dt>
                                        <dd className='text-right'>{row.time}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                {/* The wordmark, set huge and cropped so only its lower half rises from the bottom edge */}
                <div
                    className='pointer-events-none relative h-[42vw] overflow-hidden select-none md:h-[26vw]'
                    aria-hidden='true'>
                    <CiboLogo
                        title=''
                        className='absolute -bottom-[10%] left-1/2 w-[110%] -translate-x-1/2 text-[#cf2327]/[0.08] md:w-[78%]'
                    />
                </div>

                <div className='relative bg-[#ece8e8]'>
                    <div className='mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-5 text-center text-[0.7rem] font-medium tracking-[0.15em] text-[#3e1c1c]/70 uppercase md:flex-row md:justify-between md:px-12 md:text-left'>
                        <span>© {new Date().getFullYear()} Cibo Wine Bar King West</span>
                        <span>Ospitalità Italiana · Seal of Authenticity</span>
                        <span>A Liberty Entertainment Group restaurant</span>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Page;
