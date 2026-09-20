import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { services, type ServiceTag } from "../data/content";

type Filter = "All" | ServiceTag;
const filters: Filter[] = ["All", "Training", "Consultancy", "Engineering"];

function Services() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? services : services.filter((s) => s.tag === active);

  return (
    <section id="services" className="py-5 bg-body-tertiary border-top border-bottom">
      <div className="container py-lg-4">
        <SectionHeader
          eyebrow="What we do"
          title="Three pillars of expertise."
          lead="Integrated services that help organisations build capability, manage risk and deliver engineering projects with confidence."
        />

        <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              className={`btn btn-sm rounded-pill px-3 ${
                active === f ? "btn-dark" : "btn-outline-secondary"
              }`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
          {active === "All" && (
            <span className="ms-auto small text-muted">
              <i className="bi bi-file-earmark-text me-1" />
              Services Updated 12 Feb 2026
            </span>
          )}
        </div>

        <div className="row g-4">
          {visible.map((s) => (
            <div className="col-md-6 col-lg-4" key={s.code}>
              <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column p-4">
                  <div className="small fw-semibold text-primary mb-2">
                    {s.tag} <span className="text-muted fw-normal">· {s.code}</span>
                  </div>
                  <h3 className="h5 fw-bold">{s.title}</h3>
                  <p className="text-muted small">{s.text}</p>
                  <ul className="list-unstyled small mb-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="d-flex gap-2 mb-2">
                        <i className="bi bi-check-circle text-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-auto fw-semibold text-decoration-none">
                    Learn more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;