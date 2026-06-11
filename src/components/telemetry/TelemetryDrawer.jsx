import { useState } from 'react'
import OverviewTab from './tabs/OverviewTab'
import AgentsTab from './tabs/AgentsTab'
import HealthTab from './tabs/HealthTab'
import { practices } from '../../data/telemetryMockData'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'agents', label: 'Agents' },
  { id: 'health', label: 'Health' },
]

export default function TelemetryDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedPracticeId, setSelectedPracticeId] = useState('all')
  const selectedPractice = practices.find((p) => p.id === selectedPracticeId)
  const isAllPractices = selectedPracticeId === 'all'

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className="fixed top-0 right-0 z-50 flex h-full w-[300px] flex-col border-l border-[#E2E8F0] bg-white shadow-xl"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-[#40C4D4]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="font-sans text-sm font-semibold text-[#0F172A]">Telemetry</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-gray-400 transition-colors hover:bg-slate-50 hover:text-gray-600"
            aria-label="Close drawer"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="border-b border-gray-200 px-4 py-3">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Viewing practice
          </p>
          <div className="relative">
            <select
              value={selectedPracticeId}
              onChange={(e) => setSelectedPracticeId(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-semibold text-[#0F172A]"
            >
              {practices.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#40C4D4]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p className="mt-1 text-[10px] font-medium text-slate-400">
            {isAllPractices
              ? `${selectedPractice.kpis.active} of ${selectedPractice.kpis.total} active today`
              : `Viewing ${selectedPractice.name}`}
          </p>
        </div>

        <div className="flex border-b border-gray-200">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-[#40C4D4] text-[#40C4D4]'
                  : 'text-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'overview' && <OverviewTab selectedPracticeId={selectedPracticeId} />}
          {activeTab === 'agents' && <AgentsTab />}
          {activeTab === 'health' && <HealthTab />}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
          <span className="cursor-pointer text-[11px] font-semibold text-[#40C4D4]">
            → Full dashboard
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] font-semibold text-emerald-600">Live</span>
          </div>
        </div>
      </div>
    </>
  )
}
