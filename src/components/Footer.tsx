import { footerColumns, socials } from "../data/content";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row g-4 pb-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="text-white rounded-3 d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40, background: "#2563eb" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                  <polyline points="2 8.5 12 15 22 8.5" />
                  <line x1="12" y1="15" x2="12" y2="22" />
                </svg>
              </div>
              <div className="lh-sm">
                <div className="fw-bold fs-5">
                  APEX<sup className="small">®</sup>
                </div>
                <div className="small text-white-50">TRAINING CONSULTS LTD</div>
              </div>
            </div>
            <p className="small text-white-50">
              A professional firm dedicated to training, consultancy, engineering support,
              research, sustainability and technical development registered under the
              Companies and Allied Matters Act 2020, Nigeria.
            </p>
            <div className="d-flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="btn btn-outline-light btn-sm rounded-circle"
                >
                  <i className={`bi bi-${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div className="col-6 col-md-4 col-lg" key={col.title}>
              <h3 className="h6 fw-semibold mb-3">{col.title}</h3>
              <ul className="list-unstyled mb-0">
                {col.links.map((label) => (
                  <li key={label} className="mb-2">
                    <a
                      href="#"
                      className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none small"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-top border-secondary">
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between gap-2 small text-white-50">
          <span>
            © {new Date().getFullYear()} APEX Training Consults Ltd. All rights reserved. ·
            RC Number · CAC, Nigeria.
          </span>
          <span>Empowering Excellence · Training · Innovation · Engineering</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;