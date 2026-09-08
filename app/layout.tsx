import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QUIROZ PAREJAS · Historias que merecen quedarse',
  description: 'Una experiencia íntima para guardar una historia compartida.',
  openGraph: {
    title: 'QUIROZ PAREJAS',
    description: 'Historias que merecen quedarse.',
    images: [{ url: '/og.jpg', width: 1536, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUIROZ PAREJAS',
    description: 'Historias que merecen quedarse.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
