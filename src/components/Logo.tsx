export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold text-primary">ONE</span>
        <span className="text-2xl font-bold text-foreground">TWO</span>
        <span className="text-2xl font-bold text-primary">WEB</span>
      </div>
    </div>
  )
}