import './globals.css';

export const metadata = {
  title: "Krinedal-R | Premium Roofing & Construction",
  description: "Storm repair, roofing, tiling, power washing and premium finishes in Meath & surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
