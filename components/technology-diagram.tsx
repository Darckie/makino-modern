"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const nodes = [
  "CAD / CAM",
  "FEA Analysis",
  "Prototyping",
  "Lab Validation",
  "On-Vehicle Testing",
  "Scale Manufacturing"
];

export function TechnologyDiagram() {
  return (
    <Reveal className="premium-card diagram-card">
      <div className="diagram-shell">
        <div className="diagram-center">
          <span>Makino R&D Core</span>
        </div>
        {nodes.map((node, index) => (
          <motion.div
            key={node}
            className={`diagram-node node-${index + 1}`}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          >
            {node}
          </motion.div>
        ))}
      </div>
    </Reveal>
  );
}
