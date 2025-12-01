// app/page.jsx

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="container hero-inner">
          <div>
            <p className="hero-tag">24/7 STORM EMERGENCY • MEATH • LOUTH • DUBLIN</p>
            <h1>
              Krinedal-R Property Maintenance
              <span className="hero-accent"> & Emergency Repair</span>
            </h1>
            <p className="hero-lead">
              Storm damage, leaks, tiles, roofs, paint and full landlord fresh-ups – handled fast,
              safely and professionally. One call and we take care of the rest.
            </p>

            <div className="hero-actions">
              <a href="tel:0831762475" className="btn btn-primary">
                Call 24/7: 083&nbsp;176&nbsp;2475
              </a>
              <a href="#contact" className="btn btn-outline">
                Request a quote
              </a>
            </div>

            <ul className="hero-bullets">
              <li>15+ years permanent experience as Operations Manager</li>
              <li>Landlord-friendly pricing & reliable communication</li>
              <li>Fully focused on quality finishes & fast response</li>
            </ul>
          </div>

          <div className="hero-card">
            <h2>Emergency Storm Call-Out</h2>
            <p className="hero-card-text">
              Roof blown off? Fence down? Dangerous loose tiles?
              We secure the property first, then plan the full repair.
            </p>
            <ul className="hero-card-list">
              <li>Immediate make-safe</li>
              <li>Temporary coverings & protection</li>
              <li>Follow-up repair plan</li>
            </ul>
            <p className="hero-card-note">Available 24 hours a day – 7 days a week.</p>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <h2>Services We Provide</h2>
          <p className="section-intro">
            All works are completed with a clean, professional finish – ideal for landlords,
            homeowners and agents who want a job done once and done right.
          </p>

          <div className="grid services-grid">
            <article className="card">
              <h3>Storm Damage Repair</h3>
              <p>
                Emergency make-safe, temporary protection and follow-up repairs for roofs,
                ceilings, gutters, broken glazing and fences after heavy wind and rain.
              </p>
            </article>

            <article className="card">
              <h3>Roofing & Gutters</h3>
              <p>
                Leak tracing, tile and slate replacement, flashing repair, gutter cleaning,
                downpipe repair and preventative maintenance to keep your property watertight.
              </p>
            </article>

            <article className="card">
              <h3>Tiling & Wet-rooms</h3>
              <p>
                Floor and wall tiling, bathrooms, showers, splashbacks and full refurbishments.
                Straight lay, brick bond, herringbone and premium stone / wood-effect finishes.
              </p>
            </article>

            <article className="card">
              <h3>Interior & Exterior Painting</h3>
              <p>
                Freshen up single rooms, full houses and apartment blocks. Careful preparation,
                sharp lines, durable exterior coatings and landlord-ready colour schemes.
              </p>
            </article>

            <article className="card">
              <h3>Power Washing & Exterior Care</h3>
              <p>
                Driveways, patios, decking, walls and roofs – moss removal, algae treatment and
                sealing where required to bring tired surfaces back to life.
              </p>
            </article>

            <article className="card">
              <h3>Carpentry & General Repairs</h3>
              <p>
                Doors, skirtings, laminate floors, kitchen tweaks, minor carpentry and general
                property fixes that keep rentals and family homes in top condition.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className="section section-alt" id="landlords">
        <div className="container landlords">
          <div>
            <h2>Landlord & Agent Solutions</h2>
            <p className="section-intro">
              Move-out, move-in, mid-tenancy or preparing for sale – Krinedal-R is your single
              contact for getting the property ready quickly and properly.
            </p>

            <ul className="checklist">
              <li>End-of-tenancy tidy-up, painting and minor repairs</li>
              <li>Bathroom & kitchen tiling upgrades to lift rental value</li>
              <li>Garden & exterior fresh-up for first-impression photos</li>
              <li>Emergency support when tenants report storm damage</li>
            </ul>

            <p className="note">
              <strong>Landlord pricing:</strong> we keep rates competitive and clear.  
              For a tailored price list, please contact us directly – every property and portfolio is different.
            </p>
          </div>

          <aside className="landlords-card">
            <h3>Why landlords choose Krinedal-R</h3>
            <ul>
              <li>15 years as a full-time Operations Manager</li>
              <li>Practical, problem-solving approach</li>
              <li>Professional communication with tenants and agents</li>
              <li>Reliable before/after photo reports</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* TILE STYLE PROMO */}
      <section className="section" id="tiling">
        <div className="container tile-guide">
          <div>
            <h2>Premium Tiling & Finish Options</h2>
            <p className="section-intro">
              From budget-friendly ceramic to luxury marble-look porcelain, we help you choose the
              right tile and pattern for rental durability or premium resale value.
            </p>

            <div className="grid tile-grid">
              <div className="card mini">
                <h3>Tile Styles</h3>
                <ul>
                  <li>Marble & stone-look</li>
                  <li>Porcelain & ceramic</li>
                  <li>Subway & metro tiles</li>
                  <li>Wood-effect planks</li>
                </ul>
              </div>
              <div className="card mini">
                <h3>Finishes</h3>
                <ul>
                  <li>Matte & slip-resistant</li>
                  <li>Gloss & polished</li>
                  <li>Large-format slabs</li>
                </ul>
              </div>
              <div className="card mini">
                <h3>Patterns</h3>
                <ul>
                  <li>Straight lay / stacked</li>
                  <li>Brick bond</li>
                  <li>Herringbone</li>
                  <li>Feature walls</li>
                </ul>
              </div>
            </div>

            <p className="note">
              Ask for our <strong>Krinedal-R Tile Selection Guide</strong> when planning your bathroom
              or kitchen – ideal to show tenants or buyers clear choices.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-contact" id="contact">
        <div className="container contact">
          <div>
            <h2>Need help or a same-day quote?</h2>
            <p className="section-intro">
              Call, WhatsApp or email and we’ll respond as quickly as possible.  
              Photos of the problem always help us give a faster estimate.
            </p>

            <ul className="contact-list">
              <li>
                <strong>24/7 Emergency Phone:</strong>{' '}
                <a href="tel:0831762475">083&nbsp;176&nbsp;2475</a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://www.krinedalr.ie" target="_blank" rel="noreferrer">
                  www.krinedalr.ie
                </a>
              </li>
            </ul>

            <p className="note">
              Based in Co. Meath – working regularly across Meath, Louth and Dublin.
            </p>
          </div>

          <div className="contact-box">
            <h3>Fast Call-Back Form</h3>
            <p>Send us your name, location and a brief description of the job.</p>
            <p className="contact-hint">
              <em>(Simple HTML / email form can be added here later, or linked to your preferred system.)</em>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Krinedal-R Property Maintenance & Emergency Repair.</span>
          <span>Built on Next.js • Deployed on Vercel.</span>
        </div>
      </footer>
    </main>
  );
}
