// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R',
  description: 'Modern roofing & construction by Krinedal-R',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}>
            <img
              src="/logo.png"
              alt="Krinedal-R"
              style={{ height: '50px', marginRight: '10px' }}
            />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Krinedal-R</span>
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
