import SectionHeader from "../components/SectionHeader";
import { aboutHighlights } from "../data/content";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="position-relative rounded-4 overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Engineering Team"
                className="w-100"
                style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 start-0 end-0 p-3 text-white small fw-semibold"
                style={{ background: "linear-gradient(transparent, rgba(0, 0, 0, 0.65))" }}
              >
                APEX Training Consults Ltd
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <SectionHeader
              className="mb-4"
              eyebrow="About the firm"
              title={
                <>
                  A professional firm dedicated to{" "}
                  <span className="text-primary">
                    training, consultancy and engineering support.
                  </span>
                </>
              }
            />
            <p className="text-muted mb-4">
              Apex Training Consults Ltd is registered under the{" "}
              <strong>Companies and Allied Matters Act 2020, Nigeria</strong>. We provide
              services across engineering, science, technology and allied disciplines; from
              certification programmes and management consultancy to risk &amp; safety
              engineering, environmental audits and sustainable innovation.
            </p>

            <div className="row g-3 mb-4">
              {aboutHighlights.map((h) => (
                <div className="col-sm-6" key={h.title}>
                  <div className="border rounded-3 bg-body p-3 h-100">
                    <div className="fw-semibold">{h.title}</div>
                    <div className="small text-muted">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-2">
              <a href="#services" className="btn btn-primary hero-btn hero-btn-primary">View Services <i className="bi bi-arrow-right ms-2" />
  </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;