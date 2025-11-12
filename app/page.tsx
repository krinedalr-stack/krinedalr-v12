export default function Home() {
  return (
    <main style={{fontFamily:"ui-sans-serif, system-ui", maxWidth:960, margin:"0 auto", padding:"40px 20px", lineHeight:1.5}}>
      <header style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, marginBottom:24}}>
        <h1 style={{margin:0, fontSize:"clamp(26px,5vw,40px)", letterSpacing:1}}>
          <span style={{fontWeight:800}}>KRINEDAL</span>
          <span style={{fontWeight:900, color:"#e11d48"}}>-R</span>
        </h1>
        <a href="tel:+353831762475" style={{textDecoration:"none", border:"1px solid #e5e7eb", padding:"10px 14px", borderRadius:8, fontWeight:600}}>
          ☎︎ 083 176 2475
        </a>
      </header>

      <section style={{background:"linear-gradient(135deg,#1f2937,#111827,#0b1220)", color:"white", padding:"28px", borderRadius:16, marginBottom:24}}>
        <h2 style={{marginTop:0, fontSize:"clamp(22px,3vw,30px)"}}>
          Luxury Tiling • Wet Rooms • Roofing • Storm Call-outs 24/7
        </h2>
        <p style={{opacity:.9}}>
          Based in Meath. Premium bathrooms, large-format tiles, after-storm repairs, and roof checks.
        </p>
      </section>

      <p>Website: <a href="https://www.krinedalr.ie" target="_blank">www.krinedalr.ie</a></p>
      <p>Email: <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a></p>

      <footer style={{marginTop:40, textAlign:"center", fontSize:14, opacity:.8}}>
        © {new Date().getFullYear()} Krinedal-R • Built in Ireland 🇮🇪
      </footer>
    </main>
  );
}
