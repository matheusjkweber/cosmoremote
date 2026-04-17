type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" />
      <path {...stroke} d="M4 15l1.1 3.1L8 19l-2.9 1.1L4 23l-1.1-2.9L0 19l2.9-0.9z" />
    </svg>
  );
}

export function QrIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...stroke} x="3" y="3" width="6" height="6" rx="1.2" />
      <rect {...stroke} x="15" y="3" width="6" height="6" rx="1.2" />
      <rect {...stroke} x="3" y="15" width="6" height="6" rx="1.2" />
      <path {...stroke} d="M15 15h2v2h-2zM19 15h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2zM11 11h2v2h-2zM15 11h2v2h-2z" />
    </svg>
  );
}

export function StreamIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M4 12h4l3-6 3 12 3-6h3" />
      <path {...stroke} d="M4 18h16" />
    </svg>
  );
}

export function FolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M3.5 8.5h6l2 2h9v8.5a1.5 1.5 0 0 1-1.5 1.5h-16A1.5 1.5 0 0 1 2.5 19V10a1.5 1.5 0 0 1 1-1.5Z" />
      <path {...stroke} d="M3 8.5V6a1.5 1.5 0 0 1 1.5-1.5H9l2 2h8.5A1.5 1.5 0 0 1 21 8v1" />
    </svg>
  );
}

export function CopyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...stroke} x="8" y="8" width="11" height="11" rx="2" />
      <path {...stroke} d="M6 16V5.5A1.5 1.5 0 0 1 7.5 4h10.5" />
    </svg>
  );
}

export function StatusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...stroke} cx="12" cy="12" r="8" />
      <circle fill="currentColor" cx="12" cy="12" r="3" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M9 7 4 12l5 5" />
      <path {...stroke} d="M15 7l5 5-5 5" />
      <path {...stroke} d="M14 5 10 19" />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M16.8 12.5c-.1 2.8 2.4 3.7 2.4 3.7s-1.8 5.1-4.2 5.1c-1.1 0-1.9-.7-3.1-.7-1.1 0-2 .7-3.1.7-2 0-4.6-4.7-4.6-8.5 0-3.9 2.5-6 4.9-6 1.2 0 2.2.8 3 .8s2-1 3.6-1c1.1 0 2.9.6 3.8 2.3-2.7 1.4-2.7 4.8-2.7 4.8Z" />
      <path {...stroke} d="M14 3.5c-1 .5-1.9 1.4-2.4 2.3" />
    </svg>
  );
}

export function AndroidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M7 8.5 4.8 5.2M17 8.5l2.2-3.3" />
      <path {...stroke} d="M6.5 11.2h11V19a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z" />
      <path {...stroke} d="M9 7a3 3 0 0 1 6 0" />
      <path {...stroke} d="M10 19v3M14 19v3" />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...stroke} x="3.5" y="4.5" width="17" height="12" rx="2" />
      <path {...stroke} d="M8 20h8M12 16v4" />
    </svg>
  );
}

