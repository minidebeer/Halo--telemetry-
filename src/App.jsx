import { useState } from 'react'
import TelemetryButton from './components/telemetry/TelemetryButton'
import TelemetryDrawer from './components/telemetry/TelemetryDrawer'

const NAV_ITEMS = ['Dashboard', 'Clients', 'Tasks', 'Billing']

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="flex h-12 items-center justify-between bg-[#0F172A] px-4 font-sans text-white">
        <span className="text-sm font-semibold text-white">Halo HQ</span>

        <div className="hidden items-center gap-6 sm:flex">
          {NAV_ITEMS.map((item, index) => (
            <span
              key={item}
              className={`cursor-default text-sm ${
                index === 0
                  ? 'border-b-2 border-[#40C4D4] pb-0.5 text-white'
                  : 'text-white/90'
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <TelemetryButton
            isOpen={isDrawerOpen}
            onToggle={() => setIsDrawerOpen((prev) => !prev)}
          />
          <div className="h-8 w-8 rounded-full bg-white/20" />
        </div>
      </nav>

      <div
        className={`p-6 transition-opacity ${
          isDrawerOpen ? 'pointer-events-none opacity-40' : 'opacity-100'
        }`}
      >
        <div className="mb-4 h-8 w-48 rounded bg-gray-200" />
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="h-24 rounded bg-gray-200" />
          <div className="h-24 rounded bg-gray-200" />
          <div className="h-24 rounded bg-gray-200" />
        </div>
        <div className="mb-4 h-4 w-full max-w-md rounded bg-gray-200" />
        <div className="mb-4 h-4 w-full max-w-lg rounded bg-gray-200" />
        <div className="h-4 w-full max-w-sm rounded bg-gray-200" />
        <div className="mt-6 h-40 rounded bg-gray-200" />
      </div>

      <TelemetryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  )
}
