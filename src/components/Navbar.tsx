import { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useTheme } from "../hooks/useTheme";
import type { Theme } from "../hooks/useTheme";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "expertise", label: "Expertise" },
  { id: "cases", label: "Cases" },
  { id: "contact", label: "Contact" },
];
const sectionIds = links.map((l) => l.id);

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  display: string; 
}

function ThemeToggle({ theme, onToggle, display }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className={`btn btn-outline-secondary rounded-circle align-items-center justify-content-center ${display}`}
      style={{ width: 40, height: 40 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
    >
      <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`} />
    </button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const { theme, toggle } = useTheme();
  const close = () => setOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body shadow-sm sticky-top px-3 px-lg-5 py-2 py-lg-3"
      data-bs-theme={theme}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#home" onClick={close}>
          Apex <span className="text-primary">Consult</span>
        </a>

        {/* Mobile: hamburger with the theme toggle to its right */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="apexNav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ThemeToggle theme={theme} onToggle={toggle} display="d-inline-flex" />
        </div>

        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="apexNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            {links.map(({ id, label }) => (
              <li className="nav-item" key={id}>
                <a
                  className={`nav-link${active === id ? " active fw-semibold" : ""}`}
                  aria-current={active === id ? "page" : undefined}
                  href={`#${id}`}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center justify-content-start justify-content-lg-end gap-5">
           
            <a
              href="#contact"
              className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-sm"
              onClick={close}
            >
              Partner With Us
            </a>
             <ThemeToggle theme={theme} onToggle={toggle} display="d-none d-lg-inline-flex" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;