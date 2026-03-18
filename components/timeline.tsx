import { Reveal } from "@/components/reveal";
import { milestones } from "@/data/site";

export function Timeline() {
  return (
    <div className="timeline">
      {milestones.map((item) => (
        <Reveal key={item.year} className="timeline-item premium-card">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
