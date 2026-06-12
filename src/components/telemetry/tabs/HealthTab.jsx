import { healthEndpoints, scribePipeline, weeklyStats } from '../../../data/telemetryMockData'

function EndpointIcon({ name }) {
  const icons = {
    brain: (
      <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    microphone: (
      <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    'file-text': (
      <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    mail: (
      <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  }
  return icons[name] || null
}

function PipelineRow({ row }) {
  const isHealthy = row.status === 'Healthy'
  return (
    <div className="flex items-center justify-between rounded-md border border-[#E2E8F0] bg-[#F8FAFC] p-2.5">
      <span className="text-xs font-medium text-[#0F172A]">{row.name}</span>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-medium text-slate-400">{row.value}</span>
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: isHealthy ? '#22C55E' : '#F59E0B' }}
        />
        <span
          className={`text-[10px] font-medium ${
            isHealthy ? 'text-emerald-700' : 'text-amber-800'
          }`}
        >
          {row.label}
        </span>
      </div>
    </div>
  )
}

export default function HealthTab() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-wide text-gray-500">
            Endpoint status
          </p>
          <div className="space-y-2">
            {healthEndpoints.map((endpoint) => {
              const isHealthy = endpoint.status === 'healthy'
              return (
                <div
                  key={endpoint.name}
                  className="flex items-center justify-between rounded-md border border-[#E2E8F0] bg-[#F8FAFC] p-2.5"
                >
                  <div className="flex items-center gap-2">
                    <EndpointIcon name={endpoint.icon} />
                    <span className="text-xs font-medium text-[#0F172A]">{endpoint.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-medium text-slate-400">{endpoint.response}</span>
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: isHealthy ? '#22C55E' : '#F59E0B' }}
                    />
                    <span
                      className={`text-[10px] font-medium ${
                        isHealthy ? 'text-emerald-700' : 'text-amber-800'
                      }`}
                    >
                      {isHealthy ? 'Healthy' : 'Degraded'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Scribe pipeline
          </p>
          <div className="space-y-2">
            {scribePipeline.map((row) => (
              <PipelineRow key={row.name} row={row} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-wide text-slate-400">
          This week
        </p>
        <div className="space-y-2">
          {weeklyStats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">{stat.label}</span>
              <span
                className={`text-[11px] font-bold ${
                  stat.danger ? 'text-red-600' : 'text-[#0F172A]'
                }`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
