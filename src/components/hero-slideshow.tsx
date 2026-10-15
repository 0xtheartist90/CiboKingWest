'use client';

import { useEffect, useState } from 'react';

import ResponsiveImg from '@/components/responsive-img';

const SLIDES = [
    {
        src: '/images/dining-room.jpg',
        alt: 'The long dining room at Cibo King West with brick arches, wood beams and candlelit tables',
        position: 'object-center'
    },
    {
        src: '/images/pappardelle-spread.jpg',
        alt: 'Pappardelle with burrata and prosciutto on a table to share',
        position: 'object-[50%_60%]'
    },
    {
        src: '/images/wine-toast.jpg',
        alt: 'Glasses of red and white wine raised in a toast',
        position: 'object-[50%_40%]'
    }
];

const INTERVAL = 5500;
const FADE = 1600;
const ZOOM = 'scale(1.08)';

// Hero photos that crossfade on a loop, each pushing in slowly while it shows. The push-in is a
// transition rather than a keyframe animation: an outgoing photo keeps zooming while it fades out
// and only resets once it is fully transparent, so nothing jumps or stalls mid-fade. Holds still on
// the first photo for visitors who prefer reduced motion.
const HeroSlideshow = ({ className = '' }: { className?: string }) => {
    const [active, setActive] = useState(0);
    // The photo fading out, which keeps moving until it is gone.
    const [leaving, setLeaving] = useState<number | null>(null);
    // 'start' until mounted, then 'moving', or 'still' for reduced motion.
    const [mode, setMode] = useState<'start' | 'moving' | 'still'>('start');

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setMode('still');

            return;
        }
        // Start the first push-in on the next frame so it transitions from the zoomed state.
        const frame = requestAnimationFrame(() => setMode('moving'));
        let cleanup: number | undefined;
        const timer = window.setInterval(() => {
            setActive((i) => {
                setLeaving(i);

                return (i + 1) % SLIDES.length;
            });
            window.clearTimeout(cleanup);
            cleanup = window.setTimeout(() => setLeaving(null), FADE + 100);
        }, INTERVAL);

        return () => {
            cancelAnimationFrame(frame);
            window.clearInterval(timer);
            window.clearTimeout(cleanup);
        };
    }, []);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {SLIDES.map((slide, i) => {
                const on = i === active;
                const showing = on || i === leaving;

                return (
                    <ResponsiveImg
                        key={slide.src}
                        src={slide.src}
                        alt={on ? slide.alt : ''}
                        aria-hidden={!on}
                        sizes='(max-width: 767px) 100vw, 60vw'
                        fetchPriority={i === 0 ? 'high' : 'low'}
                        className={`absolute inset-0 h-full w-full object-cover will-change-transform ${slide.position}`}
                        style={{
                            opacity: on ? 1 : 0,
                            transform: mode === 'still' ? 'none' : showing && mode === 'moving' ? 'scale(1)' : ZOOM,
                            transition: showing
                                ? `opacity ${FADE}ms ease-in-out, transform ${INTERVAL + FADE}ms linear`
                                : `opacity ${FADE}ms ease-in-out, transform 0ms linear ${FADE}ms`
                        }}
                    />
                );
            })}
            {/* Progress ticks, one per photo */}
            <div className='absolute right-5 bottom-5 flex gap-1.5' aria-hidden='true'>
                {SLIDES.map((slide, i) => (
                    <span
                        key={slide.src}
                        className={`h-0.5 w-6 transition-colors duration-700 ${i === active ? 'bg-[#f1e8d6]' : 'bg-[#f1e8d6]/35'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlideshow;
