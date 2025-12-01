// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Premium Roofing & Property Care',
  description:
    '24/7 storm damage call-out, full roof renewals, luxury tiling and landlord-ready maintenance across Ireland. Snow, rain or storm will not stop us.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
