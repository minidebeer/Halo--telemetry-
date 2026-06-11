export default function TelemetryButton({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-2 rounded border border-[rgba(64,196,212,0.35)] bg-[rgba(64,196,212,0.15)] px-3 py-1.5 text-sm text-white transition-colors hover:bg-[rgba(64,196,212,0.25)]"
    >
      <span className="relative flex h-3.5 w-4 flex-col items-center justify-center">
        <span
          className={`absolute h-0.5 w-4 rounded-full bg-white transition-all duration-200 ${
            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1'
          }`}
        />
        <span
          className={`absolute h-0.5 w-4 rounded-full bg-white transition-all duration-200 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute h-0.5 w-4 rounded-full bg-white transition-all duration-200 ${
            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1'
          }`}
        />
      </span>
      <span>Telemetry</span>
    </button>
  )
}
