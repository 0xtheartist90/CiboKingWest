import type { ReactNode } from 'react';

import CiboLogo from '@/components/cibo-logo';
import HeroSlideshow from '@/components/hero-slideshow';
import LightboxImage from '@/components/lightbox-image';
import MenuTabs from '@/components/menu-tabs';
import OpenTableWidget from '@/components/opentable-widget';
import ResponsiveImg from '@/components/responsive-img';
import Reveal from '@/components/reveal';
import RoomPicker from '@/components/room-picker';

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

// The weekly specials board. Happy hour runs every day we're open; the rest sit on their days.
const OFFERS = {
    pizza: {
        title: 'Half-Price Pizza',
        detail: 'Every pizza on the menu at 50% off',
        tone: 'bg-[#a8302a] text-[#f4efe4]'
    },
    pasta: {
        title: '$15 Pasta',
        detail: 'Settebello: seven signature pastas, $15 each',
        tone: 'bg-[#f4efe4] text-[#141010]'
    },
    late: {
        title: 'Late Night',
        detail: 'Open until 2am, cocktails and bottle service',
        tone: 'bg-[#0e0b09] text-[#f1e8d6] ring-1 ring-inset ring-[#f1e8d6]/25'
    },
    mimosa: {
        title: 'Bottomless Mimosas · $30',
        detail: 'Brunch from 11:30am to 4pm',
        tone: 'bg-[#2f5d3f] text-[#f4efe4]'
    }
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

const Label = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <div className={`font-stencil text-sm tracking-[0.3em] text-[#e0a253] ${className}`}>{children}</div>
);

const Title = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <h2 className={`font-stencil text-5xl leading-[0.95] md:text-7xl ${className}`}>{children}</h2>
);

const CallButton = ({ label = 'Call to Reserve', className = '' }: { label?: string; className?: string }) => (
    <a href={PHONE_HREF} className={`btn-cibo px-8 py-4 text-base ${className}`}>
        {label}
    </a>
);

const Page = () => {
    return (
        <main>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

            {/* ── Navigation: wordmark left, call button right, tricolore hairline underneath ── */}
            <nav className='fixed top-0 z-50 w-full bg-[#0e0b09]'>
                <div className='flex h-16 items-center justify-between px-5 md:px-8'>
                    <a
                        href='#top'
                        className='flex items-center gap-3'
                        aria-label='Cibo Wine Bar King West, back to top'>
                        <CiboLogo className='h-10 w-auto text-[#f1e8d6]' />
                        <span className='hidden border-l border-[#f1e8d6]/30 pl-3 text-[0.7rem] font-medium tracking-[0.45em] text-[#f1e8d6]/75 uppercase sm:block'>
                            King West
                        </span>
                    </a>
                    <a href={PHONE_HREF} className='btn-cibo px-4 py-2.5 text-xs md:px-5 md:text-sm'>
                        Call to Reserve
                    </a>
                </div>
                <div className='tricolore' />
            </nav>

            {/* ── Hero: the wordmark on black beside the dining room, with the booking strip underneath.
                 Phones get the photo first, then the wordmark. ── */}
            <section id='top' className='mt-[67px] flex flex-col bg-[#0e0b09] md:min-h-[calc(100svh-67px)]'>
                <div className='grid flex-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'>
                    <HeroSlideshow className='h-[36svh] min-h-[240px] md:order-2 md:h-auto' />

                    <div className='flex items-center px-6 py-10 md:order-1 md:px-12 md:py-14 lg:px-20'>
                        <div className='hero-logo'>
                            <h1>
                                <CiboLogo
                                    title='Cibo Wine Bar King West: Italian restaurant and wine bar in Toronto'
                                    className='w-40 text-[#f1e8d6] md:w-64'
                                />
                                <span className='mt-4 block text-sm font-medium tracking-[0.6em] text-[#f1e8d6]/80 uppercase'>
                                    Wine Bar
                                </span>
                            </h1>
                            <p className='font-stencil mt-8 text-3xl leading-tight text-[#f1e8d6] md:mt-12 md:text-4xl'>
                                Rustic Italian
                                <br />
                                on King West
                            </p>
                            <p className='mt-4 text-[#f1e8d6]/65'>Happy hour every day, 2 to 6:30pm</p>
                            <CallButton className='mt-8 md:mt-10' />
                        </div>
                    </div>
                </div>

                {/* Booking strip: OpenTable's wide widget on larger screens, its compact one on phones */}
                <div className='flex flex-col gap-5 border-t border-[#f1e8d6]/10 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12 md:py-5 lg:px-20'>
                    <div className='font-stencil text-xl text-[#f1e8d6]/85'>Book a Table</div>
                    <OpenTableWidget className='flex w-full md:w-auto md:justify-end' />
                </div>
            </section>

            {/* ── La Settimana: a specials board. Happy hour across the top, then a row per day with that
                 day's offers as equal blocks ── */}
            <section id='week' className='bg-[#16110d] px-6 py-20 md:px-12 md:py-28'>
                <div className='mx-auto max-w-6xl'>
                    <Reveal className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
                        <Title className='text-[#f1e8d6]'>La Settimana</Title>
                        <p className='text-lg text-[#f1e8d6]/65'>Tuesday to Sunday · Closed Mondays</p>
                    </Reveal>

                    <Reveal className='mt-12'>
                        <div className='flex flex-col gap-3 bg-[#e0a253] px-6 py-6 text-[#141010] md:flex-row md:items-center md:justify-between md:px-8 md:py-7'>
                            <div>
                                <div className='text-xs font-bold tracking-[0.25em] uppercase opacity-70'>
                                    Every day · 2 to 6:30pm
                                </div>
                                <h3 className='font-stencil mt-2 text-3xl md:text-4xl'>Happy Hour</h3>
                            </div>
                            <p className='font-stencil text-2xl md:text-3xl'>Half-Price Drinks</p>
                        </div>

                        <ul className='mt-3'>
                            {WEEK.map((row) => (
                                <li
                                    key={row.day}
                                    className='grid gap-3 border-b border-[#f1e8d6]/12 py-3 md:grid-cols-[220px_1fr] md:items-stretch md:gap-6'>
                                    <div className='flex items-baseline gap-3 md:flex-col md:justify-center md:gap-1'>
                                        <span className='font-stencil text-2xl text-[#f1e8d6] md:text-3xl'>
                                            {row.day}
                                        </span>
                                        <span className='text-xs font-bold tracking-[0.2em] text-[#f1e8d6]/50 uppercase'>
                                            {row.en}
                                        </span>
                                    </div>
                                    <div className='grid gap-3 sm:auto-cols-fr sm:grid-flow-col'>
                                        {row.offers.map((key) => {
                                            const offer = OFFERS[key];

                                            return (
                                                <div key={key} className={`px-5 py-3.5 md:px-6 ${offer.tone}`}>
                                                    <div className='font-stencil text-xl md:text-2xl'>
                                                        {offer.title}
                                                    </div>
                                                    <div className='mt-1 text-[0.9375rem] opacity-80'>
                                                        {offer.detail}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className='mt-6 text-sm text-[#f1e8d6]/60'>
                            At lunch: <span className='font-bold text-[#f1e8d6]/85'>Lunch in Fretta</span>, two courses
                            for $25.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ── From the kitchen: a wall of plates at their natural proportions ── */}
            <section id='food' className='bg-[#0e0b09] px-4 py-20 md:px-8 md:py-28'>
                <Reveal className='mx-auto max-w-6xl px-2 md:px-4'>
                    <div className='grid gap-6 md:grid-cols-2 md:items-end'>
                        <Title className='text-[#f1e8d6]'>From the Kitchen</Title>
                        <p className='text-lg leading-relaxed text-[#f1e8d6]/70'>
                            Pasta fresca made in house, pizza from the oven and plates made to pass around the table.
                        </p>
                    </div>
                </Reveal>
                <div className='mx-auto mt-12 max-w-7xl columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4'>
                    {PLATES.map((plate, i) => (
                        <Reveal key={plate.src} delay={(i % 4) * 80} className='mb-3 break-inside-avoid md:mb-4'>
                            <figure>
                                <div className='overflow-hidden'>
                                    <LightboxImage
                                        src={plate.src}
                                        alt={plate.alt}
                                        sizes='(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw'
                                        className='h-auto w-full transition-transform duration-700 hover:scale-[1.03]'
                                    />
                                </div>
                                <figcaption className='font-stencil mt-2 text-sm tracking-[0.1em] text-[#f1e8d6]/70'>
                                    {plate.caption}
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── Il Menu: printed on cream paper, like the card at the table ── */}
            <section id='menu' className='bg-[#f4efe4] px-6 py-20 text-[#141010] md:px-12 md:py-28'>
                <div className='mx-auto max-w-6xl'>
                    <Reveal className='flex flex-col gap-6 border-b-4 border-[#141010] pb-8 md:flex-row md:items-end md:justify-between'>
                        <h2 className='font-stencil text-7xl leading-none md:text-[140px]'>Il Menu</h2>
                        <div className='md:pb-4 md:text-right'>
                            <p className='text-sm font-bold tracking-[0.15em] uppercase'>
                                Executive Chef Francesco Di Salvo
                            </p>
                            <p className='mt-2 max-w-xs text-sm text-[#141010]/65 md:ml-auto'>
                                GF marks dishes made with gluten-free ingredients. Gluten-free pasta available.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal className='mt-12'>
                        <MenuTabs />
                    </Reveal>
                    <Reveal className='mt-16 border-t border-[#141010]/15 pt-10'>
                        <a
                            href={PHONE_HREF}
                            className='font-stencil inline-block bg-[#141010] px-8 py-4 text-base tracking-[0.12em] text-[#f4efe4] transition-colors hover:bg-[#a8302a]'>
                            Call to Reserve
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* ── Vino: photos left, the wine bar right ── */}
            <section id='wine' className='bg-[#16110d] px-6 py-20 md:px-12 md:py-28'>
                <div className='mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20'>
                    <div className='grid grid-cols-2 gap-3 md:order-1'>
                        <Reveal>
                            <div className='aspect-[3/4] overflow-hidden'>
                                <LightboxImage
                                    src='/images/patio-cocktails.jpg'
                                    sizes='(max-width: 767px) 45vw, 300px'
                                    alt='Three cocktails on a wooden patio table in the sun'
                                    className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]'
                                />
                            </div>
                        </Reveal>
                        <Reveal delay={120} className='mt-12'>
                            <div className='aspect-[3/4] overflow-hidden'>
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
                        <h2 className='font-stencil text-[110px] leading-none text-[#f1e8d6] md:text-[170px]'>Vino</h2>
                        <p className='mt-6 max-w-lg text-lg leading-relaxed text-[#f1e8d6]/80'>
                            Over twenty wines by the glass, from Prosecco and Lambrusco to a Super Tuscan and Amarone,
                            and a bottle list that runs from the Alps to Sicily. Cocktails and Italian amari at the bar
                            and on the patio.
                        </p>
                        <div className='mt-9 border-t border-[#f1e8d6]/15 pt-6'>
                            <div className='font-stencil text-5xl text-[#e0a253]'>20+</div>
                            <div className='mt-1 text-sm text-[#f1e8d6]/65'>Wines by the glass</div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── After dark: left-aligned over the toast ── */}
            <section className='relative overflow-hidden bg-[#0e0b09]'>
                <ResponsiveImg
                    src='/images/table-toast.jpg'
                    sizes='100vw'
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover object-[50%_30%]'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-[#0e0b09] via-[#0e0b09]/80 to-[#0e0b09]/30' />
                <div className='relative mx-auto flex min-h-[640px] max-w-6xl items-center px-6 py-24 md:px-12 lg:min-h-[80vh]'>
                    <Reveal className='max-w-xl'>
                        <Label>Thursday to Saturday</Label>
                        <h2 className='font-stencil mt-6 text-6xl leading-[0.9] text-[#f1e8d6] md:text-[110px]'>
                            Cibo
                            <br />
                            After Dark
                        </h2>
                        <ul className='mt-10 space-y-3'>
                            {['Open until 2am', 'Cocktails & Italian amari', 'Bottle service'].map((item) => (
                                <li
                                    key={item}
                                    className='text-lg font-bold tracking-[0.12em] text-[#f1e8d6]/90 uppercase'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <CallButton label='Book Your Night' className='mt-12' />
                    </Reveal>
                </div>
            </section>

            {/* ── Private dining: the rooms read like a list; hover or tap one to see it ── */}
            <section id='events' className='bg-[#0e0b09] px-6 py-20 md:px-12 md:py-28'>
                <Reveal className='mx-auto max-w-6xl'>
                    <RoomPicker
                        intro={
                            <>
                                <Label>Private Dining & Events</Label>
                                <Title className='mt-5 text-[#f1e8d6]'>Your Own Room at Cibo</Title>
                                <p className='mt-7 max-w-xl text-lg leading-relaxed text-[#f1e8d6]/80'>
                                    Four private rooms with natural daylight and full audio and video, plus a lounge for
                                    standing receptions. Group menus for lunch, dinner and cocktail parties start at $45
                                    per person.
                                </p>
                            </>
                        }
                        actions={
                            <div className='mt-10 flex flex-wrap items-center gap-4'>
                                <a href={EVENTS_PHONE_HREF} className='btn-cibo px-6 py-4 text-sm md:px-8 md:text-base'>
                                    Call to Plan Your Event
                                </a>
                                <a href={`mailto:${EVENTS_EMAIL}`} className='btn-cibo-outline px-6 py-4 text-sm'>
                                    Email the Events Team
                                </a>
                            </div>
                        }
                    />
                </Reveal>
            </section>

            {/* ── Reserve: full-width photo of the table under a dark wash, copy and booking on top ── */}
            <section id='reserve' className='relative overflow-hidden bg-[#0e0b09] px-6 py-24 md:px-12 md:py-36'>
                <ResponsiveImg
                    src='/images/pizza-yolk.jpg'
                    sizes='100vw'
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover'
                />
                <div className='absolute inset-0 bg-[#0e0b09]/70' />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0e0b09] via-transparent to-[#0e0b09]/60' />
                <div className='relative mx-auto max-w-6xl'>
                    <Reveal className='grid gap-8 md:grid-cols-[1fr_auto] md:items-end'>
                        <div>
                            <h2 className='font-stencil text-6xl leading-[0.95] text-[#f4efe4] md:text-8xl'>
                                Reserve a Table
                            </h2>
                            <p className='mt-6 max-w-xl text-lg leading-relaxed text-[#f4efe4]/85'>
                                522 King St West at Brant. Open from 11:30am, until 2am Thursday to Saturday.
                            </p>
                        </div>
                        <CallButton label={`Call ${PHONE_LABEL}`} className='justify-self-start' />
                    </Reveal>
                    <Reveal delay={150} className='mt-12 border-t border-[#f4efe4]/25 pt-10'>
                        <OpenTableWidget className='flex w-full justify-start' />
                    </Reveal>
                </div>
            </section>

            {/* ── Footer: a sign-off line and the call, the essentials between hairlines, and the wordmark
                 set huge along the bottom edge ── */}
            <footer className='relative overflow-hidden bg-[#0e0b09] text-[#f1e8d6]'>
                <div className='mx-auto max-w-6xl px-6 pt-20 md:px-12 md:pt-28'>
                    <div className='flex flex-col gap-10 border-b border-[#f1e8d6]/15 pb-14 md:flex-row md:items-end md:justify-between'>
                        <div>
                            <h2 className='font-stencil text-5xl leading-[0.95] md:text-7xl'>
                                Ci vediamo
                                <br />
                                <span className='text-[#e0a253]'>a King West</span>
                            </h2>
                            <p className='mt-4 text-[#f1e8d6]/60'>See you on King West.</p>
                        </div>
                        <div className='flex flex-col items-start gap-4 md:items-end'>
                            <CallButton />
                            <a
                                href={PHONE_HREF}
                                className='text-2xl font-bold tracking-wide transition-colors hover:text-[#e0a253]'>
                                {PHONE_LABEL}
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#f1e8d6]/15'>
                        <div className='md:pr-10'>
                            <h3 className='text-xs font-bold tracking-[0.3em] text-[#e0a253] uppercase'>Visit</h3>
                            <p className='mt-4 leading-relaxed'>
                                522 King St West
                                <br />
                                Toronto, ON M5V 1K4
                            </p>
                            <p className='mt-3 text-sm leading-relaxed text-[#f1e8d6]/55'>
                                At Brant St, by the King and Spadina streetcars. Valet on weekends and five public lots
                                within three blocks.
                            </p>
                            <a
                                href={MAPS_HREF}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-4 inline-block border-b border-[#e0a253]/60 pb-0.5 text-sm font-bold tracking-[0.15em] text-[#e0a253] uppercase transition-colors hover:border-[#e0a253]'>
                                Get Directions
                            </a>
                        </div>

                        <div className='md:order-3 md:pl-10'>
                            <h3 className='text-xs font-bold tracking-[0.3em] text-[#e0a253] uppercase'>
                                Follow & Gift
                            </h3>
                            <a
                                href='https://www.instagram.com/cibo_winebar/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Follow Cibo Wine Bar on Instagram'
                                className='mt-4 inline-flex items-center gap-2 transition-colors hover:text-[#e0a253]'>
                                <svg
                                    width='18'
                                    height='18'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='1.6'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    aria-hidden='true'>
                                    <rect x='2' y='2' width='20' height='20' rx='5' />
                                    <circle cx='12' cy='12' r='4.5' />
                                    <circle cx='17.2' cy='6.8' r='0.8' fill='currentColor' stroke='none' />
                                </svg>
                                @cibo_winebar
                            </a>
                            <a
                                href={GIFT_CARD_HREF}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-3 block transition-colors hover:text-[#e0a253]'>
                                Gift cards
                            </a>
                            <a
                                href={`mailto:${EVENTS_EMAIL}`}
                                className='mt-3 block text-sm text-[#f1e8d6]/60 transition-colors hover:text-[#e0a253]'>
                                events.king@
                                <wbr />
                                cibowinebar.com
                            </a>
                        </div>

                        <div className='col-span-2 md:order-2 md:col-span-1 md:px-10'>
                            <h3 className='text-xs font-bold tracking-[0.3em] text-[#e0a253] uppercase'>Hours</h3>
                            <dl className='mt-4 space-y-2'>
                                {[
                                    { day: 'Tue, Wed & Sun', time: '11:30am to 12am' },
                                    { day: 'Thu to Sat', time: '11:30am to 2am' },
                                    { day: 'Monday', time: 'Closed' },
                                    { day: 'Happy hour', time: 'Daily, 2 to 6:30pm' },
                                    { day: 'Brunch', time: 'Sat & Sun, 11:30 to 4pm' }
                                ].map((row) => (
                                    <div key={row.day} className='flex items-baseline justify-between gap-4'>
                                        <dt className='text-[#f1e8d6]/55'>{row.day}</dt>
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
                        className='absolute -bottom-[10%] left-1/2 w-[110%] -translate-x-1/2 text-[#f1e8d6]/[0.08] md:w-[78%]'
                    />
                </div>

                <div className='relative border-t border-[#f1e8d6]/10 bg-[#0e0b09]'>
                    <div className='tricolore' />
                    <div className='mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-5 text-xs tracking-wide text-[#f1e8d6]/45 md:flex-row md:justify-between md:px-12'>
                        <span>© {new Date().getFullYear()} Cibo Wine Bar King West</span>
                        <span>Ospitalità Italiana · Italian Government Seal of Authenticity</span>
                        <span>A Liberty Entertainment Group restaurant</span>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Page;
