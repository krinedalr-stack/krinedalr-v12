// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R | Property Care & 24/7 Storm Repair Ireland',
  description:
    'Krinedal-R provides luxury tiling, full roof replacement, storm damage repairs, painting, landscaping and landlord property care across Ireland.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
