import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { contactDetails } from "@/data/site";

const icons = [MapPin, Phone, Mail];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="subpage-hero shell">
        <Reveal className="section-label">Contact</Reveal>
        <Reveal as="h1" className="page-title">
          Speak with Makino about OEM supply, aftermarket distribution, or plant
          capability.
        </Reveal>
        <Reveal className="page-copy">
          The contact experience is intentionally minimal and executive,
          balancing fast access to location details with a premium inquiry
          journey.
        </Reveal>
      </section>

      <section className="section shell contact-layout">
        <div className="contact-cards">
          {contactDetails.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={item.title} className="premium-card feature-card">
                <div className="icon-badge">
                  <Icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            );
          })}

          <Reveal className="premium-card distributor-card">
            <div className="section-label">Dealer / Distributor</div>
            <h3>Channel partnerships that scale with confidence.</h3>
            <p>
              Position this area as the conversion point for serious trade
              enquiries, with elevated language and a stronger sense of trust.
            </p>
            <Link className="button button-secondary" href="mailto:marketing@makino.in">
              Email marketing@makino.in
            </Link>
          </Reveal>
        </div>

        <Reveal className="premium-card contact-form-card">
          <form className="contact-form">
            <div className="form-header">
              <div className="section-label">Start a Project</div>
              <h2>Request product, OEM, or aftermarket support.</h2>
            </div>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Company
              <input type="text" placeholder="Company / organization" />
            </label>
            <label>
              Email
              <input type="email" placeholder="name@company.com" />
            </label>
            <label>
              Requirement
              <textarea
                rows={5}
                placeholder="Tell us about the vehicle segment, product category, or business requirement."
              />
            </label>
            <button className="button button-primary" type="submit">
              Send Inquiry
            </button>
          </form>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="premium-card map-card">
          <div className="map-shell">
            <iframe
              title="Makino location"
              src="https://www.google.com/maps?q=D-146-148%2C%20Sector%2063%2C%20Phase%20III%2C%20Noida%20201301&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
