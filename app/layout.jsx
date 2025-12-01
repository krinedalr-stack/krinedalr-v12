// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Premium Roofing, Tiling & Storm Repair',
  description:
    '24/7 storm call-out, full roof replacement, luxury tiling and landlord-ready property care across Ireland.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
