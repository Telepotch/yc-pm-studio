import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const defaults = { size: 16, strokeWidth: 1.8 };

function svg(
  props: IconProps,
  children: React.ReactNode,
  viewBox = '0 0 24 24'
) {
  const { size = defaults.size, className = '', strokeWidth } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? defaults.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

// --- Agent Icons ---

export function IconChartBar(props: IconProps) {
  return svg(
    props,
    <>
      <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" opacity="0.15" />
      <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.15" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" opacity="0.15" />
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </>
  );
}

export function IconMicrophone(props: IconProps) {
  return svg(
    props,
    <>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </>
  );
}

export function IconCompass(props: IconProps) {
  return svg(
    props,
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon
        points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
      />
    </>
  );
}

// --- Tab Icons ---

export function IconPenLine(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
    </>
  );
}

export function IconNewspaper(props: IconProps) {
  return svg(
    props,
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <line x1="6" y1="8" x2="12" y2="8" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="6" y1="16" x2="18" y2="16" />
      <rect x="14" y="7" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.15" />
    </>
  );
}

export function IconLightbulb(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </>
  );
}

export function IconRoute(props: IconProps) {
  return svg(
    props,
    <>
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="5" r="3" />
      <path d="M9 19h3c3 0 6-2 6-7" />
    </>
  );
}

// --- Source Icons ---

export function IconClipboardList(props: IconProps) {
  return svg(
    props,
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 1v4" />
      <path d="M15 1v4" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="13" y2="15" />
    </>
  );
}

export function IconStar(props: IconProps) {
  return svg(
    props,
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="currentColor"
      opacity="0.15"
    />
  );
}

export function IconGlobe(props: IconProps) {
  return svg(
    props,
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  );
}

export function IconPlug(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M12 22v-5" />
      <path d="M9 7V2" />
      <path d="M15 7V2" />
      <path d="M6 7h12v4a6 6 0 0 1-12 0V7z" />
    </>
  );
}

// --- UI Icons ---

export function IconArrowRight(props: IconProps) {
  return svg(
    props,
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  );
}

export function IconArrowLeft(props: IconProps) {
  return svg(
    props,
    <>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </>
  );
}

export function IconSend(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor" opacity="0.1" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </>
  );
}

export function IconCheck(props: IconProps) {
  return svg(
    props,
    <polyline points="20 6 9 17 4 12" />
  );
}

export function IconX(props: IconProps) {
  return svg(
    props,
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  );
}

export function IconDownload(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </>
  );
}

export function IconUpload(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </>
  );
}

export function IconFileText(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </>
  );
}

export function IconSkipForward(props: IconProps) {
  return svg(
    props,
    <>
      <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" opacity="0.1" />
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" y1="5" x2="19" y2="19" />
    </>
  );
}

export function IconSparkle(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    </>
  );
}

export function IconBookOpen(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  );
}

export function IconAtSign(props: IconProps) {
  return svg(
    props,
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </>
  );
}

export function IconActivity(props: IconProps) {
  return svg(
    props,
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  );
}

export function IconHash(props: IconProps) {
  return svg(
    props,
    <>
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="14" y2="21" />
    </>
  );
}

export function IconDrive(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M9 2L2 15h7l3-6z" fill="currentColor" opacity="0.1" />
      <path d="M15 2l7 13h-7l-3-6z" fill="currentColor" opacity="0.05" />
      <path d="M2 15l3 5h14l3-5H2z" fill="currentColor" opacity="0.1" />
      <path d="M9 2l-7 13h7l6-13H9z" />
      <path d="M15 2l7 13H9" />
      <path d="M2 15l3 5h14l3-5" />
    </>
  );
}

export function IconUsers(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  );
}

export function IconZap(props: IconProps) {
  return svg(
    props,
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  );
}

export function IconTarget(props: IconProps) {
  return svg(
    props,
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  );
}

export function IconLink(props: IconProps) {
  return svg(
    props,
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  );
}
