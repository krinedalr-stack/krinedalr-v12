// components/CallButtons.jsx
export default function CallButtons() {
  return (
    <div className="btn-row">
      <a className="btn btn-primary" href="tel:0831762475">
        Call 24/7 Storm Line
      </a>
      <a
        className="btn btn-outline"
        href="mailto:hello.krinedalr@gmail.com?subject=Quote%20request%20from%20website"
      >
        Request a quote by email
      </a>
    </div>
  );
}
