// app/page.jsx
export default function Home() {
  return (
    <main>
      <section
        className="hero"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '120px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Modern roofing & construction, done right.
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Reliable installs, fast repairs, and clean finishes across Ireland.
          Domestic & commercial projects with a quality guarantee.
        </p>
        <div>
          <a
            href="#quote"
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              marginRight: '10px',
              textDecoration: 'none',
            }}
          >
            Get a quote
          </a>
          <a
            href="tel:0831762475"
            style={{
              backgroundColor: 'white',
              color: '#000',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
            }}
          >
            Call us
          </a>
        </div>
      </section>

      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>What we do</h2>
        <p>New Roofs • Repairs & Maintenance • Exterior Works</p>
      </section>
    </main>
  );
}
