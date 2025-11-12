// app/page.jsx
import Weather from "../components/Weather";
import CallButtons from "../components/CallButtons";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="badge">⚡ 24/7 after-storm emergency repairs</span>
          <h1>Modern roofing & construction, <br/>done right.</h1>
          <p>
            Reliable installs, rapid repairs and premium finishes across Ireland.
            Domestic & commercial projects with a quality guarantee.
          </p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'10px'}}>
            <a href="#contact" className="btn btn-gold">Get a quote</a>
            <a href="tel:0831762475" className="btn btn-outline">Call 083 176 2475</a>
          </div>

          <div style={{marginTop:'18px'}} className="small">
            <span>Based in Meath • Fully insured • SEAI-friendly installs</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="split" style={{alignItems:'start'}}>
            <div>
              <h2 style={{margin:'0 0 8px 0'}}>What we do</h2>
              <div className="k-gold-line" />
              <p className="small">
                From complete new roofs to emergency call-outs, we deliver durable results
                with a clean, luxury finish. All work is photographed and guaranteed.
              </p>

              <div className="grid grid-3" style={{marginTop:18}}>
                <div className="card">
                  <h3>New Roofs</h3>
                  <p>Slates, tiles, metal & flat systems. Warm-roof upgrades and insulation.</p>
                </div>
                <div className="card">
                  <h3>Repairs & Maintenance</h3>
                  <p>Leaks, flashing, gutters, chimney work — fast, tidy, guaranteed.</p>
                </div>
                <div className="card">
                  <h3>Exterior Works</h3>
                  <p>Facias, soffits, cladding, carpentry, sheds, decking & more.</p>
                </div>
              </div>

              <div className="grid grid-3" style={{marginTop:18}}>
                <div className="card">
                  <h3>Tiling & Interiors</h3>
                  <p>Luxury tiling, drywall, painting and clean interior refurbishments.</p>
                </div>
                <div className="card">
                  <h3>Power Washing</h3>
                  <p>Roofs, drives & exteriors — commercial grade equipment.</p>
                </div>
                <div className="card">
                  <h3>Storm Response</h3>
                  <p>On-call 24/7. We make safe, stop leaks and return for full repair.</p>
                </div>
              </div>
            </div>

            {/* Weather + fast CTA */}
            <aside>
              <div className="card" style={{padding:20}}>
                <h3 style={{marginTop:0}}>Local weather check</h3>
                <p className="small">Plan around wind & rain — live forecast for Meath.</p>
                <Weather />
                <div className="k-gold-line" />
                <CallButtons />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PROMO STRIP */}
      <section className="section" style={{padding:'40px 0'}}>
        <div className="container">
          <div className="card" style={{display:'grid',gap:16,alignItems:'center',gridTemplateColumns:'1fr auto'}}>
            <div>
              <h3 style={{margin:'4px 0'}}>24/7 on-call service</h3>
              <p className="small" style={{margin:0}}>
                We dispatch within 15 minutes during red warnings, heavy rain or snow.
              </p>
            </div>
            <a href="tel:0831762475" className="btn btn-gold">Emergency Call</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container split">
          <div>
            <h2 style={{margin:'0 0 8px 0'}}>About Krinedal-R</h2>
            <div className="k-gold-line" />
            <p className="small">
              Premium craftsmanship with clear communication, photos of progress and
              a clean handover. We treat every site like it’s our own home.
            </p>
          </div>
          <div className="card">
            <ul style={{margin:0,padding:'0 0 0 16px',color:'var(--muted)'}}>
              <li>Fully insured • SafePass • VAT receipts available</li>
              <li>Warranty on all new installs</li>
              <li>Free roof health check with every repair</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container split">
          <div>
            <h2 style={{margin:'0 0 8px 0'}}>Get a fast quote</h2>
            <div className="k-gold-line" />
            <p className="small">Call, WhatsApp photos, or email site details — we’ll respond quickly.</p>
            <div style={{display:'grid',gap:10,maxWidth:520,marginTop:14}}>
              <a href="tel:0831762475" className="btn btn-gold btn-block">📞 Call 083 176 2475</a>
              <a href="https://wa.me/353831762475" className="btn btn-outline btn-block">💬 WhatsApp photos</a>
              <a href="mailto:krinedalr@gmail.com" className="btn btn-outline btn-block">✉️ krinedalr@gmail.com</a>
            </div>
          </div>
          <div className="card">
            <h3 style={{marginTop:0}}>Invoice & paperwork</h3>
            <p className="small">
              Need an official invoice for insurance or employer? No problem — we
              can issue same-day PDFs.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
          <span>© {new Date().getFullYear()} Krinedal-R • Ireland • Meath</span>
          <span className="small">Design with gold accents • Built on Next.js</span>
        </div>
      </footer>
    </main>
  );
}
