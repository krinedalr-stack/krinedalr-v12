// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Property Maintenance & Emergency Repair',
  description:
    'Storm damage repair, roofing, tiling, exterior & interior painting, power washing and landlord-ready refurbishments in Meath, Louth & Dublin. 24/7 emergency call-out.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
