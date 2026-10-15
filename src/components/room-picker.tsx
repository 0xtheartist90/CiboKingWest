'use client';

import { type ReactNode, useState } from 'react';

import ResponsiveImg from '@/components/responsive-img';

type Room = { name: string; size: string; note: string; desc: string; src: string; alt: string };

// Room details and photos from Cibo King West's OpenTable private dining profile.
const ROOMS: Room[] = [
    {
        name: 'Milano',
        size: 'Up to 28 seated',
        note: 'Private',
        desc: 'The largest private dining room, one long table under industrial pendant lights.',
        src: '/images/room-milano.jpg',
        alt: 'The Milano private dining room with a long table set beneath a row of pendant lights'
    },
    {
        name: 'Toscana',
        size: 'Up to 16 seated',
        note: 'Private',
        desc: 'A rustic wine cellar feel, with a wall of bottles, stone arches and a polished wood table.',
        src: '/images/room-toscana.jpg',
        alt: 'The Toscana room with a wine bottle wall, stone arch and a long polished wood table'
    },
    {
        name: 'Torino',
        size: 'Up to 14 seated',
        note: 'Semi-private',
        desc: 'Sleek yet warm, behind frosted glass under a lantern pendant.',
        src: '/images/room-torino.jpg',
        alt: 'The Torino room with a set table under a round lantern pendant and frosted glass walls'
    },
    {
        name: 'Verona',
        size: 'Up to 12 seated',
        note: 'Semi-private',
        desc: 'Contemporary and elegant, with lounge seating under Moroccan lanterns.',
        src: '/images/room-verona.jpg',
        alt: 'The Verona room with banquette seating, a glass table and hanging lanterns'
    },
    {
        name: 'Lounge',
        size: 'Up to 110 standing',
        note: 'Receptions',
        desc: 'The bar and lounge for standing receptions and cocktail parties.',
        src: '/images/cibo-sign.jpg',
        alt: 'The lit CIBO sign glowing over a table in the lounge'
    }
];

// The rooms read like a list; hovering or tapping one shows its photo. On larger screens the photo
// sits in a column beside the list, on phones it opens under the chosen room.
const RoomPicker = ({ intro, actions }: { intro: ReactNode; actions: ReactNode }) => {
    const [active, setActive] = useState(0);

    return (
        <div className='grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16'>
            <div>
                {intro}
                <ul className='mt-10 border-t border-[#f1e8d6]/20'>
                    {ROOMS.map((room, i) => (
                        <li key={room.name} className='border-b border-[#f1e8d6]/20'>
                            <button
                                type='button'
                                aria-expanded={i === active}
                                onMouseEnter={() => setActive(i)}
                                onFocus={() => setActive(i)}
                                onClick={() => setActive(i)}
                                className='group flex w-full items-baseline justify-between gap-4 py-4 text-left'>
                                <span
                                    className={`font-stencil text-3xl transition-colors md:text-4xl ${
                                        i === active ? 'text-[#e0a253]' : 'text-[#f1e8d6] group-hover:text-[#e0a253]'
                                    }`}>
                                    {room.name}
                                </span>
                                <span className='text-right'>
                                    <span className='block font-bold text-[#f1e8d6]'>{room.size}</span>
                                    <span className='block text-xs tracking-[0.15em] text-[#f1e8d6]/55 uppercase'>
                                        {room.note}
                                    </span>
                                </span>
                            </button>
                            {/* The chosen room's line, and on phones its photo, open underneath */}
                            <div
                                className={`grid transition-[grid-template-rows] duration-500 ${
                                    i === active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}>
                                <div className='overflow-hidden'>
                                    <p className='pb-4 text-[0.9375rem] text-[#f1e8d6]/65'>{room.desc}</p>
                                    <div className='mb-5 aspect-[4/3] overflow-hidden md:hidden'>
                                        <ResponsiveImg
                                            src={room.src}
                                            alt={room.alt}
                                            sizes='90vw'
                                            loading='lazy'
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {actions}
            </div>

            {/* Larger screens: every room photo stacked, the chosen one faded in */}
            <div className='hidden md:block'>
                <div className='sticky top-28 aspect-[4/5] overflow-hidden bg-[#16110d]'>
                    {ROOMS.map((room, i) => (
                        <ResponsiveImg
                            key={room.name}
                            src={room.src}
                            alt={i === active ? room.alt : ''}
                            aria-hidden={i !== active}
                            sizes='40vw'
                            loading='lazy'
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                                i === active ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                    <div className='font-stencil absolute bottom-0 left-0 bg-[#f1e8d6] px-4 py-2 text-sm tracking-[0.2em] text-[#0e0b09]'>
                        {ROOMS[active].name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomPicker;
