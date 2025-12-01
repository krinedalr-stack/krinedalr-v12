// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Premium Roofing, Tiling & Property Maintenance',
  description:
    'Storm repair, roofing, tiling, painting, power washing and premium finishes. 24/7 emergency call-out for landlords and homeowners in Meath & Dublin.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
