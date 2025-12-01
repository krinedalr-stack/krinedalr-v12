// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Premium Roofing, Tiling & Storm Repair',
  description:
    '24/7 storm damage call-out, full roof renewals and luxury tiling for homes and rental properties across Ireland. Snow, rain or storm will not stop us.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
