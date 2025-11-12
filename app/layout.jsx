// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Premium Roofing & Construction',
  description: 'High-end roofing, tiling, and construction services across Ireland by Krinedal-R. Reliable, fast, and insured with 24/7 after-storm support.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
