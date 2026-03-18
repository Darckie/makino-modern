import { Reveal } from "@/components/reveal";
import { TechnologyDiagram } from "@/components/technology-diagram";
import { technologyCapabilities, testingSystems } from "@/data/site";

export default function TechnologyPage() {
  return (
    <div className="page-shell">
      <section className="subpage-hero shell">
        <Reveal className="section-label">Technology & R&D</Reveal>
        <Reveal as="h1" className="page-title">
          A premium engineering story built around CAD, validation, material
          science, and process innovation.
        </Reveal>
        <Reveal className="page-copy">
          This page elevates the technical depth of the brand with animated
          diagrams, testing highlights, and a clearer articulation of Makino&apos;s
          manufacturing intelligence.
        </Reveal>
      </section>

      <section className="section shell tech-layout">
        <div>
          <Reveal className="section-label">Capability Stack</Reveal>
          <Reveal as="h2" className="section-heading">
            Design, prototype, test, refine, and scale with precision.
          </Reveal>
          <div className="card-grid two-up compact-grid">
            {technologyCapabilities.map((item) => (
              <Reveal key={item.title} className="premium-card feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <TechnologyDiagram />
      </section>

      <section className="section shell">
        <div className="section-heading-row">
          <Reveal as="h2" className="section-heading">
            Testing systems that make performance measurable.
          </Reveal>
          <Reveal className="section-copy">
            The interaction model here turns dry lab lists into an immersive
            systems overview that still respects engineering credibility.
          </Reveal>
        </div>

        <div className="card-grid three-up">
          {testingSystems.map((item) => (
            <Reveal key={item.title} className="premium-card feature-card">
              <div className="card-eyebrow">{item.kicker}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
