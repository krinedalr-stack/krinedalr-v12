// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Premium Roofing, Tiling & Property Care',
  description:
    '24/7 storm damage call-out, full roof renewals, luxury tiling, painting and property maintenance across Ireland.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
