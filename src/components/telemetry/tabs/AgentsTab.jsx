import {
  agentData,
  driveSync,
  scribeQuality,
  sessionData,
  templateData,
} from '../../../data/telemetryMockData'

function StatusBadge({ status }) {
  const isHealthy = status === 'Healthy'
  return (
    <span
      className={`rounded-full border px-2 py-[2px] text-[9px] font-bold ${
        isHealthy
          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
          : 'border-amber-200 bg-amber-50 text-amber-700'
      }`}
    >
      {status}
    </span>
  )
}

function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={`text-[10px] font-bold uppercase tracking-wide text-slate-400 mb-1 ${className}`}
    >
      {children}
    </p>
  )
}

function StackedBar({ segments }) {
  return (
    <>
      <div className="flex h-[10px] w-full gap-[1px] overflow-hidden rounded-full">
        {segments.map((seg, index) => (
          <div
            key={seg.label}
            className={`h-full flex-none ${index === 0 ? 'rounded-l-full' : ''} ${
              index === segments.length - 1 ? 'rounded-r-full' : ''
            }`}
            style={{ width: `${seg.pct}%`, background: seg.color }}
          />
        ))}
      </div>
      <div className="mt-[5px] flex flex-wrap gap-[10px]">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-1">
            <span
              className="h-2 w-2 flex-shrink-0 rounded-sm"
              style={{ background: seg.color }}
            />
            <span className="text-[10px] font-medium text-slate-500">
              {seg.label} {seg.pct}%
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

function AgentCard({ agent, children }) {
  return (
    <div className="mb-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#0F172A]">
          {agent.emoji} {agent.name}
        </span>
        <StatusBadge status={agent.status} />
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1">
        {agent.stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-[13px] font-bold text-[#0F172A]">{stat.value}</p>
            <p className="text-[10px] font-medium text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
      {children}
    </div>
  )
}

function ScribeAgentCard({ agent }) {
  return (
    <AgentCard agent={agent}>
      <div className="mt-1 border-t border-slate-200 pt-2">
        <SectionLabel>Note quality signals</SectionLabel>
        <div className="flex justify-between items-center border-b border-slate-100 py-[5px] last:border-0">
          <span className="text-[11px] font-medium text-slate-500">Edit rate</span>
          <span className="text-[12px] font-bold text-amber-600">{scribeQuality.editRate}</span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-100 py-[5px] last:border-0">
          <span className="text-[11px] font-medium text-slate-500">Regen rate</span>
          <span className="text-[12px] font-bold text-emerald-600">{scribeQuality.regenRate}</span>
        </div>

        <SectionLabel className="mt-2 mb-1">Edit magnitude</SectionLabel>
        <StackedBar segments={scribeQuality.editMagnitude} />
      </div>
    </AgentCard>
  )
}

function SessionsCard() {
  return (
    <div>
      <SectionLabel className="mb-2">Sessions</SectionLabel>
      <div className="mb-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#0F172A]">🖥 Session activity</span>
          <span className="text-[10px] font-semibold text-slate-400">Today</span>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-[6px]">
          <div>
            <p className="text-[15px] font-bold text-[#0F172A]">{sessionData.sessionsToday}</p>
            <p className="text-[10px] font-medium text-slate-400">Sessions today</p>
          </div>
          <div>
            <p className="text-[15px] font-bold text-[#0F172A]">
              {sessionData.avgDurationMinutes}m
            </p>
            <p className="text-[10px] font-medium text-slate-400">Avg duration</p>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-2">
          <SectionLabel>Page visits</SectionLabel>
          {sessionData.pageVisits.map((visit, index) => (
            <div
              key={visit.page}
              className="mb-[5px] flex items-center gap-2 last:mb-0"
            >
              <span className="w-[80px] flex-shrink-0 text-[11px] font-medium text-slate-500">
                {visit.page}
              </span>
              <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#40C4D4]"
                  style={{
                    width: `${visit.pct}%`,
                    opacity: index === 0 ? 1 : 1 - index * 0.12,
                  }}
                />
              </div>
              <span className="w-7 flex-shrink-0 text-right text-[10px] font-semibold text-slate-400">
                {visit.visits}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TemplatesCard() {
  const statRows = [
    { label: 'Doctor edits', value: templateData.doctorEdits },
    { label: 'Scribe auto-updates', value: templateData.scribeAutoUpdates },
    { label: 'Unique templates used', value: templateData.uniqueTemplatesUsed },
  ]

  return (
    <div>
      <SectionLabel className="mb-2">Templates</SectionLabel>
      <div className="mb-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#0F172A]">📄 Template activity</span>
          <span className="text-[10px] font-semibold text-slate-400">This month</span>
        </div>
        {statRows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between border-b border-slate-100 py-[5px] last:border-0"
          >
            <span className="text-[11px] font-medium text-slate-500">{row.label}</span>
            <span className="text-[12px] font-bold text-[#0F172A]">{row.value}</span>
          </div>
        ))}
        <div className="mt-2 rounded-lg border border-[#BAE6FD] bg-[#F0F9FF] p-[8px]">
          <p className="mb-[3px] text-[10px] font-bold uppercase tracking-wide text-[#0369A1]">
            Most edited
          </p>
          <p className="text-[11px] font-semibold text-[#0F172A]">
            {templateData.mostEdited.name}
          </p>
          <p className="mt-[2px] text-[10px] text-slate-500">
            {templateData.mostEdited.edits} edits · last: {templateData.mostEdited.lastEdited} ·
            magnitude: {templateData.mostEdited.magnitude}
          </p>
        </div>
        <div className="mt-[10px]">
          <SectionLabel className="mb-1">Edit source</SectionLabel>
          <StackedBar segments={templateData.editSource} />
        </div>
      </div>
    </div>
  )
}

function DriveSyncRow({ row }) {
  const isSyncing = row.status === 'Syncing'
  return (
    <div className="mb-1 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
      <div>
        <p className="text-[11px] font-semibold text-[#0F172A]">{row.name}</p>
        <p className="font-mono text-[10px] text-slate-400">{row.queue}</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-[11px] font-semibold text-[#0F172A]">
          {row.pending} pending
        </span>
        <span
          className={`mr-1.5 h-[7px] w-[7px] rounded-full ${
            isSyncing ? 'bg-amber-400' : 'bg-emerald-400'
          }`}
        />
        <span
          className={`text-[10px] font-semibold ${
            isSyncing ? 'text-amber-600' : 'text-emerald-600'
          }`}
        >
          {row.status}
        </span>
      </div>
    </div>
  )
}

export default function AgentsTab() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="grid grid-cols-3 gap-4">
        <ScribeAgentCard agent={agentData[0]} />
        <AgentCard agent={agentData[1]} />
        <AgentCard agent={agentData[2]} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SessionsCard />
        <TemplatesCard />
      </div>

      <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
        Drive sync queue
      </p>
      {driveSync.map((row) => (
        <DriveSyncRow key={row.name} row={row} />
      ))}
    </div>
  )
}
