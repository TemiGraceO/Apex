import SectionHeader from "../components/SectionHeader";
import { useCountUp } from "../hooks/useCountUp";
import { stats, type Stat } from "../data/content";

function StatItem({ target, suffix, label, sub }: Stat) {
  const { ref, value } = useCountUp(target);

  return (
    <div className="col-md-4">
      <div ref={ref} className="display-3 fw-bold">
        {value}
        {suffix}
      </div>
      <div className="fw-semibold">{label}</div>
      <div className="small text-white-50">{sub}</div>
      <div className="bg-primary mt-3" style={{ height: 3, width: 48 }} />
    </div>
  );
}

function Stats() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container py-lg-4">
        <SectionHeader light eyebrow="Impact in numbers" title="Trusted across industries." />
        <div className="row g-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;