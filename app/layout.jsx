// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Krinedal-R',
  description: 'Modern roofing & construction across Ireland',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-row">
            <a className="brand" href="/">
              <img src="/logo.png" alt="Krinedal-R" className="brand-logo" />
              <span>Krinedal-R</span>
            </a>
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact" className="btn btn--sm">Get a quote</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <div className="brand mini">
                <img src="/logo.png" alt="Krinedal-R" className="brand-logo" />
                <span>Krinedal-R</span>
              </div>
              <p>Quality roofing & construction across Ireland. Fast call-out, fair pricing, guaranteed work.</p>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="list">
                <li>Meath, Ireland</li>
                <li><a href="tel:0831762475">083 176 2475</a></li>
                <li><a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h4>Quick links</h4>
              <ul className="list">
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Get a quote</a></li>
              </ul>
            </div>
          </div>
          <div className="container footer-bottom">
            <small>© {new Date().getFullYear()} Krinedal-R. All rights reserved.</small>
          </div>
        </footer>
      </body>
    </html>
  );
}
