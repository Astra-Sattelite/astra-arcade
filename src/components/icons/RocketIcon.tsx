interface RocketIconProps {
  className?: string;
}

export default function RocketIcon({ className }: RocketIconProps) {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 16.5c-1.5-2.5-1-6.5 2-9.5s7-3.5 9.5-2" opacity="0.5" />
      <path d="M14.5 17.5L3 21l3.5-11.5L19 4.5z" />
      <path d="M13 10l-3.5-3.5" />
      <path d="M14 14l3.5 3.5" />
      <path d="M5 19l-2 2" strokeWidth="3" stroke="var(--laser-pink)" />
    </svg>
  );
}
