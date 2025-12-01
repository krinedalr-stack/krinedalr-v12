// app/layout.jsx

import './globals.css';

export const metadata = {
  title: "KRINEDAL-R | Property Maintenance & Emergency Repair",
  description:
    "Emergency repairs, storm damage, roofing, tiling, painting, power washing, property fresh-ups and full landlord services in Ireland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
