import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://pedro-gozetto-judo.pgozetto.chatgpt.site'),
  title: 'Pedro Gozetto | Judô, conteúdo e propósito',
  description: 'Site oficial de Pedro Gozetto, judoca e criador de conteúdo sobre judô.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Pedro Gozetto | Judô, conteúdo e propósito',
    description: 'Judô, conteúdo e propósito.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
