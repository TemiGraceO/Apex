import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { cases } from "../data/content";

function Cases() {
  const [index, setIndex] = useState(0);
  const total = cases.length;
  const go = (i: number) => setIndex(((i % total) + total) % total);
  const current = cases[index];

  return (
    <section id="cases" className="py-5 bg-success-subtle">
      <div className="container py-lg-4">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <SectionHeader
            className="mb-0"
            eyebrow="Selected project outcomes"
            title="Case snapshots."
          />
          <div className="d-flex gap-2 mb-2">
            {cases.map((c, i) => (
              <button
                key={c.title}
                type="button"
                aria-label={`Show case ${i + 1}`}
                aria-current={i === index}
                className={`btn p-0 border-0 rounded-circle ${
                  i === index ? "bg-primary" : "bg-secondary-subtle"
                }`}
                style={{ width: 12, height: 12 }}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        <div
          key={index}
          className="card border-0 shadow-sm rounded-4 p-4 p-lg-5 case-fade"
          aria-live="polite"
        >
          <div className="small fw-semibold text-primary mb-2">{current.sector}</div>
          <h3 className="h3 fw-bold">{current.title}</h3>
          <p className="lead text-muted">{current.result}</p>
          <div className="d-flex flex-wrap gap-2">
            {current.tags.map((t) => (
              <span key={t} className="badge rounded-pill bg-body-secondary text-body border fw-normal px-3 py-2">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex gap-2 mt-4">
          <button
            type="button"
            className="btn btn-outline-dark rounded-circle"
            aria-label="Previous case"
            onClick={() => go(index - 1)}
          >
            <i className="bi bi-chevron-left" />
          </button>
          <button
            type="button"
            className="btn btn-outline-dark rounded-circle"
            aria-label="Next case"
            onClick={() => go(index + 1)}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cases;