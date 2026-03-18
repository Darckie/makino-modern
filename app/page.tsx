import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import {
  homeProductHighlights,
  innovationStats,
  oemPartners,
  premiumPillars
} from "@/data/site";

const whyMakinoIcons = [ShieldCheck, Atom, Globe2, Gauge];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section shell">
        <Reveal className="section-label">Product Highlights</Reveal>
        <div className="section-heading-row">
          <Reveal as="h2" className="section-heading">
            Engineered systems for the vehicles that move India and the world.
          </Reveal>
          <Reveal className="section-copy">
            Makino designs clutch, brake, and friction solutions for OEM programs
            and aftermarket channels with a sharp focus on control, endurance,
            and manufacturing repeatability.
          </Reveal>
        </div>

        <div className="card-grid three-up">
          {homeProductHighlights.map((item) => (
            <Reveal key={item.title} className="product-card premium-card">
              <div className={`product-visual ${item.accent}`}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-eyebrow">{item.kicker}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="product-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-split">
          <div>
            <Reveal className="section-label">Why Makino</Reveal>
            <Reveal as="h2" className="section-heading">
              Trusted engineering, proven plants, and a product mindset built
              for performance.
            </Reveal>
          </div>
          <Reveal className="section-copy">
            The brand story blends OEM discipline, material science, and process
            control. Every line item on the shop floor is backed by testing,
            design analysis, and a deep understanding of friction technology.
          </Reveal>
        </div>

        <div className="card-grid two-up">
          {premiumPillars.map((pillar, index) => {
            const Icon = whyMakinoIcons[index % whyMakinoIcons.length];

            return (
              <Reveal key={pillar.title} className="premium-card feature-card">
                <div className="icon-badge">
                  <Icon size={20} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section shell">
        <div className="oem-panel premium-card">
          <Reveal>
            <div className="section-label">OEM + Aftermarket Reach</div>
            <h2 className="section-heading narrow">
              Built for long-term manufacturing partnerships and wide channel
              confidence.
            </h2>
          </Reveal>
          <div className="logo-wall">
            {oemPartners.map((partner) => (
              <Reveal key={partner} className="logo-chip">
                {partner}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell innovation-section">
        <div>
          <Reveal className="section-label">Innovation & Technology</Reveal>
          <Reveal as="h2" className="section-heading">
            R&D that spans materials, tooling, testing, and on-vehicle
            validation.
          </Reveal>
          <Reveal className="section-copy">
            Makino&apos;s DSIR-approved engineering culture combines advanced
            tooling, lab infrastructure, and application-specific development to
            shorten validation cycles and improve field performance.
          </Reveal>
          <Reveal className="cta-row">
            <Link className="button button-primary" href="/technology">
              Explore Technology
            </Link>
          </Reveal>
        </div>

        <div className="stats-grid">
          {innovationStats.map((stat) => (
            <Reveal key={stat.label} className="premium-card stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="premium-card cta-banner">
          <div>
            <div className="section-label">Start a Conversation</div>
            <h2 className="section-heading narrow">
              Build your next OEM or aftermarket program with a partner designed
              for consistency.
            </h2>
          </div>
          <div className="cta-row">
            <Link className="button button-primary" href="/products">
              Explore Products
            </Link>
            <Link className="button button-secondary" href="/contact">
              Contact Makino <ArrowRight size={16} />
            </Link>
          </div>
          <div className="cta-ribbon">
            <span>
              <Sparkles size={16} /> Premium brand refresh
            </span>
            <span>
              <Layers3 size={16} /> Responsive product storytelling
            </span>
          </div>
        </Reveal>
      </section>
    </>
  );
}
