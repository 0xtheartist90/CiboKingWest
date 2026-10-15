'use client';

import { useRef, useState } from 'react';

type MenuItem = { name: string; price: string; desc?: string; gf?: boolean };
type Group = { title?: string; items: MenuItem[] };
type Section = { label: string; note?: string; groups: Group[]; footer?: string };

// From the King West food and bar menus on cibo.menu.
const SECTIONS: Section[] = [
    {
        label: 'Antipasto',
        groups: [
            {
                items: [
                    { name: 'House Made Focaccia', price: '6', desc: 'Spiced olives and peperoncino' },
                    {
                        name: 'Bruschetta',
                        price: '12',
                        desc: 'Tomatoes, garlic, oregano, shavings of parmigiano reggiano, balsamic glaze'
                    },
                    { name: 'Polenta Fries', price: '14', desc: 'Gorgonzola dip + spicy marinara' },
                    { name: 'Polpettine', price: '16', desc: 'In tomato sauce' },
                    { name: 'Arancini', price: '16', desc: 'Rice balls stuffed with meat ragu, melted mozzarella' },
                    {
                        name: 'Caprese',
                        price: '22',
                        gf: true,
                        desc: 'Mozzarella di bufala, vine ripened tomatoes, basil, extra-virgin olive oil, balsamic vinegar'
                    },
                    {
                        name: 'Carpaccio',
                        price: '24',
                        gf: true,
                        desc: 'Thinly sliced raw beef, arugula, shavings of parmigiano reggiano, extra-virgin olive oil, lemon juice'
                    },
                    {
                        name: 'Grilled Whole Calamari',
                        price: '24',
                        gf: true,
                        desc: 'Mixed greens, diced tomatoes, extra-virgin olive oil, lemon juice'
                    },
                    {
                        name: 'Grilled Octopus',
                        price: '24',
                        gf: true,
                        desc: 'Mixed greens, radicchio, purple potato, green beans, fried capers, lemon juice'
                    },
                    { name: 'Fried Calamari', price: '22', desc: 'Garlic mayo + spicy marinara' },
                    {
                        name: 'Mediterranean Clams + Mussels',
                        price: '24',
                        gf: true,
                        desc: 'Parma broth, crispy shallots, chives'
                    },
                    {
                        name: 'Burrata',
                        price: '29',
                        gf: true,
                        desc: 'Traditional soft Italian cheese, Prosciutto di Parma, arugula, aged balsamic vinegar'
                    },
                    {
                        name: 'Prosciutto + Formaggio',
                        price: '26',
                        gf: true,
                        desc: 'Prosciutto di Parma, hot salami, Italian cheeses, olives'
                    }
                ]
            }
        ]
    },
    {
        label: 'Pizza',
        groups: [
            {
                title: 'Classiche',
                items: [
                    { name: 'Margherita', price: '19', desc: 'Fior di latte, San Marzano D.O.P. tomato, basil' },
                    {
                        name: 'Da Napoli',
                        price: '19',
                        desc: 'Tomato chunks, fresh mozzarella, grana padano, garlic, oregano'
                    },
                    {
                        name: 'Mozzarella di Bufala',
                        price: '22',
                        desc: 'Tomato, mozzarella di bufala, basil, extra-virgin olive oil'
                    },
                    {
                        name: 'San Giorgio',
                        price: '22',
                        desc: 'Tomato, fresh mozzarella, spicy soppressata, black olives'
                    },
                    {
                        name: 'Diavola',
                        price: '24',
                        desc: 'Tomato, fresh mozzarella, spicy calabrese salami, roasted red peppers'
                    },
                    {
                        name: 'Capricciosa',
                        price: '24',
                        desc: 'Tomato, fresh mozzarella, Italian ham, mushrooms, artichokes, olives'
                    }
                ]
            },
            {
                title: 'Gourmet',
                items: [
                    {
                        name: 'Di Nicolino',
                        price: '27',
                        desc: 'Tomato, fior di latte, arugula, prosciutto di parma crudo'
                    },
                    { name: 'Funghi', price: '26', desc: 'Wild mushrooms, fontina cream, white truffle oil' },
                    {
                        name: 'Gorgonzola',
                        price: '24',
                        desc: 'Fresh mozzarella, gorgonzola, fresh pears, walnuts, honey'
                    },
                    {
                        name: 'Mortadella',
                        price: '27',
                        desc: 'Smoked provolone, fresh mozzarella, pistachio, caramelized onion'
                    },
                    {
                        name: 'Fresh Italian Truffle',
                        price: '30',
                        desc: 'Summer truffle, truffle paste, mozzarella di bufala, Italian sausage, arugula'
                    }
                ]
            }
        ],
        footer: 'Every Tuesday, all pizzas are half price.'
    },
    {
        label: 'Pasta',
        groups: [
            {
                title: 'Pasta Fresca · Made in House',
                items: [
                    { name: 'Lobster Ravioli', price: '32', desc: 'Lemon, béchamel, lobster cream sauce' },
                    {
                        name: 'Braised Short Rib Ravioli',
                        price: '32',
                        desc: 'Porcini cream sauce, parmigiano reggiano'
                    },
                    { name: 'Gnocchi', price: '28', desc: 'Tomato + ricotta or gorgonzola or rosé sauce' },
                    { name: 'Pappardelle', price: '32', desc: 'Slow cooked lamb ragu, pecorino shavings' },
                    {
                        name: 'Tagliatelle Bolognese',
                        price: '28',
                        desc: 'Traditional meat sauce, parmigiano reggiano'
                    },
                    { name: 'Tagliatelle', price: '28', desc: 'Wild mushroom, black truffle paste, white wine' },
                    {
                        name: 'Orecchiette',
                        price: '29',
                        desc: 'Rapini, spicy Italian sausage, fontina, parmigiano reggiano, garlic, extra-virgin olive oil'
                    }
                ]
            },
            {
                title: 'Lunga, Corta & Risotto',
                items: [
                    {
                        name: 'Spaghetti Carbonara',
                        price: '27',
                        desc: 'Pancetta, egg yolk, parmigiano reggiano, cracked black pepper'
                    },
                    {
                        name: 'Seafood Linguine',
                        price: '30',
                        desc: 'Fresh clams, mussels, calamari, tiger shrimp, light tomato sauce'
                    },
                    { name: 'Penne alla Vodka', price: '27', desc: 'Rosé vodka cream sauce, pancetta' },
                    { name: 'Risotto ai Funghi', price: '29', gf: true, desc: 'Porcini mushrooms, truffle oil' }
                ]
            }
        ],
        footer: 'Gluten-free and whole wheat pasta available.'
    },
    {
        label: 'Secondi',
        groups: [
            {
                items: [
                    {
                        name: 'Bistecca',
                        price: '48',
                        desc: 'Grilled striploin steak, lobster compound butter, veal jus, french fries'
                    },
                    {
                        name: 'Chianti Braised Short Ribs',
                        price: '44',
                        desc: '10oz porcini crusted beef short ribs, gorgonzola polenta, crispy onions'
                    },
                    {
                        name: 'Veal Milanese',
                        price: '42',
                        desc: 'Butterflied breaded veal chop, rapini, roasted fingerling potatoes'
                    },
                    {
                        name: 'Branzino',
                        price: '42',
                        gf: true,
                        desc: 'Crispy whole fish, red pepper aioli, grilled rapini, cherry tomato salsa'
                    },
                    {
                        name: 'Pollo Parmigiana',
                        price: '36',
                        desc: 'Breaded boneless organic chicken breast, melted mozzarella, parmigiano, tomato sauce, rapini, roasted fingerling potatoes'
                    },
                    {
                        name: 'Salmone Fresco Atlantico',
                        price: '36',
                        gf: true,
                        desc: 'Fresh Atlantic salmon, grilled asparagus, fennel, orange salad'
                    }
                ]
            }
        ]
    },
    {
        label: 'Dolci',
        groups: [
            {
                items: [
                    { name: 'Tiramisù', price: '12', desc: 'Venetian classic' },
                    {
                        name: 'Lemon Ricotta Cheesecake',
                        price: '12',
                        desc: 'Black cherries, white chocolate shavings'
                    },
                    { name: 'Chocolate Baci Bombe', price: '12', desc: 'Hazelnut praline' },
                    { name: 'Vanilla Bean Panna Cotta', price: '12', desc: 'Strawberry, prosecco fizz' },
                    { name: 'Affogato', price: '12', desc: 'Vanilla gelato, espresso shot' },
                    { name: 'Nutella Pizza', price: '16', desc: 'Banana, crushed hazelnuts' }
                ]
            }
        ]
    },
    {
        label: 'Cocktails',
        groups: [
            {
                items: [
                    {
                        name: 'Cibo Espresso Martini',
                        price: '18',
                        desc: 'Chestnut liqueur, espresso, turbinado'
                    },
                    {
                        name: 'Barrel-Aged Negroni',
                        price: '18',
                        desc: 'Tanqueray gin, Campari + Cinzano Rosso, on the rocks with a fresh orange zest'
                    },
                    {
                        name: 'Strawberry Coconut Spritz',
                        price: '18',
                        desc: 'Clarified strawberry, Cîroc Coconut vodka, rhubarb, prosecco'
                    },
                    {
                        name: 'Italian Rosé Lemonade',
                        price: '17',
                        desc: 'Amalfi limoncello, rosé vermouth, sparkling limonata'
                    },
                    {
                        name: 'Blueberry Basil Margarita',
                        price: '18',
                        desc: 'Wild blueberry, fresh basil, lime, Tromba Blanco tequila'
                    },
                    {
                        name: 'Midnight Boulevardier',
                        price: '19',
                        desc: 'Amaro Alpino, Carpano Classico, Bearface whisky, dark chocolate'
                    },
                    {
                        name: 'Cibo Peach Sangria',
                        price: '16',
                        desc: 'Peach nectar, lemon, berries and Cîroc Peach, with white, sparkling or red wine'
                    },
                    {
                        name: 'Elderflower White Negroni',
                        price: '18',
                        desc: 'Tanqueray gin, St. Germain, white bitter, with a fresh grapefruit wedge'
                    }
                ]
            }
        ]
    },
    {
        label: 'Wine by the Glass',
        note: 'Priced 5oz · 8oz · bottle. Many more Italian and world bottles on the full list.',
        groups: [
            {
                items: [
                    {
                        name: 'Prosecco, Tenuta Santomè',
                        price: '14 · 70',
                        desc: 'Brut, Treviso, Veneto'
                    },
                    {
                        name: 'Lambrusco, Medici Ermete',
                        price: '14 · 70',
                        desc: 'Concerto, Reggiano, Emilia-Romagna'
                    },
                    {
                        name: 'Pinot Grigio, Giulio Straccali',
                        price: '14 · 22 · 70',
                        desc: 'Pavia IGT, Lombardia'
                    },
                    {
                        name: 'Verdicchio, Velenosi',
                        price: '14 · 22 · 70',
                        desc: 'Villa Angela, Castelli di Jesi Classico, Marche'
                    },
                    {
                        name: 'Nebbiolo Rosato, Deltetto',
                        price: '16 · 25 · 80',
                        desc: 'Suasi, Langhe, Piedmont'
                    },
                    {
                        name: 'Chianti Classico, Sant’Alfonso',
                        price: '14 · 22 · 70',
                        desc: 'Chianti Classico DOCG, Toscana'
                    },
                    {
                        name: 'Primitivo, Vigneti del Salento',
                        price: '16 · 25 · 80',
                        desc: 'Zolla, Primitivo di Manduria DOC, Puglia'
                    },
                    {
                        name: 'Super Tuscan, Le Pupille',
                        price: '17 · 27 · 85',
                        desc: 'Pelofino, Toscana IGT'
                    },
                    {
                        name: 'Nerello Mascalese, Firriato',
                        price: '18 · 29 · 90',
                        desc: 'Le Sabbie dell’Etna, Sicily'
                    },
                    {
                        name: 'Amarone, Campagnola',
                        price: '24 · 38 · 120',
                        desc: 'Amarone della Valpolicella DOCG, Veneto'
                    }
                ]
            }
        ]
    }
];

// Laid out like Cibo's printed menu card: black stencil headings and heavy dish names on cream
// paper. Section names run down a sidebar on larger screens and across a swipeable row on phones.
const MenuTabs = () => {
    const [active, setActive] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const section = SECTIONS[active];

    const select = (i: number) => {
        setActive(i);
        tabs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    return (
        <div className='grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16'>
            <div className='relative -mx-6 md:mx-0'>
                <div
                    role='tablist'
                    className='flex snap-x scroll-px-6 gap-x-6 overflow-x-auto border-b border-[#141010]/15 px-6 pb-3 [scrollbar-width:none] md:sticky md:top-28 md:flex-col md:gap-0 md:overflow-visible md:border-b-0 md:border-l md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden'>
                    {SECTIONS.map((s, i) => (
                        <button
                            key={s.label}
                            role='tab'
                            aria-selected={i === active}
                            ref={(el) => {
                                tabs.current[i] = el;
                            }}
                            onClick={() => select(i)}
                            className={`font-stencil shrink-0 snap-start text-left text-lg whitespace-nowrap transition-colors md:-ml-px md:border-l-4 md:py-2.5 md:pl-5 md:text-xl ${
                                i === active
                                    ? 'text-[#a8302a] md:border-[#a8302a]'
                                    : 'text-[#141010]/55 hover:text-[#141010] md:border-transparent'
                            }`}>
                            {s.label}
                        </button>
                    ))}
                </div>
                <div className='pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f4efe4] to-transparent md:hidden' />
            </div>

            <div role='tabpanel' className='min-w-0'>
                <h3 className='font-stencil text-5xl text-[#141010] md:text-6xl'>{section.label}</h3>
                {section.note && <p className='mt-2 text-sm text-[#141010]/60 italic'>{section.note}</p>}

                {section.groups.map((group) => (
                    <div key={group.title ?? section.label} className='mt-10 first:mt-8'>
                        {group.title && (
                            <h4 className='font-stencil mb-6 text-xl text-[#a8302a] md:text-2xl'>{group.title}</h4>
                        )}
                        <div className='grid gap-x-12 gap-y-6 lg:grid-cols-2'>
                            {group.items.map((item) => (
                                <div key={item.name} className='relative'>
                                    {item.gf && (
                                        <span
                                            className='font-stencil absolute top-0.5 -left-7 hidden text-xs text-[#141010]/45 md:block'
                                            title='Made with gluten-free ingredients'>
                                            GF
                                        </span>
                                    )}
                                    <div className='flex items-baseline gap-3'>
                                        <h5 className='text-[0.95rem] font-extrabold tracking-wide text-[#141010] uppercase md:text-base'>
                                            {item.gf && (
                                                <span className='font-stencil mr-2 text-xs text-[#141010]/45 md:hidden'>
                                                    GF
                                                </span>
                                            )}
                                            {item.name}
                                        </h5>
                                        <span className='mb-1 flex-1 border-b border-dotted border-[#141010]/30' />
                                        <span className='shrink-0 font-bold text-[#141010]'>{item.price}</span>
                                    </div>
                                    {item.desc && (
                                        <p className='mt-1 text-[0.9375rem] leading-relaxed text-[#141010]/70'>
                                            {item.desc}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {section.footer && <p className='mt-10 text-sm text-[#141010]/60 italic'>{section.footer}</p>}
            </div>
        </div>
    );
};

export default MenuTabs;
