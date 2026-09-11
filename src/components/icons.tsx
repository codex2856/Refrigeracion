import type { SVGProps } from 'react';

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconSnowflake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M12 3l-2.6 2.6M12 3l2.6 2.6M12 21l-2.6-2.6M12 21l2.6-2.6" />
      <path d="M4.5 7.5l15 9M4.5 7.5l3.5.4M4.5 7.5l1 3.4M19.5 16.5l-1-3.4M19.5 16.5l-3.5-.4" />
      <path d="M19.5 7.5l-15 9M19.5 7.5l-3.5.4M19.5 7.5l-1 3.4M4.5 16.5l1-3.4M4.5 16.5l3.5-.4" />
    </svg>
  );
}

export function IconWind(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="7" rx="2" />
      <path d="M6.3 8h11.4M6.3 5.9h7.8" />
      <path d="M6 14.5c2.8 1.6 4.8 1.6 7 0M9.5 18c1.8 1 3.2 1 5 0" />
    </svg>
  );
}

export function IconFridge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="2.5" width="14" height="19" rx="2.2" />
      <path d="M5 9.5h14" />
      <path d="M8.2 5v2.4M8.2 12.2v2.6" />
    </svg>
  );
}

export function IconWasher(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="2.5" width="17" height="19" rx="2.2" />
      <path d="M6.5 5.2h.01M9.3 5.2h.01" />
      <circle cx="12" cy="13.4" r="5.2" />
      <path d="M12 10.6a2.8 2.8 0 0 1 2.8 2.8" />
    </svg>
  );
}

export function IconWrench(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4.2 4.2 0 0 0-5.7 4.9L3.6 16.6a1.8 1.8 0 0 0 2.5 2.5l5.4-5.4a4.2 4.2 0 0 0 4.9-5.7l-2.6 2.6-2-2z" />
    </svg>
  );
}

export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.8" cy="10.8" r="6.6" />
      <path d="M19.5 19.5l-4.3-4.3" />
    </svg>
  );
}

export function IconDroplet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2s6.2 6.9 6.2 11.2a6.2 6.2 0 1 1-12.4 0C5.8 10.1 12 3.2 12 3.2z" />
    </svg>
  );
}

export function IconAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 2 20.5h20z" />
      <path d="M12 10v4.2M12 17.4h.01" />
    </svg>
  );
}

export function IconPower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v7.4" />
      <path d="M7.2 6.6a7.6 7.6 0 1 0 9.6 0" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5.3 4.2h3.1l1.4 4-2 1.6a11.6 11.6 0 0 0 5.4 5.4l1.6-2 4 1.4v3.1c0 1-.9 1.8-1.9 1.6-4-.6-7.8-2.5-10.6-5.3S3.8 8.2 3.2 4.2c-.1-1 .7-1.8 1.7-1.8z" />
    </svg>
  );
}

export function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a7.9 7.9 0 0 1-2.3-1.4 8.6 8.6 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5.3-.4a.6.6 0 0 0 0-.5c-.1-.1-.7-1.6-.9-2.2s-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4A3.5 3.5 0 0 0 5.6 9.7a6.2 6.2 0 0 0 1.3 3.2 13.8 13.8 0 0 0 5.4 4.8c.7.3 1.3.5 1.8.6a4.3 4.3 0 0 0 2-.1 3.3 3.3 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.4z" />
      <path d="M20.5 3.5A11 11 0 0 0 3 17.2L2 22l4.9-1.3a11 11 0 0 0 5.2 1.3 11 11 0 0 0 8.4-18.5zm-8.4 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.9.9-3.1-.2-.3a9.2 9.2 0 1 1 7.4 4z" />
    </svg>
  );
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.4S5 15 5 9.8a7 7 0 0 1 14 0c0 5.2-7 11.6-7 11.6z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </svg>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3.2 2" />
    </svg>
  );
}

export function IconCheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M8.4 12.3l2.4 2.4 4.8-5.2" />
    </svg>
  );
}

export function IconCamera(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.2A1.8 1.8 0 0 1 5.8 6.4h1.4l1-1.8h7.6l1 1.8h1.4A1.8 1.8 0 0 1 20 8.2v10a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 18.2z" />
      <circle cx="12" cy="12.6" r="3.6" />
    </svg>
  );
}

export function IconQuote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.7 6.2C6.4 7.6 4.5 10 4.5 13.2c0 2.4 1.6 4.1 3.7 4.1a3.3 3.3 0 0 0 3.4-3.3c0-1.7-1.2-3-2.9-3.2.4-1.5 1.7-2.9 3.3-3.6zm9 0C15.4 7.6 13.5 10 13.5 13.2c0 2.4 1.6 4.1 3.7 4.1a3.3 3.3 0 0 0 3.4-3.3c0-1.7-1.2-3-2.9-3.2.4-1.5 1.7-2.9 3.3-3.6z" />
    </svg>
  );
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </svg>
  );
}

export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 19.5 6v6c0 5-3.2 8.3-7.5 9.8C7.7 20.3 4.5 17 4.5 12V6z" />
      <path d="M9 12l2.2 2.2 4-4.4" />
    </svg>
  );
}

export function IconUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6" />
    </svg>
  );
}

export function IconMessageCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.2a8 8 0 1 1 3.4 6.5L4 20l1.3-3.7a7.9 7.9 0 0 1-1.3-4.1z" />
      <path d="M8.4 12h.01M12 12h.01M15.6 12h.01" />
    </svg>
  );
}

export function IconCalendarCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
      <path d="M3.5 9.6h17M8 3v3.6M16 3v3.6" />
      <path d="M8.4 14.4l2 2 4.6-4.8" />
    </svg>
  );
}

export function IconClipboardCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5.5" y="4.5" width="13" height="16.5" rx="2" />
      <path d="M9 4.5V3.4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.1" />
      <path d="M9 13.4l2 2 4-4.4" />
    </svg>
  );
}
