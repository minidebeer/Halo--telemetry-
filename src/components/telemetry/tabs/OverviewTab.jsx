import { useState } from 'react'
import {
  practices,
  featureKeys,
  featureFilters,
  practiceBarLabels,
  coldStartPractices,
  paymentProcessing,
  zScoreTitle,
  benchmarkLegend,
  allPracticesInfoMessage,
} from '../../../data/telemetryMockData'

const COST_VIEWS = ['Internal', 'Client']

function KpiIcon({ name }) {
  const icons = {
    activity: (
      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    hash: (
      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    dollar: (
      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    users: (
      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  }
  return icons[name] || null
}

function CostRow({ label, value, valueClassName = 'text-[12px] font-bold text-[#0F172A]' }) {
  return (
    <div className="flex items-center justify-between py-[3px]">
      <span className="text-[11px] font-medium text-slate-500">{label}</span>
      <span className={valueClassName}>{value}</span>
    </div>
  )
}

function BenchmarkRow({ metric }) {
  const averageWidth = (metric.average / metric.doctorValue) * 100
  const clampedLabelLeft = Math.min(Math.max(averageWidth, 12), 88)

  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="shrink-0 text-[11px] font-medium text-slate-500">{metric.label}</span>
        <span className="text-[10px] font-semibold text-slate-400">{metric.doctorDisplay}</span>
      </div>
      <div className="relative pt-3">
        <span
          className="absolute top-0 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold text-slate-400"
          style={{ left: `${clampedLabelLeft}%` }}
        >
          Avg {metric.averageDisplay}
        </span>
        <div className="relative h-[10px] w-full rounded-full bg-slate-100">
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-slate-200 transition-all duration-300"
            style={{ width: `${averageWidth}%` }}
          />
          <div className="absolute top-0 left-0 h-full w-full rounded-full bg-[#40C4D4] transition-all duration-300" />
          <div
            className="absolute top-[-3px] h-[16px] w-[2px] -translate-x-1/2 rounded-sm bg-slate-500 transition-all duration-300"
            style={{ left: `${averageWidth}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function ZScoreChart({ zScore }) {
  return (
    <svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <defs>
        <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#40C4D4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#40C4D4" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M10,80 C30,80 40,78 50,72 C60,66 65,55 70,45 C75,35 80,20 90,14 C100,8 105,6 110,6 C115,6 120,8 130,14 C140,20 145,35 150,45 C155,55 160,66 170,72 C180,78 190,80 210,80 C230,80 260,80 270,80"
        fill="url(#curveGrad)"
        stroke="none"
      />
      <path
        d="M10,80 C30,80 40,78 50,72 C60,66 65,55 70,45 C75,35 80,20 90,14 C100,8 105,6 110,6 C115,6 120,8 130,14 C140,20 145,35 150,45 C155,55 160,66 170,72 C180,78 190,80 210,80 C230,80 260,80 270,80"
        fill="none"
        stroke="#40C4D4"
        strokeWidth="1.5"
      />
      <line x1="110" y1="6" x2="110" y2="80" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,2" />
      <text x="110" y="4" textAnchor="middle" fontSize="7" fill="#94A3B8" fontFamily="Inter,sans-serif">
        μ avg
      </text>
      <line
        x1={zScore.markerX}
        y1="74"
        x2={zScore.markerX}
        y2="80"
        stroke="#0F172A"
        strokeWidth="1.5"
        strokeDasharray="3,2"
      />
      <circle cx={zScore.markerX} cy="74" r="4" fill="#0F172A" stroke="#fff" strokeWidth="1.5" />
      <text
        x={zScore.markerX}
        y="68"
        textAnchor="middle"
        fontSize="7"
        fill="#0F172A"
        fontWeight="600"
        fontFamily="Inter,sans-serif"
      >
        {zScore.initials}
      </text>
      <line x1="10" y1="80" x2="270" y2="80" stroke="#E2E8F0" strokeWidth="1" />
      <text x="10" y="88" fontSize="7" fill="#94A3B8" fontFamily="Inter,sans-serif">
        Low
      </text>
      <text x="104" y="88" fontSize="7" fill="#94A3B8" fontFamily="Inter,sans-serif">
        Average
      </text>
      <text x="248" y="88" fontSize="7" fill="#94A3B8" fontFamily="Inter,sans-serif">
        High
      </text>
      <text x="155" y="50" fontSize="7" fill="#94A3B8" fontFamily="Inter,sans-serif">
        +1σ
      </text>
      <text x="175" y="62" fontSize="7" fill="#94A3B8" fontFamily="Inter,sans-serif">
        +2σ
      </text>
    </svg>
  )
}

export default function OverviewTab({ selectedPracticeId }) {
  const [activeFeature, setActiveFeature] = useState('All')
  const [costView, setCostView] = useState('Internal')

  const practice = practices.find((p) => p.id === selectedPracticeId) || practices[0]
  const featureKey = featureKeys[activeFeature]
  const barData = practice.featureUsage[featureKey]
  const isAllPractices = practice.id === 'all'
  const visibleColdStarts = isAllPractices
    ? coldStartPractices
    : coldStartPractices.filter((cs) => cs.practice === practice.name)

  const apiTrendColor = practice.kpis.apiTrend.startsWith('-')
    ? 'text-red-500'
    : 'text-emerald-600'
  const tokenTrendColor = practice.kpis.tokenTrend.startsWith('-')
    ? 'text-red-500'
    : 'text-emerald-600'

  const zScoreIsNegative = practice.zScore?.value?.startsWith('-')

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="grid grid-cols-4 gap-3">
        <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3">
          <div className="mb-1">
            <KpiIcon name="activity" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">API calls today</p>
          <p className="text-xl font-bold text-[#0F172A]">{practice.kpis.apiCalls}</p>
          <p className={`text-[10px] font-medium ${apiTrendColor}`}>
            {practice.kpis.apiTrend.startsWith('-') ? '↓' : '↑'} {practice.kpis.apiTrend} today
          </p>
        </div>

        <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3">
          <div className="mb-1">
            <KpiIcon name="hash" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Tokens used</p>
          <p className="text-xl font-bold text-[#0F172A]">{practice.kpis.tokens}</p>
          <p className={`text-[10px] font-medium ${tokenTrendColor}`}>
            {practice.kpis.tokenTrend.startsWith('-') ? '↓' : '↑'} {practice.kpis.tokenTrend} today
          </p>
        </div>

        <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3">
          <div className="mb-1">
            <KpiIcon name="dollar" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Est. cost</p>
          <p className="text-xl font-bold text-[#0F172A]">{practice.kpis.cost}</p>
          <p className="text-[10px] font-medium text-slate-400">
            of {practice.kpis.budget} budget
          </p>
        </div>

        <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3">
          <div className="mb-1">
            <KpiIcon name="users" />
          </div>
          {isAllPractices ? (
            <>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Active practices
              </p>
              <p className="text-xl font-bold text-[#0F172A]">{practice.kpis.active}</p>
              <p className="text-[10px] font-medium text-slate-400">
                of {practice.kpis.total} practices
              </p>
            </>
          ) : (
            <>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Avg tokens/note
              </p>
              <p className="text-xl font-bold text-[#0F172A]">{practice.kpis.avgTokensPerNote}</p>
              <p className="text-[10px] font-medium text-slate-400">avg tok/note</p>
            </>
          )}
        </div>
      </div>

      {isAllPractices && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 py-3 text-center text-[11px] font-medium text-slate-400">
          {allPracticesInfoMessage}
        </div>
      )}

      {!isAllPractices && practice.benchmark && (
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Vs halo average
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#0F172A]">{practice.name}</span>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-[2px] text-[10px] font-bold text-amber-700">
                {practice.benchmark.multiplier}
              </span>
            </div>
            {practice.benchmark.metrics.map((metric) => (
              <BenchmarkRow key={metric.label} metric={metric} />
            ))}
            <div className="mt-2 flex gap-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[#40C4D4]" />
                <span className="text-[10px] text-slate-400">{benchmarkLegend.doctor}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-slate-200" />
                <span className="text-[10px] text-slate-400">{benchmarkLegend.average}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isAllPractices && practice.zScore && (
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Usage distribution (z-score)
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#0F172A]">{zScoreTitle}</span>
              <span
                className={`rounded-full border px-2 py-[2px] text-[10px] font-bold ${
                  zScoreIsNegative
                    ? 'border-slate-200 bg-slate-100 text-slate-600'
                    : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                }`}
              >
                Z = {practice.zScore.value}
              </span>
            </div>
            <ZScoreChart zScore={practice.zScore} />
            <p className="mt-1 text-center text-[10px] font-medium text-slate-400">
              {practice.zScore.description}
            </p>
          </div>
        </div>
      )}

      {!isAllPractices && practice.cost && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#0F172A]">
              {practice.name} · {practice.cost.month}
            </span>
            <div className="flex gap-[2px] rounded-full bg-slate-200 p-[2px]">
              {COST_VIEWS.map((view) => (
                <button
                  key={view}
                  type="button"
                  onClick={() => setCostView(view)}
                  className={`cursor-pointer rounded-full px-2 py-1 text-[10px] font-semibold ${
                    costView === view
                      ? view === 'Internal'
                        ? 'bg-[#0F172A] text-white'
                        : 'bg-[#40C4D4] text-white'
                      : 'bg-transparent text-slate-500'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          {costView === 'Internal' ? (
            <div className="space-y-1">
              {practice.cost.internal.lineItems.map((item) => (
                <CostRow key={item.label} label={item.label} value={item.value} />
              ))}
              <div className="my-1 border-t border-slate-200" />
              <CostRow
                label="Halo cost"
                value={practice.cost.internal.haloCost}
                valueClassName="text-[12px] font-semibold text-[#0F172A]"
              />
              <CostRow
                label="Charged to client"
                value={practice.cost.internal.chargedToClient}
                valueClassName="text-[12px] font-semibold text-[#40C4D4]"
              />
              <div className="flex justify-end pt-1">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-[2px] text-[10px] font-bold text-emerald-700">
                  ↑ Margin: {practice.cost.internal.margin} ({practice.cost.internal.marginPct})
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              {practice.cost.client.features.map((item) => (
                <CostRow key={item.label} label={item.label} value={item.value} />
              ))}
              <div className="my-1 border-t border-slate-200" />
              <CostRow
                label="Feature subscription"
                value={practice.cost.client.featureTotal}
                valueClassName="text-[12px] font-semibold text-[#0F172A]"
              />
              <CostRow
                label="Usage this month"
                value={practice.cost.client.usage}
                valueClassName="text-[12px] font-semibold text-[#0F172A]"
              />
              <div className="flex items-center justify-between py-[3px]">
                <div className="flex items-center gap-[5px]">
                  <span className="text-[11px] font-medium text-slate-500">
                    {paymentProcessing.label}
                  </span>
                  <span className="rounded-full bg-slate-100 px-[7px] py-[2px] text-[10px] font-semibold text-slate-400">
                    {paymentProcessing.status}
                  </span>
                </div>
                <span className="text-[12px] font-bold text-slate-400">{paymentProcessing.display}</span>
              </div>
              <div className="my-1 border-t border-slate-200" />
              <CostRow
                label="Total due"
                value={`${practice.cost.client.total} ${paymentProcessing.display}`}
                valueClassName="text-sm font-semibold text-[#40C4D4]"
              />
            </div>
          )}
        </div>
      )}

      {visibleColdStarts.map((coldStart) => {
        const progressPercent = (coldStart.daysCurrent / coldStart.daysTotal) * 100
        return (
          <div
            key={coldStart.practice}
            className="rounded-xl border border-[#BAE6FD] bg-[#F0F9FF] p-3"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#0F172A]">
                {coldStart.practice} · Cold-start
              </span>
              <span className="rounded-full bg-[#E0F2FE] px-2 py-[2px] text-[10px] font-bold text-[#0369A1]">
                {coldStart.daysLeft} days left
              </span>
            </div>

            <div className="h-[7px] w-full overflow-hidden rounded-full bg-[#E0F2FE]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#40C4D4] to-[#0EA5E9] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="mt-1.5 flex justify-between">
              <span className="text-[10px] font-medium text-slate-400">Day 0</span>
              <span className="text-[10px] font-medium text-slate-400">
                Day {coldStart.daysCurrent} today
              </span>
              <span className="text-[10px] font-medium text-slate-400">Day {coldStart.daysTotal}</span>
            </div>

            <p className="mt-1 text-[10px] font-medium text-slate-500">{coldStart.footerText}</p>
          </div>
        )
      })}

      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
          Usage by practice
        </p>
        <div className="mb-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Filter by feature
          </p>
          <div className="flex flex-wrap gap-[5px]">
            {featureFilters.map((feature) => (
              <button
                key={feature}
                type="button"
                onClick={() => setActiveFeature(feature)}
                className={`cursor-pointer rounded-full border px-[10px] py-[4px] text-[10px] font-semibold transition-all ${
                  activeFeature === feature
                    ? 'border-[#0F172A] bg-[#0F172A] text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-500'
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2.5">
          {practiceBarLabels.map((label, i) => {
            const width = barData[i]
            if (width === 0) return null
            return (
              <div key={label} className="flex items-center gap-2">
                <span className="w-[95px] shrink-0 truncate text-[11px] font-medium text-slate-500">
                  {label}
                </span>
                <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#40C4D4] transition-all duration-300"
                    style={{ width: `${width}%` }}
                  />
                </div>
                <span className="w-8 shrink-0 text-right text-[11px] font-medium text-slate-400">
                  {width}%
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
