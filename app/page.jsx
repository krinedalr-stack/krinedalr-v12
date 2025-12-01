// app/page.jsx

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          
          <div>
            <p className="hero-tag">24/7 Emergency Repairs</p>

            <h1>
              Professional <span className="hero-accent">Property Maintenance</span><br />
              for Homes & Landlords
            </h1>

            <p className="hero-lead">
              Fast response storm repairs, roofing, tiling, painting, power washing,
              and property fresh-ups across Meath & Ireland.
            </p>

            <div className="hero-actions">
              <a href="tel:0831762475" className="btn btn-primary">
                Call 083 176 2475
              </a>
              <a href="mailto:kristaps.krinedalr@gmail.com" className="btn btn-outline">
                Email Us
              </a>
            </div>

            <ul className="hero-bullets">
              <li>Storm & leak emergencies</li>
              <li>Tenant move-out fresh-ups</li>
              <li>Full landlord maintenance</li>
              <li>Painting interior/exterior</li>
              <li>Tiling & flooring</li>
            </ul>
          </div>

          <div className="hero-card">
            <h2>24/7 Emergency Call-Out</h2>
            <p className="hero-card-text">Fast response across Meath & surrounding counties.</p>

            <ul className="hero-card-list">
              <li>Storm damage make-safe</li>
              <li>Leaks & burst pipes</li>
              <li>Roof issues</li>
            </ul>

            <p className="hero-card-note">
              *Landlord discount available — contact for details.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-intro">
            KRINEDAL-R provides fast, reliable and premium property maintenance for
            homeowners, landlords and estate managers.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Roofing & Storm Repair</h3>
              <p>Emergency make-safe, leaks, tile replacement, damage repair.</p>
            </div>

            <div className="card">
              <h3>Tiling & Flooring</h3>
              <p>Bathrooms, kitchens, flooring, wall tiles and repairs.</p>
            </div>

            <div className="card">
              <h3>Painting</h3>
              <p>Interior and exterior professional painting & fresh-ups.</p>
            </div>

            <div className="card">
              <h3>Power Washing</h3>
              <p>Driveways, walls, patios, roofs and more.</p>
            </div>

            <div className="card">
              <h3>Landlord Property Prep</h3>
              <p>Full tenant move-out cleaning, repairs & fresh-ups.</p>
            </div>

            <div className="card">
              <h3>Full Maintenance</h3>
              <p>General repairs, small works, and property upkeep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container">

          <h2>Contact Us</h2>
          <p className="section-intro">Need help or want a quote?</p>

          <div>
            <a href="tel:0831762475" className="btn btn-primary" style={{ marginRight: "10px" }}>
              Call 083 176 2475
            </a>

            <a href="mailto:kristaps.krinedalr@gmail.com" className="btn btn-outline">
              Email Us
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
