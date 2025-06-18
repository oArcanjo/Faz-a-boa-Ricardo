export default function WIcon({ className }: { className?: string }) {
  return (
    <div
      className={`font-bold flex items-center justify-center ${className} bg-blue-100 dark:bg-gold-900/30 rounded-full p-1 border-2 border-blue-200 dark:border-gold-700/50`}
    >
      W
    </div>
  )
}
