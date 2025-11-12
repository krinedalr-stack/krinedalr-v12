// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R',
  description: 'Modern roofing & construction by Krinedal-R',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
