// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Krinedal-R | Premium Roofing & Luxury Tiling",
  description:
    "24/7 storm damage call-out, full roof renewals and luxury tiling for homes and rental properties across Ireland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
