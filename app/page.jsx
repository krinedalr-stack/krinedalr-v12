import StormButton from "@/components/StormButton";
import WeatherIndicator from "@/components/WeatherIndicator";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero container">
        <h1 className="hero-title">
          Luxury <span className="hero-gold">Tiling</span> & Full{" "}
          <span className="hero-red">Roof Replacement</span>
        </h1>

        <p className="hero-sub">
          Premium craftsmanship • Storm-resilient roofing • High-end marble bathrooms •  
          Available 24/7 for emergencies.  
          <br />Snow, rain or heavy storms will NOT stop us.
        </p>

        <div className="btn-row">
          <a href="tel:0831762475" className="btn-main">Call Now</a>
          <a href="https://wa.me/353831762475" className="btn-outline">WhatsApp</a>
        </div>

        <div style={{ marginTop: "20px" }}>
          <StormButton />
        </div>

        <WeatherIndicator />
      </section>

      {/* SERVICES */}
      <section className="container">
        <div className="services-grid">
          <div className="card">
            <h3>Luxury Bathroom Tiling</h3>
            <p>Marble, porcelain, ceramic — premium finishes installed with precision.</p>
          </div>
          <div className="card">
            <h3>Full Roof Replacement</h3>
            <p>Durable, storm-resistant roofing with 10–20 year lifespan.</p>
          </div>
          <div className="card">
            <h3>Storm Damage Repair</h3>
            <p>Emergency make-safe, leak fixes, fallen tiles & structural issues.</p>
          </div>
          <div className="card">
            <h3>Landlord Property Services</h3>
            <p>Painting, repairs, pre-rental refresh & end-of-tenant restorations.</p>
          </div>
        </div>
      </section>

      <Reviews />

      <footer className="footer">
        © 2025 Krinedal-R — Property Maintenance & Emergency Repairs  
        <br /> www.krinedalr.ie • 083 176 2475
      </footer>
    </main>
  );
}
