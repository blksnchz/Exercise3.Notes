import type { Metadata } from 'next';
import './globals.css';
import './viewport.css';

export const metadata: Metadata = {
  title: 'Vellum Notes',
  description: 'A private, browser-based notes collection.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
