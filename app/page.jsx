"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/** Inline SVG flag so desktop never shows "IE" */
function IrelandFlag({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="14"
      viewBox="0 0 60 42"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ireland flag"
      role="img"
    >
      <rect width="60" height="42" fill="#fff" />
      <rect width="20" height="42" x="0" fill="#169B62" />
      <rect width="20" height="42" x="40" fill="#FF883E" />
      <rect
        x="0.5"
        y="0.5"
        width="59"
        height="41"
        fill="none"
        stroke="rgba(0,0,0,0.15)"
      />
    </svg>
  );
}

/** SVG icons for floating buttons (real icons, no emojis) */
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#0b1120"
        d="M16 3C9.39 3 4 8.39 4 15c0 2.1.55 4.15 1.6 5.96L4 29l8.2-1.55A11.88 11.88 0 0 0 16 27c6.61 0 12-5.39 12-12S22.61 3 16 3z"
        opacity="0.15"
      />
      <path
        fill="#ffffff"
        d="M16 5.2c-5.39 0-9.8 4.41-9.8 9.8 0 1.92.56 3.79 1.62 5.4l-1.06 5.66 5.78-1.08A9.76 9.76 0 0 0 16 24.8c5.39 0 9.8-4.41 9.8-9.8S21.39 5.2 16 5.2zm5.55 13.43c-.24.68-1.37 1.3-1.9 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.95-.31-1.64-.61-2.87-1.24-4.75-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.24.57.82 1.97.89 2.12.07.15.12.34.02.54-.1.2-.15.34-.29.52-.14.18-.3.4-.43.54-.14.14-.28.29-.12.56.16.27.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.24 1.38.27.14.43.12.59-.07.16-.2.68-.79.87-1.06.18-.27.37-.22.61-.13.24.09 1.55.73 1.82.86.27.13.45.2.52.31.07.11.07.66-.17 1.34z"
      />
    </svg>
  );
}

function IconMessenger() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#ffffff"
        d="M16 4.5C9.37 4.5 4 9.44 4 15.54c0 3.48 1.75 6.59 4.49 8.62V27.5l3.25-1.79c1.33.38 2.76.59 4.26.59 6.63 0 12-4.94 12-10.96S22.63 4.5 16 4.5zm1.19 14.72-3.05-3.25-5.97 3.25 6.57-7.02 3.12 3.25 5.9-3.25-6.57 7.02z"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#ffffff"
        d="M20.4 6h-8.8A5.6 5.6 0 0 0 6 11.6v8.8A5.6 5.6 0 0 0 11.6 26h8.8A5.6 5.6 0 0 0 26 20.4v-8.8A5.6 5.6 0 0 0 20.4 6zm3.6 14.4a3.6 3.6 0 0 1-3.6 3.6h-8.8A3.6 3.6 0 0 1 8 20.4v-8.8A3.6 3.6 0 0 1 11.6 8h8.8A3.6 3.6 0 0 1 24 11.6v8.8z"
      />
      <path
        fill="#ffffff"
        d="M16 11.2A4.8 4.8 0 1 0 20.8 16 4.81 4.81 0 0 0 16 11.2zm0 7.6A2.8 2.8 0 1 1 18.8 16 2.81 2.81 0 0 1 16 18.8z"
      />
      <circle cx="21.2" cy="10.8" r="1.1" fill="#ffffff" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="#ffffff"
        d="M6.5 9.5h19A2.5 2.5 0 0 1 28 12v8A2.5 2.5 0 0 1 25.5 22h-19A2.5 2.5 0 0 1 4 20v-8A2.5 2.5 0 0 1 6.5 9.5zm0 2 9.5 6 9.5-6v-.2h-19v.2zm19 2.3-9.1 5.7a1 1 0 0 1-1.1 0L6.5 13.8V20a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5v-6.2z"
      />
    </svg>
  );
}

function PeopleCultureModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>KRINEDAL-R — Our People &amp; Culture Policy</h2>
        <p className="muted">Built on standards • Run by systems • Powered by people</p>
        <hr />
        <div className="k-block">
          <div className="k-title">1. Leadership philosophy</div>
          <p>Leadership is service. We remove obstacles and protect dignity.</p>
          <ul className="k-list">
            <li>Clear systems, calm decisions</li>
            <li>Respect always</li>
            <li>Standards lived daily</li>
            <li>Support growth</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">2. Respect is non-negotiable</div>
          <ul className="k-list">
            <li>Zero tolerance: bullying, intimidation, discrimination, abuse of authority</li>
            <li>Skill can be taught. Character is required.</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">3. Clear pay • clear hours • clear rules</div>
          <ul className="k-list">
            <li>Transparent rates and working hours</li>
            <li>No unpaid labour</li>
            <li>Honest communication</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">4. Training &amp; development</div>
          <p>
            We invest in training, safety certs, and workmanship. Mistakes are handled through
            improvement, not humiliation.
          </p>
        </div>
        <div className="k-block">
          <div className="k-title">5. Safety before speed</div>
          <ul className="k-list">
            <li>Risk assessments, planning, correct equipment</li>
            <li>Right to stop unsafe work — without fear</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">6. Accountability both ways</div>
          <p>
            People are accountable fairly — and leadership is accountable for planning, support and
            decisions.
          </p>
        </div>
        <div className="k-block">
          <div className="k-title">7. No-ego culture</div>
          <p>Titles don’t impress us. Work ethic, attitude and consistency do.</p>
        </div>
        <div className="k-block">
          <div className="k-title">8. Long-term thinking</div>
          <p>We build stable work, better living standards and pride in workmanship.</p>
        </div>
        <hr />
        <p>
          <strong>Built on standards. Run by systems. Powered by people.</strong>
        </p>
        <div className="close-row">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function TermsModal({ open, onClose, RED_POLICY_LINE }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Website &amp; Company Terms &amp; Conditions</h2>
        <p className="muted small" style={{ marginTop: 8 }}>
          These terms apply to general use of the KRINEDAL-R website and services (quotes, call-outs,
          bookings, communication).
        </p>
        <hr />
        <div className="k-block">
          <div className="k-title">Insurer-safe note</div>
          <p>
            Memberships and call-outs are a service agreement — <strong>not an insurance policy</strong>.
            Reports/photos can support claims where requested, but insurers decide outcomes.
          </p>
        </div>
        <div className="k-block">
          <div className="k-title">1) Quotes &amp; pricing</div>
          <ul className="k-list">
            <li>Website calculators are <strong>rough guides</strong> only and not binding quotations.</li>
            <li>Final prices are confirmed after inspection / scope agreement.</li>
            <li>Emergency call-out fees depend on distance, access and conditions.</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">2) Safety &amp; duty of care (RED policy)</div>
          <ul className="k-list">
            <li>
              <strong>Strict safety policy:</strong> KRINEDAL-R does not send employees/subcontractors
              during RED warnings.
            </li>
            <li>
              <strong>Reason:</strong> risk assessment, high hazards, duty of care to our staff and their
              families.
            </li>
            <li>
              <strong>Owner response:</strong> the company owner attends where access is possible.
            </li>
            <li>
              <strong>Safety note:</strong> {RED_POLICY_LINE}
            </li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">3) Delays outside our control</div>
          <ul className="k-list">
            <li>Delays may occur where access is blocked or unsafe.</li>
            <li>
              Examples: fallen trees, flooded roads, Garda/ambulance/emergency service road blocks,
              major incidents.
            </li>
            <li>We communicate the reason and next possible arrival window.</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">4) Materials &amp; staged payments</div>
          <ul className="k-list">
            <li>
              For most projects, customers pay materials up front (tiles, timber, membranes, fixings,
              skips, etc.).
            </li>
            <li>Labour is paid after completion unless staged payments are agreed in writing.</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">5) Cancellations (strict policy)</div>
          <ul className="k-list">
            <li>
              <strong>
                If a booked visit is cancelled after planning has been completed and a technician has
                already been dispatched (left base and is travelling), the full call-out/booking fee
                applies.
              </strong>
            </li>
            <li>This covers time, travel, fuel, scheduling, and resources already committed.</li>
            <li>
              Cancellations due to severe weather or safety risk, as determined by KRINEDAL-R, may be
              rescheduled without penalty.
            </li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">6) Photos, reports &amp; communication</div>
          <ul className="k-list">
            <li>Photos/reports are provided where agreed or where included in your membership level.</li>
            <li>We may use photos internally for quality and records (not public marketing without permission).</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">7) Privacy</div>
          <ul className="k-list">
            <li>Form submissions are used only to respond to your request and manage service delivery.</li>
            <li>We do not sell your data.</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">8) General limitation</div>
          <ul className="k-list">
            <li>We are not responsible for hidden defects or pre-existing structural issues outside the visible scope.</li>
            <li>Any liability is limited to the work we carried out, subject to Irish law.</li>
          </ul>
        </div>
        <div className="close-row">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function CommunitySupportModal({ open, onClose, RED_POLICY_LINE }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>KRINEDAL-R — Community Support Policy</h2>
        <p className="muted">Why we offer emergency call-out discounts during storms</p>
        <hr />
        <div className="k-block">
          <div className="k-title">Discounts offered</div>
          <ul className="k-list">
            <li>
              <strong>50% OFF</strong> emergency call-out fee for <strong>elderly customers</strong>
            </li>
            <li>
              <strong>35% OFF</strong> emergency call-out fee for <strong>single parents</strong>
            </li>
            <li>
              <strong>35% OFF</strong> emergency call-out fee for{" "}
              <strong>families caring for children with severe disabilities</strong>
            </li>
          </ul>
          <p className="muted smallest" style={{ marginTop: 10 }}>
            <strong>Important:</strong> Discounts apply to the <strong>call-out fee only</strong> and are
            intended for genuine emergency make-safe visits. Materials, skips, scaffolding, specialist
            hire and additional works are charged separately.
          </p>
        </div>
        <div className="k-block">
          <div className="k-title">Why we do this</div>
          <p>
            Many elderly people built this country through decades of hard work and contribution. When
            severe weather hits, they are often the most vulnerable. We believe they deserve respect,
            safety, and fast help when their home is at risk.
          </p>
          <p>
            Single parents often carry full responsibility for their household alone. During emergencies
            there is no second person to share the pressure or cost. We reduce the call-out fee to help
            keep the home safe during difficult moments.
          </p>
          <p>
            Families caring for children with severe disabilities often face constant pressure, emotional
            strain, and unexpected emergencies. During severe weather or urgent home safety issues, these
            families have little flexibility and fewer options to respond quickly. Parents cannot leave
            children unattended in dangerous conditions while also trying to make the home safe. We
            believe these families deserve understanding, dignity, and practical support when their home
            environment becomes unsafe.
          </p>
        </div>
        <div className="k-block">
          <div className="k-title">Safety note (strict)</div>
          <p className="muted smallest" style={{ marginTop: 6 }}>
            {RED_POLICY_LINE}
          </p>
        </div>
        <div className="close-row">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function HsWalkthroughModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Commercial H&amp;S Walk-Through (Site Risk Notes)</h2>
        <p className="muted" style={{ marginTop: 8 }}>
          A structured visual site walk-through designed to identify practical hazards, reduce liability
          exposure, and create clean records for internal reviews and audits.
        </p>
        <hr />
        <div className="k-block">
          <div className="k-title">What you get</div>
          <ul className="k-list">
            <li>Site walk-through with hazard observations (non-invasive, visual only)</li>
            <li>
              Risk grading per item: <strong>Immediate</strong> / <strong>Monitor</strong> /{" "}
              <strong>Planned</strong>
            </li>
            <li>Photo evidence where safe and appropriate</li>
            <li>Simple action notes (what to fix + why it matters)</li>
            <li>Defect / hazard log (recorded and dated)</li>
            <li>Executive summary suitable for directors / facilities / auditors</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">Important note (scope)</div>
          <ul className="k-list">
            <li>This is <strong>not</strong> a statutory certification or engineering survey.</li>
            <li>
              We provide <strong>evidence + practical risk notes</strong> to support site management
              decisions.
            </li>
            <li>Any remedial works are quoted separately if requested.</li>
          </ul>
        </div>
        <div className="k-block">
          <div className="k-title">Pricing guide</div>
          <p style={{ margin: 0 }}>
            <strong>€1,200 – €3,000 per site</strong> (size, complexity, access, reporting level).
          </p>
        </div>
        <div className="close-row">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [pcOpen, setPcOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const [commercialMoreOpen, setCommercialMoreOpen] = useState(false);
  const [documentationMoreOpen, setDocumentationMoreOpen] = useState(false);
  const [vacantMoreOpen, setVacantMoreOpen] = useState(false);
  const [hsOpen, setHsOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);

  useEffect(() => {
    function onDocClick(e) {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(e.target)) setMoreOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

  const SERVICES = [
    "Emergency storm make-safe within hours*",
    "Full roof change & leak tracing",
    "Luxury bathroom & kitchen tiling",
    "Flooring installation (laminate, vinyl & engineered wood)",
    "Garage flooring systems (rubber / PVC tiles / resin-coated floors)",
    "Marble-look & decorative floor coatings",
    "Outdoor concrete stairs & entrance upgrades (integrated lighting)",
    "Decorative wall panel installations (PVC and similar systems), with optional integrated lighting where specified.",
    "Landlord-ready refresh between tenants",
  ];

  const [roofArea, setRoofArea] = useState("");
  const roofRate = 70;
  const [tileArea, setTileArea] = useState("");
  const tileRate = 75;
  const [floorArea, setFloorArea] = useState("");
  const floorRate = 40;
  const roofTotal = roofArea ? (Number(roofArea) * roofRate).toFixed(0) : "";
  const tileTotal = tileArea ? (Number(tileArea) * tileRate).toFixed(0) : "";
  const floorTotal = floorArea ? (Number(floorArea) * floorRate).toFixed(0) : "";

  const [weatherStatus, setWeatherStatus] = useState("green");
  const [weatherWarnings, setWeatherWarnings] = useState([]);
  const [affectedCounties, setAffectedCounties] = useState([]);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [weatherError, setWeatherError] = useState("");
  const [fetchedAt, setFetchedAt] = useState("");
  const [refreshingWeather, setRefreshingWeather] = useState(false);

  const weatherUI = useMemo(() => {
    const map = {
      green: {
        label: "GREEN – normal conditions",
        textClass: "green-text",
        chipClass: "weather-chip weather-chip-green",
      },
      yellow: {
        label: "YELLOW – weather warning issued",
        textClass: "yellow-text",
        chipClass: "weather-chip weather-chip-yellow",
      },
      orange: {
        label: "ORANGE – severe weather",
        textClass: "orange-text",
        chipClass: "weather-chip weather-chip-orange",
      },
      red: {
        label: "RED – extreme / emergency",
        textClass: "red-text",
        chipClass: "weather-chip weather-chip-red",
      },
    };
    return map[weatherStatus] || map.green;
  }, [weatherStatus]);

  async function loadWeather({ manual = false } = {}) {
    try {
      if (manual) setRefreshingWeather(true);
      setWeatherError("");
      const res = await fetch(`/api/weather-status?_=${Date.now()}`, { cache: "no-store" });
      const json = await res.json().catch(() => ({}));
      if (!json?.ok) {
        setWeatherError(json?.error || "Weather feed unavailable — keeping last known status.");
        setWeatherLoaded(true);
        return;
      }
      setWeatherStatus(json?.status || "green");
      setWeatherWarnings(Array.isArray(json?.warnings) ? json.warnings : []);
      setAffectedCounties(Array.isArray(json?.affectedCounties) ? json.affectedCounties : []);
      setFetchedAt(json?.fetchedAt || "");
      setWeatherLoaded(true);
    } catch {
      setWeatherError("Weather feed unavailable — keeping last known status.");
      setWeatherLoaded(true);
    } finally {
      if (manual) setRefreshingWeather(false);
    }
  }

  useEffect(() => {
    loadWeather();
    const id = setInterval(loadWeather, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [filesLabel, setFilesLabel] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMsg("");
    try {
      const formEl = e.currentTarget;
      const fd = new FormData(formEl);
      if (fd.get("website")) {
        setSubmitting(false);
        return;
      }
      fd.set("FormType", "Estimate");
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Failed");
      setSubmitMsg("Sent ✅ We’ll get back to you shortly.");
      setFilesLabel("");
      formEl.reset();
    } catch {
      setSubmitMsg("Could not send right now. Please call 083 176 2475 or WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  const [membershipSubmitting, setMembershipSubmitting] = useState(false);
  const [membershipMsg, setMembershipMsg] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Silver");
  const [agreeMembership, setAgreeMembership] = useState(false);

  const PLAN_PRICING = {
    Bronze: { quarterly: 87.25, yearly: 349 },
    Silver: { quarterly: 137.25, yearly: 549 },
    Gold: { quarterly: 199.75, yearly: 799 },
    Diamond: { quarterly: 299.75, yearly: 1199 },
  };

  const planPriceLabel = (plan) => {
    const p = PLAN_PRICING[plan];
    if (!p) return "";
    return `€${p.quarterly.toFixed(2)} / €${p.yearly}`;
  };

  function scrollToId(id) {
    setMoreOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  function scrollToMembershipApplication(plan = "Silver") {
    setSelectedPlan(plan);
    setMembershipMsg("");
    setMembershipOpen(true);
    setMoreOpen(false);
    setTimeout(() => {
      const el = document.getElementById("membership-application");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function openEstimateSection() {
    setEstimateOpen(true);
    setTimeout(() => {
      const el = document.getElementById("estimate");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function openTermsModal() {
    setTermsOpen(true);
    setMoreOpen(false);
  }

  function openCommunityModal() {
    setCommunityOpen(true);
    setMoreOpen(false);
  }

  async function onMembershipSubmit(e) {
    e.preventDefault();
    setMembershipSubmitting(true);
    setMembershipMsg("");
    try {
      if (!agreeMembership) {
        setMembershipMsg("Please tick the agreement box to submit.");
        return;
      }
      const formEl = e.currentTarget;
      const fd = new FormData(formEl);
      if (fd.get("website")) {
        setMembershipSubmitting(false);
        return;
      }
      fd.set("FormType", "Membership");
      fd.set("Plan", selectedPlan);
      fd.set("AgreedToTerms", "YES");
      fd.set("PlanPrice", planPriceLabel(selectedPlan));
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Failed");
      setMembershipMsg("Application sent ✅ We’ll confirm coverage & availability shortly.");
      setAgreeMembership(false);
      formEl.reset();
    } catch {
      setMembershipMsg("Could not send right now. Please call 083 176 2475 or WhatsApp.");
    } finally {
      setMembershipSubmitting(false);
    }
  }

  const RED_POLICY_LINE =
    "During RED warnings: we operate, but KRINEDAL-R does not deploy employees/subcontractors. The company owner attends where access is possible. Delays only when access is blocked (fallen trees, flooding, Garda/ambulance/emergency road closures, severe hazards).";

  const WIND_MAP_URL =
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=0.00,0.00,309";

  const operationalLine = useMemo(() => {
    if (weatherStatus === "green") return "Normal operations.";
    if (weatherStatus === "yellow") return "Emergency call-outs active • Preventative works paused if unsafe.";
    if (weatherStatus === "orange") return "Emergency make-safe only • Clear safety rules apply.";
    if (weatherStatus === "red") return "Director attendance only where safe • Employees NOT deployed.";
    return "Normal operations.";
  }, [weatherStatus]);

  const MEMBER_ALL_WARNING_LINE =
    "Free weather-warning emergency make-safe call-out (all warning levels — where safe).";

  const calloutBasePrice = useMemo(() => {
    const map = {
      green: 200,
      yellow: 250,
      orange: 350,
      red: 450,
    };
    return map[weatherStatus] || 200;
  }, [weatherStatus]);

  const [stormSupport, setStormSupport] = useState("none");
  const [stormDocumentation, setStormDocumentation] = useState(false);

  const supportRate = useMemo(() => {
    if (stormSupport === "elderly") return 0.5;
    if (stormSupport === "single-parent") return 0.35;
    if (stormSupport === "disability-family") return 0.35;
    return 0;
  }, [stormSupport]);
const supportAmount = useMemo(() => {
    return Math.round(calloutBasePrice * supportRate);
  }, [calloutBasePrice, supportRate]);

  const documentationFee = stormDocumentation ? 95 : 0;

  const finalStormPrice = useMemo(() => {
    return Math.max(calloutBasePrice - supportAmount, 0) + documentationFee;
  }, [calloutBasePrice, supportAmount, documentationFee]);

  return (
    <main>
      <div className="shamrock-global" aria-hidden="true">
        <span className="shamrock shamrock-1">☘️</span>
        <span className="shamrock shamrock-2">☘️</span>
        <span className="shamrock shamrock-3">☘️</span>
        <span className="shamrock shamrock-4">☘️</span>
      </div>

      {/* TOP BAR */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="topbar-brand">
              KRINEDAL-<span className="hero-r">R</span>
            </div>
          </div>

          <div className="topbar-actions">
            <a href="tel:0831762475" className="btn btn-primary">
              Call
            </a>
            <a
              href="https://wa.me/353831762475"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              WhatsApp
            </a>
            <button className="btn btn-outline" onClick={() => setPcOpen(true)}>
              People &amp; Culture
            </button>
            <button className="btn btn-outline" onClick={openCommunityModal}>
              Community Support
            </button>
            <button className="btn btn-outline" onClick={() => scrollToId("membership")}>
              Memberships
            </button>
            <button className="btn btn-outline" onClick={() => scrollToId("live-weather")}>
              Live Weather Status
            </button>
            <button className="btn btn-outline" onClick={openTermsModal}>
              Website Terms
            </button>
          </div>

          <div className="topbar-actions-mobile">
            <a href="tel:0831762475" className="btn btn-primary">
              Call
            </a>
            <a
              href="https://wa.me/353831762475"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              WhatsApp
            </a>

            <div className="more-wrap" ref={moreRef}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
              >
                ☰ More
              </button>

              {moreOpen && (
                <div className="more-menu">
                  <button
                    className="more-item"
                    onClick={() => {
                      setPcOpen(true);
                      setMoreOpen(false);
                    }}
                  >
                    People &amp; Culture
                  </button>
                  <button className="more-item" onClick={openCommunityModal}>
                    Community Support
                  </button>
                  <button className="more-item" onClick={() => scrollToId("membership")}>
                    Memberships
                  </button>
                  <button className="more-item" onClick={() => scrollToId("commercial-membership")}>
                    Commercial membership
                  </button>
                  <button className="more-item" onClick={() => scrollToId("hs-walkthrough")}>
                    H&amp;S walk-through
                  </button>
                  <button className="more-item" onClick={() => scrollToId("landlord-services")}>
                    Landlord services
                  </button>
                  <button className="more-item" onClick={() => scrollToId("vacant-property")}>
                    Vacant property care
                  </button>
                  <button className="more-item" onClick={() => scrollToId("documentation")}>
                    Documentation &amp; reporting
                  </button>
                  <button className="more-item" onClick={() => scrollToId("live-weather")}>
                    Live Weather Status
                  </button>
                  <a
                    className="more-item"
                    href="https://www.instagram.com/krinedalr/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMoreOpen(false)}
                  >
                    Instagram
                  </a>
                  <button className="more-item" onClick={openTermsModal}>
                    Website Terms
                  </button>
                  <button
                    className="more-item"
                    onClick={() => {
                      setMoreOpen(false);
                      openEstimateSection();
                    }}
                  >
                    Contact
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MODALS */}
      <PeopleCultureModal open={pcOpen} onClose={() => setPcOpen(false)} />
      <TermsModal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        RED_POLICY_LINE={RED_POLICY_LINE}
      />
      <CommunitySupportModal
        open={communityOpen}
        onClose={() => setCommunityOpen(false)}
        RED_POLICY_LINE={RED_POLICY_LINE}
      />
      <HsWalkthroughModal open={hsOpen} onClose={() => setHsOpen(false)} />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-min">
            <h1 className="hero-title">
              KRINEDAL-<span className="hero-r">R</span>
            </h1>

            <p className="hero-tag">
              <IrelandFlag className="flag" /> PREMIUM PROPERTY CARE ACROSS IRELAND <span>☘️</span>
            </p>

            <p className="hero-subline">Built on standards • Run by systems • Powered by people</p>

            <p className="hero-lead">
              24/7 storm damage call-outs, roof renewals and luxury tiling across Ireland.
            </p>

            <div className="hero-actions">
              <a href="tel:0831762475" className="btn btn-primary">
                Call 24/7 Storm Line
              </a>
              <a
                href="https://wa.me/353831762475"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                WhatsApp Now
              </a>
            </div>

            <div style={{ marginTop: 14 }}>
              <div className="hero-weather-row">
                <span className={weatherUI.chipClass}>
                  {weatherLoaded ? weatherUI.label : "Loading weather…"}
                </span>
                <button
                  type="button"
                  className="btn btn-weather"
                  onClick={() => loadWeather({ manual: true })}
                  disabled={refreshingWeather}
                  aria-label="Refresh weather"
                  title="Refresh weather"
                >
                  {refreshingWeather ? "Refreshing…" : "↻ Refresh"}
                </button>
              </div>

              <p className="muted small" style={{ marginTop: 8, fontWeight: 800 }}>
                {operationalLine}
              </p>

              {weatherStatus !== "green" && affectedCounties.length > 0 && (
                <p className="muted smallest" style={{ marginTop: 6 }}>
                  Affected: <strong>{affectedCounties.join(", ")}</strong>
                </p>
              )}

              {weatherError && (
                <p className="muted smallest" style={{ marginTop: 6 }}>
                  ⚠️ {weatherError}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BELOW FOLD: SERVICES */}
      <section className="section section-alt">
        <div className="container grid-2">
          <div className="card">
            <h2>Fast, respectful property care</h2>
            <p className="muted" style={{ marginTop: 8 }}>
              From emergency leaks to premium finishes — we keep your home safe, dry and beautifully
              finished.
            </p>
            <ul className="list" style={{ marginTop: 12 }}>
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="muted smallest" style={{ marginTop: 10 }}>
              *Response time depends on location &amp; weather conditions.
            </p>
            <p className="muted smallest" style={{ marginTop: 10, fontWeight: 900 }}>
              VAT Registered • Commercial-ready • Suitable for hotels, schools, shopping centres and
              multi-room refurb projects.
            </p>
          </div>

          <div className="card">
            <h2>We don’t compete on price.</h2>
            <p className="muted" style={{ marginTop: 8 }}>
              We compete on standards, systems, and accountability.
            </p>
            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn btn-outline" onClick={() => setPcOpen(true)}>
                People &amp; Culture
              </button>
              <button className="btn btn-outline" onClick={openCommunityModal}>
                Community Support
              </button>
              <button className="btn btn-outline" onClick={openTermsModal}>
                Website Terms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section id="membership" className="section section-memberships">
        <div className="container">
          <div className="plans-head">
            <div>
              <div className="plans-title">KRINEDAL-R — Property Care Memberships</div>
              <p className="plans-sub" style={{ maxWidth: 920 }}>
                Ideal for homeowners, landlords and commercial clients who want predictable property care
                without chasing contractors.
              </p>
              <p className="plans-sub smallest" style={{ marginTop: 8 }}>
                Memberships are preventative maintenance plans — <strong>not insurance</strong>, and not
                unlimited repairs. Materials (tiles/silicone/etc.), scaffolding/MEWP, skips and
                specialist hire are charged separately where required.
              </p>
            </div>
            <div className="status-pill">
              <span className="status-label">Current status</span>
              <span className={`status-badge ${weatherStatus}`}>{weatherStatus.toUpperCase()}</span>
            </div>
          </div>

          <div className="plans-grid">
            <div className="plan">
              <div className="plan-kicker">
                <span className="plan-icon">🥉</span> BRONZE
              </div>
              <div className="plan-name">Bronze — essential property check</div>
              <div className="plan-price">
                <div>
                  €{PLAN_PRICING.Bronze.quarterly.toFixed(2)}{" "}
                  <span className="muted smallest">per quarter (VAT included)</span>
                </div>
                <div>
                  €{PLAN_PRICING.Bronze.yearly}{" "}
                  <span className="muted smallest">per year (VAT included)</span>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Annual roof inspection</strong> (visual: tiles, ridge caps, valleys, flashing)
                </li>
                <li>
                  <strong>Annual gutter inspection</strong> (blockage/overflow risk, damage)
                </li>
                <li>
                  <strong>External silicone inspection</strong> (external seals — inspection only)
                </li>
                <li>
                  <strong>Written inspection notes</strong> provided if issues are found
                </li>
                <li>
                  <strong>{MEMBER_ALL_WARNING_LINE}</strong>
                </li>
                <li>
                  <strong>Priority booking</strong> over non-members
                </li>
              </ul>
              <div className="plan-foot">
                Best for homeowners who want early detection before problems become expensive.
              </div>
              <div className="plan-actions">
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Bronze")}
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="plan plan-most-popular">
              <div className="badge badge-popular">⭐ Most popular</div>
              <div className="plan-kicker">
                <span className="plan-icon">🥈</span> SILVER
              </div>
              <div className="plan-name">Silver — preventative maintenance</div>
              <div className="plan-price">
                <div>
                  €{PLAN_PRICING.Silver.quarterly.toFixed(2)}{" "}
                  <span className="muted smallest">per quarter (VAT included)</span>
                </div>
                <div>
                  €{PLAN_PRICING.Silver.yearly}{" "}
                  <span className="muted smallest">per year (VAT included)</span>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Annual roof inspection</strong> (visual: tiles, ridge caps, valleys, flashing)
                </li>
                <li>
                  <strong>Annual gutter inspection</strong> (blockage/overflow risk, damage)
                </li>
                <li>
                  <strong>External silicone inspection</strong> (external seals — inspection only)
                </li>
                <li>
                  <strong>Written inspection notes</strong> provided if issues are found
                </li>
                <li>
                  <strong>{MEMBER_ALL_WARNING_LINE}</strong>
                </li>
                <li>
                  <strong>Priority booking</strong> over non-members
                </li>
                <li>
                  <strong>Gutter cleaning</strong> (once per year — leaves/debris removal)
                </li>
                <li>
                  <strong>Minor roof repairs</strong> (slipped/broken tiles — materials charged if
                  required)
                </li>
                <li>
                  <strong>Silicone resealing</strong> (limited areas — bathroom OR kitchen, one area per
                  year)
                </li>
              </ul>
              <div className="plan-foot">
                Best for landlords and homeowners who want maintenance, not just inspections.
              </div>
              <div className="plan-actions">
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Silver")}
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="plan plan-best-value">
              <div className="badge badge-value">🏆 Best value / priority</div>
              <div className="plan-kicker">
                <span className="plan-icon">🥇</span> GOLD
              </div>
              <div className="plan-name">Gold — active property care</div>
              <div className="plan-price">
                <div>
                  €{PLAN_PRICING.Gold.quarterly.toFixed(2)}{" "}
                  <span className="muted smallest">per quarter (VAT included)</span>
                </div>
                <div>
                  €{PLAN_PRICING.Gold.yearly}{" "}
                  <span className="muted smallest">per year (VAT included)</span>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Annual roof inspection</strong> (visual: tiles, ridge caps, valleys, flashing)
                </li>
                <li>
                  <strong>Annual gutter inspection</strong> (blockage/overflow risk, damage)
                </li>
                <li>
                  <strong>External silicone inspection</strong> (external seals — inspection only)
                </li>
                <li>
                  <strong>Written inspection notes</strong> provided if issues are found
                </li>
                <li>
                  <strong>{MEMBER_ALL_WARNING_LINE}</strong>
                </li>
                <li>
                  <strong>Priority booking</strong> over non-members
                </li>
                <li>
                  <strong>Gutter cleaning</strong> (once per year — leaves/debris removal)
                </li>
                <li>
                  <strong>Minor roof repairs</strong> (slipped/broken tiles — materials charged if
                  required)
                </li>
                <li>
                  <strong>Silicone resealing</strong> (limited areas — bathroom OR kitchen, one area per
                  year)
                </li>
                <li>
                  <strong>Roof maintenance works</strong> (tile resets, ridge/verge checks, minor flashing
                  adjustments)
                </li>
                <li>
                  <strong>Full bathroom OR kitchen silicone reseal</strong> (one full area per year)
                </li>
                <li>
                  <strong>Discounted labour</strong> on additional works
                </li>
                <li>
                  <strong>Preferred member pricing</strong> on one small landscaping project per year{" "}
                  <span className="muted smallest">
                    (e.g. garden tidy-up, minor paving or edging works — scope agreed in advance).
                  </span>
                </li>
              </ul>
              <div className="plan-foot">
                Best for high-value homes and clients who want problems fixed, not just found.
              </div>
              <div className="plan-actions">
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Gold")}
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="plan plan-limited">
              <div className="badge badge-limited">💎 Limited</div>
              <div className="plan-kicker">
                <span className="plan-icon">💎</span> DIAMOND
              </div>
              <div className="plan-name">Diamond — full professional coverage</div>
              <div className="plan-price">
                <div>
                  €{PLAN_PRICING.Diamond.quarterly.toFixed(2)}{" "}
                  <span className="muted smallest">per quarter (VAT included)</span>
                </div>
                <div>
                  €{PLAN_PRICING.Diamond.yearly}{" "}
                  <span className="muted smallest">per year (VAT included)</span>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Annual roof inspection</strong> (visual: tiles, ridge caps, valleys, flashing)
                </li>
                <li>
                  <strong>Annual gutter inspection</strong> (blockage/overflow risk, damage)
                </li>
                <li>
                  <strong>External silicone inspection</strong> (external seals — inspection only)
                </li>
                <li>
                  <strong>Written inspection notes</strong> provided if issues are found
                </li>
                <li>
                  <strong>{MEMBER_ALL_WARNING_LINE}</strong>
                </li>
                <li>
                  <strong>Priority booking</strong> over non-members
                </li>
                <li>
                  <strong>Gutter cleaning</strong> (once per year — leaves/debris removal)
                </li>
                <li>
                  <strong>Minor roof repairs</strong> (slipped/broken tiles — materials charged if
                  required)
                </li>
                <li>
                  <strong>Silicone resealing</strong> (limited areas — bathroom OR kitchen, one area per
                  year)
                </li>
                <li>
                  <strong>Comprehensive roof maintenance</strong> (tile replacement, ridge/verge
                  attention, flashing repairs — materials charged if required)
                </li>
                <li>
                  <strong>Full bathroom AND kitchen silicone reseal</strong> (once per year)
                </li>
                <li>
                  <strong>Annual written condition report</strong> stored and referenced for future works
                </li>
                <li>
                  <strong>Direct priority contact channel</strong> + best available pricing on additional
                  works
                </li>
                <li>
                  <strong>Preferred member pricing</strong> on one small landscaping project per year{" "}
                  <span className="muted smallest">
                    (e.g. garden tidy-up, minor paving or edging works — scope agreed in advance).
                  </span>
                </li>
              </ul>
              <div className="plan-foot">
                Best for clients who want full oversight, priority service, and long-term protection.
                <br />
                <span className="muted smallest" style={{ display: "block", marginTop: 8 }}>
                  {RED_POLICY_LINE}
                </span>
              </div>
              <div className="plan-actions">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => scrollToMembershipApplication("Diamond")}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          <p>KRINEDAL-R is VAT Registered. All pricing shown includes VAT.</p>

          <div className="card membership-rules-card" style={{ marginTop: 18 }}>
            <h3 style={{ margin: 0 }}>Membership rules (clear &amp; fair)</h3>
            <ul className="list" style={{ marginTop: 10 }}>
              <li>Memberships are preventative maintenance plans (property-specific).</li>
              <li>Not insurance contracts and not unlimited repairs.</li>
              <li>Safety always overrides speed; severe weather limits apply.</li>
              <li>Where materials are required, they are charged separately unless stated as included.</li>
            </ul>
          </div>
{/* MEMBERSHIP APPLICATION */}
          {membershipOpen && (
            <div id="membership-application" className="card" style={{ marginTop: 24 }}>
              <h2>Membership Application</h2>
              <p className="muted">
                Selected plan: <strong>{selectedPlan}</strong> ({planPriceLabel(selectedPlan)})
              </p>

              <form onSubmit={onMembershipSubmit} className="form-grid" style={{ marginTop: 12 }}>
                <input name="website" style={{ display: "none" }} />

                <div className="form-row">
                  <input name="name" required placeholder="Full name" />
                  <input name="phone" required placeholder="Phone number" />
                </div>

                <div className="form-row">
                  <input name="email" type="email" required placeholder="Email address" />
                  <input name="postcode" required placeholder="Eircode" />
                </div>

                <textarea
                  name="address"
                  required
                  placeholder="Full property address"
                  rows={3}
                />

                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={agreeMembership}
                    onChange={(e) => setAgreeMembership(e.target.checked)}
                  />
                  <span>
                    I understand this is a service agreement (not insurance) and agree to KRINEDAL-R
                    terms and conditions.
                  </span>
                </label>

                <button type="submit" className="btn btn-primary" disabled={membershipSubmitting}>
                  {membershipSubmitting ? "Sending…" : "Submit Application"}
                </button>

                {membershipMsg && <p className="muted">{membershipMsg}</p>}
              </form>
            </div>
          )}
        </div>
      </section>

      {/* STORM CALL-OUT CALCULATOR */}
      <section className="section section-alt">
        <div className="container">
          <div className="card">
            <h2>Storm Emergency Call-Out</h2>

            <p className="muted">
              Pricing adjusts automatically based on live weather status. You only select support options.
            </p>

            <div className="storm-box" style={{ marginTop: 16 }}>
              <div className="storm-row">
                <span>Current weather level:</span>
                <strong className={weatherUI.textClass}>{weatherStatus.toUpperCase()}</strong>
              </div>

              <div className="storm-row">
                <span>Base call-out fee:</span>
                <strong>€{calloutBasePrice}</strong>
              </div>

              <hr />

              <div className="storm-section">
                <div className="storm-title">Community Support (optional)</div>

                <select
                  value={stormSupport}
                  onChange={(e) => setStormSupport(e.target.value)}
                >
                  <option value="none">No support</option>
                  <option value="elderly">Elderly (50% OFF)</option>
                  <option value="single-parent">Single parent (35% OFF)</option>
                  <option value="disability-family">
                    Disability family (35% OFF)
                  </option>
                </select>

                {supportAmount > 0 && (
                  <div className="storm-row green-text">
                    <span>Discount:</span>
                    <strong>-€{supportAmount}</strong>
                  </div>
                )}
              </div>

              <div className="storm-section">
                <div className="storm-title">Extras</div>

                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={stormDocumentation}
                    onChange={(e) => setStormDocumentation(e.target.checked)}
                  />
                  <span>Documentation report (+€95)</span>
                </label>
              </div>

              <hr />

              <div className="storm-total">
                <span>Estimated total:</span>
                <strong>€{finalStormPrice}</strong>
              </div>

              <div style={{ marginTop: 16 }}>
                <button
                  className="btn btn-primary"
                  onClick={openEstimateSection}
                >
                  Request Call-Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section id="commercial-membership" className="section">
        <div className="container">
          <div className="card">
            <h2>Commercial Property Care</h2>
            <p className="muted">
              Structured inspections, risk tracking and documentation suitable for audits and internal reviews.
            </p>

            {!commercialMoreOpen ? (
              <button
                className="btn btn-outline"
                onClick={() => setCommercialMoreOpen(true)}
                style={{ marginTop: 12 }}
              >
                Read more
              </button>
            ) : (
              <>
                <ul className="list" style={{ marginTop: 12 }}>
                  <li>Roof & flat roof inspections</li>
                  <li>Gutters, drainage and water flow checks</li>
                  <li>Access safety and trip hazards</li>
                  <li>External seals, joints and facade condition</li>
                  <li>Photo documentation & records</li>
                  <li>Clear risk notes and action planning</li>
                </ul>

                <button
                  className="btn btn-outline"
                  onClick={() => setCommercialMoreOpen(false)}
                  style={{ marginTop: 12 }}
                >
                  Show less
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* H&S */}
      <section id="hs-walkthrough" className="section section-alt">
        <div className="container">
          <div className="card">
            <h2>H&amp;S Walk-Through</h2>
            <p className="muted">
              Identify risks early and create structured records for safety and compliance.
            </p>

            <button className="btn btn-outline" onClick={() => setHsOpen(true)}>
              View details
            </button>
          </div>
        </div>
      </section>

      {/* VACANT PROPERTY */}
      <section id="vacant-property" className="section">
        <div className="container">
          <div className="card">
            <h2>Vacant Property Care</h2>

            {!vacantMoreOpen ? (
              <button
                className="btn btn-outline"
                onClick={() => setVacantMoreOpen(true)}
              >
                Read more
              </button>
            ) : (
              <>
                <ul className="list" style={{ marginTop: 12 }}>
                  <li>Regular inspection visits</li>
                  <li>Leak detection and prevention</li>
                  <li>Ventilation checks</li>
                  <li>Security checks</li>
                  <li>Photo reporting</li>
                </ul>

                <button
                  className="btn btn-outline"
                  onClick={() => setVacantMoreOpen(false)}
                  style={{ marginTop: 12 }}
                >
                  Show less
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section id="documentation" className="section section-alt">
        <div className="container">
          <div className="card">
            <h2>Documentation &amp; Reporting</h2>

            {!documentationMoreOpen ? (
              <button
                className="btn btn-outline"
                onClick={() => setDocumentationMoreOpen(true)}
              >
                Read more
              </button>
            ) : (
              <>
                <ul className="list" style={{ marginTop: 12 }}>
                  <li>Before / after photos</li>
                  <li>Inspection notes</li>
                  <li>Risk logs</li>
                  <li>Maintenance tracking</li>
                </ul>

                <button
                  className="btn btn-outline"
                  onClick={() => setDocumentationMoreOpen(false)}
                  style={{ marginTop: 12 }}
                >
                  Show less
                </button>
              </>
            )}
          </div>
        </div>
      </section>
{/* LIVE WEATHER */}
      <section id="live-weather" className="section">
        <div className="container">
          <div className="card">
            <h2>Live Weather Status — Ireland</h2>

            <div style={{ marginTop: 12 }}>
              <span className={weatherUI.chipClass}>
                {weatherLoaded ? weatherUI.label : "Loading weather…"}
              </span>
            </div>

            <p className="muted" style={{ marginTop: 10 }}>
              Live national warning level based on Met Éireann data.
            </p>

            {affectedCounties.length > 0 && (
              <p className="muted smallest" style={{ marginTop: 6 }}>
                Affected counties: <strong>{affectedCounties.join(", ")}</strong>
              </p>
            )}

            {fetchedAt && (
              <p className="muted smallest" style={{ marginTop: 6 }}>
                Last updated: {fetchedAt}
              </p>
            )}

            {weatherError && (
              <p className="muted smallest" style={{ marginTop: 6 }}>
                ⚠️ {weatherError}
              </p>
            )}

            <div style={{ marginTop: 14 }}>
              <a
                href={WIND_MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                View Wind Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      {estimateOpen && (
        <section id="estimate" className="section section-alt">
          <div className="container">
            <div className="card">
              <h2>Request Estimate / Call-Out</h2>

              <form onSubmit={onSubmit} className="form-grid" style={{ marginTop: 12 }}>
                <input name="website" style={{ display: "none" }} />

                <div className="form-row">
                  <input name="name" required placeholder="Full name" />
                  <input name="phone" required placeholder="Phone number" />
                </div>

                <div className="form-row">
                  <input name="email" type="email" required placeholder="Email address" />
                  <input name="postcode" required placeholder="Eircode" />
                </div>

                <textarea
                  name="address"
                  required
                  placeholder="Full address"
                  rows={3}
                />

                <textarea
                  name="details"
                  placeholder="Describe issue or works needed"
                  rows={4}
                />

                <input
                  type="file"
                  name="files"
                  multiple
                  onChange={(e) =>
                    setFilesLabel(
                      e.target.files?.length
                        ? `${e.target.files.length} file(s) selected`
                        : ""
                    )
                  }
                />

                {filesLabel && <p className="muted smallest">{filesLabel}</p>}

                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Request"}
                </button>

                {submitMsg && <p className="muted">{submitMsg}</p>}
              </form>
            </div>
          </div>
        </section>
      )}

      {/* QUICK CALCULATORS */}
      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <h3>Roof Estimate</h3>
            <input
              placeholder="m²"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
            />
            {roofTotal && <p>€{roofTotal}</p>}
          </div>

          <div className="card">
            <h3>Tiling Estimate</h3>
            <input
              placeholder="m²"
              value={tileArea}
              onChange={(e) => setTileArea(e.target.value)}
            />
            {tileTotal && <p>€{tileTotal}</p>}
          </div>

          <div className="card">
            <h3>Flooring Estimate</h3>
            <input
              placeholder="m²"
              value={floorArea}
              onChange={(e) => setFloorArea(e.target.value)}
            />
            {floorTotal && <p>€{floorTotal}</p>}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              KRINEDAL-<span className="hero-r">R</span>
            </div>
            <p className="muted smallest" style={{ marginTop: 6 }}>
              Premium property care across Ireland
            </p>
          </div>

          <div>
            <p className="footer-title">Contact</p>
            <p className="muted smallest">📞 083 176 2475</p>
            <p className="muted smallest">📧 krinedalr@outlook.com</p>
            <p className="muted smallest">🌐 www.krinedalr.ie</p>
          </div>

          <div>
            <p className="footer-title">Standards</p>
            <p className="muted smallest">VAT Registered</p>
            <p className="muted smallest">Fully Insured</p>
            <p className="muted smallest">Residential & Commercial</p>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="floating-buttons">
        <a href="tel:0831762475" className="fab">
          <IconMail />
        </a>
        <a href="https://wa.me/353831762475" target="_blank" rel="noreferrer" className="fab">
          <IconWhatsApp />
        </a>
        <a href="#" className="fab">
          <IconMessenger />
        </a>
        <a
          href="https://www.instagram.com/krinedalr/"
          target="_blank"
          rel="noreferrer"
          className="fab"
        >
          <IconInstagram />
        </a>
      </div>
    </main>
  );
}
