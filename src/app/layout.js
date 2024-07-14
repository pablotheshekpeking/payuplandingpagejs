import { Roboto } from 'next/font/google';
import { Providers } from './providers';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
