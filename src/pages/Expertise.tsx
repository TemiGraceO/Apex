import { useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { capabilities, industries } from "../data/content";

function Expertise() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();
  const visible = capabilities.filter(
    (c) => !q || `${c.title} ${c.text} ${c.code}`.toLowerCase().includes(q)
  );

  return (
    <section id="expertise" className="py-5">
      <div className="container py-lg-4">
        <SectionHeader
          eyebrow="Full-spectrum capability"
          title="Eight ways we engineer progress."
          lead="From environmental audits to digital transformation, equipment supply to research commercialisation."
        />

        <div className="input-group mb-4" style={{ maxWidth: 520 }}>
          <span className="input-group-text bg-body">
            <i className="bi bi-search" />
          </span>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Search capability (e.g. HAZOP, digital, ESG)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
            >
              Clear
            </button>
          )}
        </div>

        {visible.length === 0 ? (
          <p className="text-muted">No capabilities match "{query}".</p>
        ) : (
          <div className="row g-3">
            {visible.map((c) => (
              <div className="col-sm-6 col-lg-3" key={c.code}>
                <div className="card h-100 border shadow-sm rounded-4 p-3">
                  <i className={`bi bi-${c.icon} fs-3 text-primary mb-2`} />
                  <div className="fw-semibold">{c.title}</div>
                  <div className="small text-muted mb-3">{c.text}</div>
                  <span className="badge bg-body-secondary text-body border font-monospace mt-auto align-self-start">
                    {c.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="d-flex flex-wrap justify-content-center gap-2 mt-5">
          {industries.map((i) => (
            <span key={i} className="badge rounded-pill bg-body-secondary text-body border fw-normal px-3 py-2">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;