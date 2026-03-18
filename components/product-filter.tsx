"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/site";

const filters = ["All", "Clutch Systems", "Brake Systems", "Friction Materials"] as const;

export function ProductFilter() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleProducts = useMemo(() => {
    if (activeFilter === "All") {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="products-experience">
      <div className="filter-row">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="card-grid three-up">
        <AnimatePresence mode="popLayout">
          {visibleProducts.map((product) => (
            <motion.article
              layout
              key={product.name}
              className="premium-card product-card"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`product-visual ${product.accent}`}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-eyebrow">{product.category}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="spec-list">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="spec-item">
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>
              <div className="product-tags">
                {product.applications.map((application) => (
                  <span key={application}>{application}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
