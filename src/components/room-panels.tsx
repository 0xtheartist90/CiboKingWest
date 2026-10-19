'use client';

import { useState } from 'react';

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

// Larger screens: the rooms stand side by side as tall photo panels and the one you hover or
// focus widens to show its details. Phones: a stack of cards, the tapped one opening up.
const RoomPanels = () => {
    const [active, setActive] = useState(0);

    return (
        <>
            <div className='hidden h-[560px] gap-2 md:flex lg:h-[620px]'>
                {ROOMS.map((room, i) => {
                    const open = i === active;

                    return (
                        <button
                            key={room.name}
                            type='button'
                            aria-expanded={open}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            onClick={() => setActive(i)}
                            className={`group relative min-w-0 overflow-hidden rounded-[17px] text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
                                open ? 'grow-[5]' : 'grow'
                            } basis-0`}>
                            <ResponsiveImg
                                src={room.src}
                                alt={room.alt}
                                sizes='60vw'
                                loading='lazy'
                                className='absolute inset-0 h-full w-full object-cover'
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-700 ${
                                    open
                                        ? 'bg-gradient-to-t from-[#2a1212]/90 via-[#2a1212]/20 to-transparent'
                                        : 'bg-[#2a1212]/55 group-hover:bg-[#2a1212]/40'
                                }`}
                            />
                            {/* Closed panels: the name runs up the side */}
                            <span
                                className={`font-display absolute bottom-6 left-1/2 origin-left -translate-x-1/2 rotate-180 text-2xl whitespace-nowrap text-[#f6efef] transition-opacity duration-300 [writing-mode:vertical-rl] ${
                                    open ? 'opacity-0' : 'opacity-100 delay-300'
                                }`}>
                                {room.name}
                            </span>
                            {/* Open panel: name, size and a line about the room */}
                            <div
                                className={`absolute inset-x-0 bottom-0 p-8 text-[#f6efef] transition-all duration-500 ${
                                    open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'
                                }`}>
                                <div className='text-xs font-bold tracking-[0.25em] text-[#f3e8d8] uppercase'>
                                    {room.note}
                                </div>
                                <div className='font-display mt-2 text-5xl whitespace-nowrap lg:text-6xl'>
                                    {room.name}
                                </div>
                                <div className='mt-1 text-lg font-bold'>{room.size}</div>
                                <p className='mt-3 max-w-md text-[0.95rem] leading-relaxed text-[#f6efef]/80'>
                                    {room.desc}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>

            <ul className='space-y-2 md:hidden'>
                {ROOMS.map((room, i) => {
                    const open = i === active;

                    return (
                        <li key={room.name} className='relative overflow-hidden rounded-[17px] bg-[#2a1212]'>
                            <button
                                type='button'
                                aria-expanded={open}
                                onClick={() => setActive(i)}
                                className='relative block w-full text-left'>
                                <div
                                    className={`relative overflow-hidden transition-[height] duration-500 ${
                                        open ? 'h-72' : 'h-24'
                                    }`}>
                                    <ResponsiveImg
                                        src={room.src}
                                        alt={room.alt}
                                        sizes='100vw'
                                        loading='lazy'
                                        className='absolute inset-0 h-full w-full object-cover'
                                    />
                                    <div
                                        className={`absolute inset-0 ${
                                            open
                                                ? 'bg-gradient-to-t from-[#2a1212]/95 via-[#2a1212]/30 to-transparent'
                                                : 'bg-[#2a1212]/60'
                                        }`}
                                    />
                                    <div className='absolute inset-x-0 bottom-0 p-5 text-[#f6efef]'>
                                        <div className='font-display text-[1.7rem] leading-none whitespace-nowrap'>
                                            {room.name}
                                        </div>
                                        <div className='mt-1.5 text-sm'>
                                            <span className='font-bold'>{room.size}</span>
                                            <span className='text-[#f3e8d8]'> · {room.note}</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div
                                className={`grid transition-[grid-template-rows] duration-500 ${
                                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}>
                                <p className='overflow-hidden px-5 text-[0.95rem] leading-relaxed text-[#f6efef]/75'>
                                    <span className='block pb-5'>{room.desc}</span>
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default RoomPanels;
