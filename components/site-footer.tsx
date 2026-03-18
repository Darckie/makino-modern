import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand-lockup footer-brand">
            <span className="brand-mark" />
            <span>
              <strong>MAKINO</strong>
              <small>Engineering Precision. Driving Performance.</small>
            </span>
          </div>
          <p className="footer-copy">
            Premium redesign concept for Makino Auto Industries Pvt Ltd across
            OEM and aftermarket storytelling.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
