// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Krinedal-R | Premium Property Care Ireland",
  description:
    "Krinedal-R provides premium roofing, luxury tiling, painting, landlord property care and 24/7 storm emergency call-outs across Ireland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
