import { useState } from 'react'
import { practices } from '../../data/telemetryMockData'
import OverviewTab from './tabs/OverviewTab'
import AgentsTab from './tabs/AgentsTab'
import HealthTab from './tabs/HealthTab'

const TABS = ['Overview', 'Agents', 'Health']

export default function TelemetryPage() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [selectedPracticeId, setSelectedPracticeId] = useState('all')

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] font-sans">
      {/* Top bar */}
      <div className="flex h-[52px] flex-shrink-0 items-center justify-between bg-[#0F172A] px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-[14px] font-bold text-white">Halo Medical</span>
            <span className="mx-1 text-white/20">/</span>
            <span className="text-[13px] font-semibold text-[#40C4D4]">Telemetry</span>
          </div>

          <select
            value={selectedPracticeId}
            onChange={(e) => setSelectedPracticeId(e.target.value)}
            className="cursor-pointer appearance-none rounded-lg border border-white/15 bg-white/10 px-3 py-[5px] text-[12px] font-semibold text-white"
          >
            {practices.map((p) => (
              <option key={p.id} value={p.id} style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-white/50">June 2026</span>

          <div className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-[10px] py-1 text-[10px] font-semibold text-emerald-600">
            <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-emerald-400" />
            Live
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-shrink-0 border-b border-white/8 bg-[#0F172A] px-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer border-b-2 px-4 py-[10px] text-[12px] font-semibold transition-colors ${
              activeTab === tab
                ? 'border-[#40C4D4] text-[#40C4D4]'
                : 'border-transparent text-white/40'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'Overview' && <OverviewTab selectedPracticeId={selectedPracticeId} />}
        {activeTab === 'Agents' && <AgentsTab />}
        {activeTab === 'Health' && <HealthTab />}
      </div>
    </div>
  )
}
