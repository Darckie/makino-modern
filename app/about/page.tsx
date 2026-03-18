import { Factory, Flag, Globe2, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { manufacturingLocations, missionPoints } from "@/data/site";

const icons = [Factory, Globe2, Flag, Target];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="subpage-hero shell">
        <Reveal className="section-label">About Makino</Reveal>
        <Reveal as="h1" className="page-title">
          From a 1990 foundation to a friction-technology brand trusted across
          vehicle categories.
        </Reveal>
        <Reveal className="page-copy">
          The Makino story is one of manufacturing depth, R&D investment, and
          the discipline required to support both large OEMs and demanding
          aftermarket distributors.
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-label">Timeline</Reveal>
        <Timeline />
      </section>

      <section className="section shell">
        <div className="section-heading-row">
          <Reveal as="h2" className="section-heading">
            Manufacturing capabilities designed for quality, scale, and repeat
            performance.
          </Reveal>
          <Reveal className="section-copy">
            Makino operates from Noida and Haridwar with facilities that support
            die casting, stamping, machining, molding, assembly, and advanced
            friction material development.
          </Reveal>
        </div>

        <div className="card-grid two-up">
          {manufacturingLocations.map((location, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={location.title} className="premium-card feature-card">
                <div className="icon-badge">
                  <Icon size={20} />
                </div>
                <h3>{location.title}</h3>
                <p>{location.description}</p>
                <div className="product-tags">
                  {location.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section shell">
        <div className="world-panel premium-card">
          <div className="world-copy">
            <Reveal className="section-label">Global Presence</Reveal>
            <Reveal as="h2" className="section-heading narrow">
              OEM supply in India. Aftermarket confidence across export markets.
            </Reveal>
            <Reveal className="page-copy">
              The updated design uses a restrained map treatment and supporting
              metrics instead of clutter, helping buyers understand Makino as a
              premium engineering partner with broad reach.
            </Reveal>
          </div>
          <div className="world-map">
            <div className="map-glow" />
            <div className="map-grid" />
            <div className="map-point india">India</div>
            <div className="map-point mena">MENA</div>
            <div className="map-point europe">Europe</div>
            <div className="map-point asia">Asia</div>
          </div>
        </div>
      </section>

      <section className="section shell mission-grid">
        {missionPoints.map((point) => (
          <Reveal key={point.title} className="premium-card mission-card">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
