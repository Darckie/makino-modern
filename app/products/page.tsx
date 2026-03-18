import { ProductFilter } from "@/components/product-filter";
import { Reveal } from "@/components/reveal";

export default function ProductsPage() {
  return (
    <div className="page-shell">
      <section className="subpage-hero shell">
        <Reveal className="section-label">Products</Reveal>
        <Reveal as="h1" className="page-title">
          High-performance clutch, brake, and friction systems for OEM and
          aftermarket programs.
        </Reveal>
        <Reveal className="page-copy">
          A modular product experience with category filters, application fit,
          and the premium visual language needed for a world-class industrial
          brand.
        </Reveal>
      </section>

      <section className="section shell">
        <ProductFilter />
      </section>
    </div>
  );
}
