// app/page.jsx

export default function Home() {
  return (
    <main className="site">
      {/* Top Bar */}
      <header className="topbar">
        <div className="container">
          <div className="brand">
            <span className="k-badge">K</span>
            <span className="brand-text">Krinedal-R</span>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn btn-outline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <h1>Modern roofing & construction, done right.</h1>
          <p className="lead">
            Reliable installs, fast repairs, and clean finishes across Ireland.
            Domestic & commercial projects with a quality guarantee.
          </p>
          <div className="cta">
            <a className="btn" href="mailto:hello@krinedal.ie">Get a quote</a>
            <a className="btn btn-light" href="tel:+353000000000">Call us</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2>What we do</h2>
          <div className="grid">
            <article className="card">
              <h3>New Roofs</h3>
              <p>High-performance pitched & flat roofs using modern materials and best-practice installation.</p>
            </article>
            <article className="card">
              <h3>Repairs & Maintenance</h3>
              <p>Emergency call-outs, leak tracing, flashing, guttering, and preventative maintenance.</p>
            </article>
            <article className="card">
              <h3>Exterior Works</h3>
              <p>Fascia/soffit, cladding, roof windows, insulation upgrades, and small carpentry.</p>
            </article>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section alt">
        <div className="container">
          <h2>Why Krinedal-R</h2>
          <ul className="bullets">
            <li><strong>Transparent quotes</strong> with itemised scope.</li>
            <li><strong>Clean sites</strong> — we treat your home like ours.</li>
            <li><strong>Insured & guaranteed</strong> workmanship.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact">
            <p><strong>Email:</strong> <a href="mailto:hello@krinedal.ie">hello@krinedal.ie</a></p>
            <p><strong>Phone:</strong> <a href="tel:+353000000000">+353 00 000 0000</a></p>
            <p><strong>Service area:</strong> Nationwide</p>
          </div>
          <a className="btn" href="mailto:hello@krinedal.ie">Request a quote</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Krinedal-R</span>
        </div>
      </footer>
    </main>
  );
}
