"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MoveRight, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { floatingClients } from "@/data/site";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -4]);

  return (
    <section className="hero-section">
      <motion.div className="hero-visual-layer" style={{ y: translateY }}>
        <motion.img
          className="hero-bike-image"
          src="/images/bike-hero.svg"
          alt="Premium motorcycle platform visual"
          style={{ rotate }}
        />
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-noise" />

      <div className="shell hero-grid">
        <div className="hero-copy">
          <Reveal className="eyebrow-pill">Established 1990 • OEM + Global Aftermarket</Reveal>
          <Reveal as="h1" className="hero-title">
            Engineering Precision.
            <br />
            Driving Performance.
          </Reveal>
          <Reveal className="hero-text">
            Makino Auto Industries Pvt Ltd reimagined as a premium automotive
            brand experience centered on friction technology, plant capability,
            and high-trust product storytelling.
          </Reveal>
          <Reveal className="cta-row">
            <Link className="button button-primary" href="/products">
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link className="button button-ghost" href="/about">
              <PlayCircle size={16} /> Discover Makino
            </Link>
          </Reveal>
        </div>

        <Reveal className="hero-panel premium-card">
          <div className="panel-label">Performance Snapshot</div>
          <div className="hero-specs">
            <div>
              <span>Plants</span>
              <strong>Noida + Haridwar</strong>
            </div>
            <div>
              <span>Applications</span>
              <strong>2W / 3W / 4W</strong>
            </div>
            <div>
              <span>Core Strength</span>
              <strong>Clutch & Brake Systems</strong>
            </div>
          </div>
          <div className="hero-panel-visual">
            <motion.img
              className="hero-panel-bike"
              src="/images/bike-platform.svg"
              alt="Motorcycle platform render"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="floating-client-layer">
            {floatingClients.map((client, index) => (
              <motion.div
                key={client.name}
                className={`floating-client-card floating-${index + 1}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  delay: 0.25 + index * 0.16,
                  duration: 4 + index * 0.35,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                <img src={client.image} alt={client.name} />
                <div>
                  <strong>{client.name}</strong>
                  <span>{client.type}</span>
                </div>
                <MoveRight size={16} />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
