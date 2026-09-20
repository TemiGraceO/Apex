import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  light?: boolean;
  className?: string;
}

function SectionHeader({
  eyebrow,
  title,
  lead,
  light = false,
  className = "mb-5",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div
        className={`text-uppercase fw-semibold small mb-2 ${
          light ? "text-info" : "text-primary"
        }`}
        style={{ letterSpacing: "0.15em" }}
      >
        {eyebrow}
      </div>
      <h2 className={`display-6 fw-bold ${light ? "text-white" : ""}`}>{title}</h2>
      {lead && (
        <p className={`lead mt-3 mb-0 ${light ? "text-white-50" : "text-muted"}`}>{lead}</p>
      )}
    </div>
  );
}

export default SectionHeader;