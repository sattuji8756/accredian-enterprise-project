import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Accredian Enterprise | Next-Gen Expertise For Your Enterprise',
  description:
    'The complete operating system for enterprise learning. Custom programs, live mentorship, and real-time analytics to upskill your workforce at scale.',
  keywords: ['enterprise learning', 'corporate training', 'upskilling', 'accredian'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-navy">{children}</body>
    </html>
  );
}
