import "./globals.css";

export const metadata = {
  title: "Krinedal-R | Premium Roofing, Tiling & Property Care",
  description:
    "Luxury bathroom tiling, full roof renewals, storm damage call-outs and landlord-ready property refresh across Ireland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
