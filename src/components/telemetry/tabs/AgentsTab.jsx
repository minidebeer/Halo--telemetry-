import { agentData, driveSync } from '../../../data/telemetryMockData'

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

function AgentCard({ agent }) {
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
    <div>
      {agentData.map((agent) => (
        <AgentCard key={agent.name} agent={agent} />
      ))}

      <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
        Drive sync queue
      </p>
      {driveSync.map((row) => (
        <DriveSyncRow key={row.name} row={row} />
      ))}
    </div>
  )
}
