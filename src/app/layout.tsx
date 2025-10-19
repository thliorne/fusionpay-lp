import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import GlobalBackground from '@/components/GlobalBackground';

export const metadata: Metadata = {
  title: 'Fusion Pay',
  description: 'Gateway de pagamentos premium, taxas negociáveis e saque instantâneo no Pix.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen text-white antialiased">
        <GlobalBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
