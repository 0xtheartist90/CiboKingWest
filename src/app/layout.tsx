import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter_Tight, Stardos_Stencil } from 'next/font/google';

import '@/app/globals.css';
import SmoothScroll from '@/components/smooth-scroll';

// Cibo's printed menus set headings in a serif stencil and dish names in a heavy grotesque.
const stencil = Stardos_Stencil({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-stencil'
});
const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '700', '800'],
    variable: '--font-inter-tight'
});

const title = 'Cibo Wine Bar King West | Italian Restaurant & Wine Bar in Toronto';
const description =
    'Fresh pasta, pizza and over twenty Italian wines by the glass at 522 King St West, Toronto. Half-price drinks daily from 2 to 6:30pm, half-price pizza Tuesdays and $15 pasta Wednesdays. Call to reserve.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: ['/og.jpg'],
        type: 'website',
        locale: 'en_CA'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en'>
            <body className={`${stencil.variable} ${interTight.variable} cibo-body overscroll-none antialiased`}>
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
};

export default Layout;
