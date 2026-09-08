export type CoupleChapter = {
  number: string;
  title: string;
  lead: string;
  body: string[];
  images: { src: string; alt: string; position?: string }[];
};

export const coupleData = {
  person1: 'Nombre 1',
  person2: 'Nombre 2',
  date: 'Nuestra fecha especial',
  audioSrc: null as string | null,
  cover: {
    eyebrow: 'Un lugar para nosotros',
    title: 'Algo especial te espera',
    description: 'Porque hay momentos que no solo se viven, también se guardan para siempre.',
  },
  letter: [
    'Hay tantas cosas que quiero decirte, pero a veces las palabras no son suficientes.',
    'Así que hice un lugar...',
    'Un lugar donde podamos volver a cada momento, a cada sonrisa, a cada instante que nos hizo ser nosotros.',
    'Gracias por estar, por hacer todo más bonito y por ser parte de esta historia.',
  ],
  story: {
    image: '/assets/images/couple/hero.webp',
    alt: 'Pareja de demostración contemplando el atardecer junto al mar',
    title: 'Nuestra historia',
    lead: 'Dos personas. Infinitos momentos.',
  },
  chapters: [
    {
      number: '01', title: 'El comienzo', lead: 'Volvería a elegir encontrarte.',
      body: [
        'No sé en qué momento empezaste a convertirte en alguien tan importante para mí.',
        'Solo sé que, desde que llegaste, hay recuerdos que tienen otra luz.',
        'Y que, si pudiera volver a aquel primer instante, volvería a elegir encontrarte.',
      ],
      images: [
        { src: '/assets/images/couple/hero.webp', alt: 'Pareja de demostración en su primer recuerdo frente al mar' },
        { src: '/assets/images/couple/days.webp', alt: 'Pareja de demostración compartiendo una tarde en una cafetería' },
      ],
    },
    {
      number: '02', title: 'Nuestros días', lead: 'A veces, lo más bonito del día es simplemente compartirlo contigo.',
      body: [
        'Me gustan nuestros planes, nuestras risas y hasta esos momentos en los que no hacemos nada especial.',
        'Porque contigo he aprendido que no siempre hace falta que pase algo extraordinario para sentir que estoy exactamente donde quiero estar.',
        'A veces, lo más bonito del día es simplemente compartirlo contigo.',
      ],
      images: [
        { src: '/assets/images/couple/days.webp', alt: 'Pareja de demostración riendo durante uno de sus días cotidianos' },
        { src: '/assets/images/couple/hero.webp', alt: 'Pareja de demostración disfrutando de una escapada juntos', position: '50% 72%' },
      ],
    },
    {
      number: '03', title: 'A tu lado', lead: 'Hay personas con las que puedes estar. Y hay personas con las que puedes ser.',
      body: [
        'Hay personas con las que puedes estar. Y hay personas con las que puedes ser.',
        'Contigo me pasa eso: no siento que tenga que buscar las palabras perfectas ni llenar todos los silencios.',
        'Me basta con saber que estás ahí, y que por un momento el mundo puede esperar.',
      ],
      images: [
        { src: '/assets/images/couple/hero.webp', alt: 'Pareja de demostración compartiendo un momento tranquilo', position: '46% 58%' },
        { src: '/assets/images/couple/days.webp', alt: 'Mirada cómplice de una pareja de demostración', position: '50% 33%' },
      ],
    },
    {
      number: '04', title: 'Lo que viene', lead: 'Me hace ilusión imaginarte en mis próximos recuerdos.',
      body: [
        'No sé todo lo que nos espera, ni cuántos lugares nos quedan por conocer.',
        'Pero hay algo que sí sé: me hace ilusión imaginarte en mis próximos recuerdos.',
        'Porque cuando pienso en lo que viene, no necesito que sea perfecto. Me basta con que sigamos encontrando motivos para elegirnos.',
      ],
      images: [
        { src: '/assets/images/couple/future.webp', alt: 'Pareja de demostración caminando hacia el horizonte' },
        { src: '/assets/images/couple/hero.webp', alt: 'Pareja de demostración imaginando nuevos recuerdos', position: '50% 38%' },
      ],
    },
  ] satisfies CoupleChapter[],
  final: {
    image: '/assets/images/couple/future.webp',
    alt: 'Pareja de demostración caminando hacia un atardecer compartido',
    body: [
      'Quería regalarte algo que no se quedara en un solo día.',
      'Un lugar al que puedas volver cuando quieras recordar lo que hemos vivido, lo que somos y todo lo que todavía nos queda por escribir.',
      'Gracias por cada risa, por cada abrazo y por hacer que tantos momentos sencillos se hayan convertido en recuerdos que quiero guardar.',
    ],
    signature: 'Te elijo. Siempre.',
    closing: 'Y aún quedan tantos momentos por vivir...',
  },
};
