import SectionHeader from "../components/SectionHeader";
import { testimonials } from "../data/content";

function Testimonials() {
  return (
    <section className="py-5">
      <div className="container py-lg-4">
        <SectionHeader eyebrow="Client voices" title="What our partners say." />
        <div className="row g-4">
          {testimonials.map((t) => (
            <div className="col-md-4" key={t.name}>
              <figure className="card h-100 border-0 shadow-sm rounded-4 p-4 mb-0">
                <i className="bi bi-quote fs-1 text-primary lh-1" />
                <blockquote className="mb-4">{t.quote}</blockquote>
                <figcaption className="mt-auto">
                  <div className="fw-semibold">{t.name}</div>
                  <div className="small text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;