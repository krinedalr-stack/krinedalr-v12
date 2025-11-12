// app/page.jsx
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="overlay" />
        <div className="container hero-inner">
          <h1>Modern roofing & construction, done right.</h1>
          <p>
            Reliable installs, fast repairs, and clean finishes across Ireland. Domestic & commercial
            projects with a quality guarantee.
          </p>
          <div className="cta-row">
            <a href="#contact" className="btn">Get a quote</a>
            <a href="tel:0831762475" className="btn btn--light">Call us</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">What we do</h2>
          <div className="grid cards">
            {[
              { title: 'New Roofs', desc: 'Pitched & flat roofs, slate, tile, and metal systems installed to spec.' },
              { title: 'Repairs & Maintenance', desc: 'Leaks, storm damage, flashing, guttering, and emergency call-outs.' },
              { title: 'Exterior Works', desc: 'Fascia & soffit, cladding, insulation upgrades, carpentry and more.' },
              { title: 'Tiling & Interiors', desc: 'Luxury tiling, drywall, and premium interior finishes.' },
              { title: 'Power Washing', desc: 'Driveways, patios, roofs and exterior refresh with care.' },
              { title: 'Landscaping (Light)', desc: 'Clean timber edges, decorative stone, and tidy kerbs.' },
            ].map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS / GALLERY */}
      <section id="projects" className="section alt">
        <div className="container">
          <h2 className="section-title">Recent work</h2>
          <div className="grid gallery">
            {/* Use your own images later; these can be duplicates for now */}
            <img src="/hero.jpg" alt="Project 1" />
            <img src="/hero.jpg" alt="Project 2" />
            <img src="/hero.jpg" alt="Project 3" />
            <img src="/hero.jpg" alt="Project 4" />
            <img src="/hero.jpg" alt="Project 5" />
            <img src="/hero.jpg" alt="Project 6" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section">
        <div className="container">
          <h2 className="section-title">Happy clients</h2>
          <div className="grid testimonials">
            {[
              {
                quote:
                  'Brilliant response after a storm. Leak fixed same day and the place left spotless.',
                name: 'Aisling M.',
              },
              {
                quote:
                  'New roof looks unreal. Team was on time, on budget, and friendly.',
                name: 'Patrick R.',
              },
              {
                quote:
                  'Quality workmanship. Communication was clear throughout. Highly recommend.',
                name: 'Niamh K.',
              },
            ].map((t) => (
              <blockquote className="testimonial" key={t.name}>
                <p>“{t.quote}”</p>
                <footer>— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section id="contact" className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Need a fast quote?</h2>
            <p>Send a photo on WhatsApp or call us and we’ll give you a quick estimate.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:0831762475" className="btn btn--light">083 176 2475</a>
            <a href="mailto:krinedalr@gmail.com" className="btn">krinedalr@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
