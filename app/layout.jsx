// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Krinedal-R | Premium Roofing, Tiling & Property Care",
  description:
    "Krinedal-R provides 24/7 storm damage call-outs, luxury bathroom tiling, full roof renewals, painting and landlord-ready property care across Ireland.",
  openGraph: {
    title: "Krinedal-R | Premium Roofing, Tiling & Property Care",
    description:
      "Luxury bathroom tiling, full roof renewals and 24/7 storm response. Snow, rain or storm won’t stop us until your home is protected.",
    url: "https://www.krinedalr.ie",
    siteName: "Krinedal-R",
    type: "website"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
