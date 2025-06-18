export default function PalmTreeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v18" />
      <path d="M9 9c0-1 1.2-2 3-2s3 1 3 2c0 1.8-3.8 2.5-3 5" />
      <path d="M9 5c0-1 1.2-2 3-2s3 1 3 2c0 1.8-3.8 2.5-3 5" />
      <path d="M9 13c0-1 1.2-2 3-2s3 1 3 2c0 1.8-3.8 2.5-3 5" />
      <path d="M15 3c-1.4 0-3 .5-3 2 0 3 4 3 4 6 0-2 1-3 3-3" />
      <path d="M9 3c1.4 0 3 .5 3 2 0 3-4 3-4 6 0-2-1-3-3-3" />
    </svg>
  )
}
