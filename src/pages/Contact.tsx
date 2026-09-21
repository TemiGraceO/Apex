import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import SectionHeader from "../components/SectionHeader";
import { contactRows, serviceOptions } from "../data/content";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const SUPPORT_EMAIL = contactRows[0].value;

type Status = "idle" | "sending" | "success" | "error";

const emptyForm = { name: "", email: "", service: serviceOptions[0], message: "" };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [validated, setValidated] = useState(false);
  const [sentName, setSentName] = useState("");
  const controller = useRef<AbortController | null>(null);

  // Cancel any request still in flight if the component unmounts
  useEffect(() => () => controller.current?.abort(), []);

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const formEl = e.currentTarget;

    // Show Bootstrap validation messages instead of sending
    if (!formEl.checkValidity()) {
      setValidated(true);
      return;
    }

    // Honeypot: real visitors never tick this hidden box
    if (new FormData(formEl).get("botcheck")) return;

    if (!ACCESS_KEY) {
      console.error("Missing VITE_WEB3FORMS_KEY. Add it to .env and restart the dev server.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    const abort = new AbortController();
    controller.current = abort;
    const timeout = window.setTimeout(() => abort.abort(), 15000);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New website enquiry from ${form.name.trim()}`,
          from_name: "APEX Training Consults Website",
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service,
          message: form.message.trim(),
        }),
        signal: abort.signal,
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Request failed");

      setSentName(form.name.trim().split(" ")[0]);
      setForm(emptyForm);
      setValidated(false);
      setStatus("success");
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <section id="contact" className="py-5 bg-body-tertiary border-top">
      <div className="container py-lg-4">
        <div className="row gy-5 gx-lg-5">
          <div className="col-lg-6">
            <SectionHeader
              className="mb-4"
              eyebrow="Start a project"
              title={
                <>
                  Let's build something{" "}
                  <span className="text-primary">engineered for excellence.</span>
                </>
              }
            />
            <p className="text-muted mb-4">
              Reach out for training, consultancy, engineering support, research partnerships
              or equipment supply. Our team will respond within one business day.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              {contactRows.map((r) => (
                <div className="d-flex align-items-center gap-3" key={r.label}>
                  <div
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 44, height: 44 }}
                  >
                    <i className={`bi bi-${r.icon} fs-5`} />
                  </div>
                  <div>
                    <div className="small text-uppercase text-muted fw-semibold">{r.label}</div>
                    <div className="fw-semibold text-break">{r.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-4 bg-body p-3">
              <div className="fw-semibold mb-1">
                <i className="bi bi-patch-check text-primary me-2" />
                CAC Registered Entity
              </div>
              <p className="small text-muted mb-0">
                APEX Training Consults Ltd. Registered under the Companies and Allied Matters
                Act 2020, Nigeria. Compliance documentation available upon request.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <form
              className={`card border-0 shadow-sm rounded-4 p-4 p-lg-5${
                validated ? " was-validated" : ""
              }`}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="small text-uppercase text-muted fw-semibold">Enquiry form</div>
              <h3 className="h4 fw-bold mb-4">Tell us about your project</h3>

              {/* Honeypot field for spam bots, hidden from people */}
              <input
                type="checkbox"
                name="botcheck"
                className="d-none"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="fName" className="form-label">Full name</label>
                  <input
                    id="fName"
                    name="name"
                    className="form-control"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={form.name}
                    onChange={update}
                  />
                  <div className="invalid-feedback">Please enter your full name.</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="fEmail" className="form-label">Work email</label>
                  <input
                    id="fEmail"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    value={form.email}
                    onChange={update}
                  />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="fSvc" className="form-label">Service of interest</label>
                <select
                  id="fSvc"
                  name="service"
                  className="form-select"
                  value={form.service}
                  onChange={update}
                >
                  {serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="fMsg" className="form-label">Message</label>
                <textarea
                  id="fMsg"
                  name="message"
                  rows={5}
                  className="form-control"
                  placeholder="Tell us briefly about your needs..."
                  required
                  minLength={10}
                  maxLength={2000}
                  value={form.message}
                  onChange={update}
                />
                <div className="invalid-feedback">
                  Please tell us a little more (at least 10 characters).
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  "Send enquiry"
                )}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <div className="alert alert-success mt-3 mb-0" role="status">
                    Thank you{sentName ? `, ${sentName}` : ""}. Your enquiry has been sent and
                    we will respond within one business day.
                  </div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger mt-3 mb-0" role="alert">
                    We could not send your message. Please try again, or email us directly at{" "}
                    <strong>{SUPPORT_EMAIL}</strong>.
                  </div>
                )}
              </div>

              <p className="small text-muted text-center mt-3 mb-0">
                By submitting, you agree to our privacy policy. We respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;