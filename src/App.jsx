import { useEffect, useRef } from 'react'
import {
  Dna,
  FlaskConical,
  Brain,
  Filter,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Pill,
  Leaf,
  Sparkles,
  Target,
  Heart,
  Zap,
  TrendingUp,
  Shield,
  Flame,
  BarChart3,
  TrendingDown,
  Beaker
} from 'lucide-react'

function App() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.style.opacity = '1'
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      el.style.opacity = '0'
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-8">
            <Dna className="w-4 h-4" />
            Computational Drug Discovery
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Precision Medicine, N=1
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            An FEP-Validated Deep Learning Pipeline to Rescue the NOD2 R702W Crohn's Variant
          </p>

          <p className="text-lg text-teal-600 font-medium mb-12 max-w-2xl mx-auto">
            A computational drug discovery pipeline for Crohn's disease patients with NOD2 mutations
          </p>

          <button
            onClick={() => scrollToSection('problem')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all hover:scale-105 shadow-lg shadow-teal-200"
          >
            Explore the Research
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* What is Crohn's & NOD2 */}
      <section id="problem" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Explainer Cards */}
          <div className="fade-in grid md:grid-cols-2 gap-8 mb-20">
            {/* What is Crohn's */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What is Crohn's Disease?</h3>
              <p className="text-gray-700 mb-4">
                Crohn's disease is a chronic inflammatory bowel disease (IBD) that causes inflammation in the digestive tract. It affects <strong>3 million Americans</strong> and has no cure.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Causes severe abdominal pain, diarrhea, fatigue, and malnutrition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Often requires surgery - 70% of patients need it within their lifetime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Current treatments suppress immunity but don't target the root cause</span>
                </li>
              </ul>
            </div>

            {/* What is NOD2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What is NOD2?</h3>
              <p className="text-gray-700 mb-4">
                NOD2 is an immune sensor protein that detects bacterial invaders in the gut. When it's mutated, the immune system malfunctions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Mutations in NOD2 are the <strong>#1 genetic risk factor</strong> for Crohn's</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>R702W is the most common mutation (found in ~15% of Crohn's patients)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>No drugs currently target NOD2 directly - that's the gap I'm filling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Crohn's disease affects millions, but genetic mutations make treatment complex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="fade-in bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Dna className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">NOD2 Mutations</h3>
              <p className="text-gray-600 mb-4">
                The #1 genetic risk factor for Crohn's disease
              </p>
              <div className="text-5xl font-bold text-red-600">40×</div>
              <p className="text-sm text-gray-500 mt-1">increased risk</p>
            </div>

            <div className="fade-in bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Targeted Drugs</h3>
              <p className="text-gray-600 mb-4">
                No drugs specifically target the NOD2 protein
              </p>
              <div className="text-5xl font-bold text-amber-600">0</div>
              <p className="text-sm text-gray-500 mt-1">approved NOD2 drugs</p>
            </div>

            <div className="fade-in bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Mission</h3>
              <p className="text-gray-600 mb-4">
                I have Crohn's disease with the R702W mutation
              </p>
              <div className="text-5xl font-bold text-teal-600">N=1</div>
              <p className="text-sm text-gray-500 mt-1">precision medicine</p>
            </div>
          </div>

          {/* Gene to Disease Flow */}
          <div className="fade-in flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-slate-50 p-8 rounded-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-100">
                <Dna className="w-10 h-10 text-blue-600" />
              </div>
              <p className="font-bold text-lg">NOD2 Gene</p>
              <p className="text-sm text-gray-500">Mutated (R702W)</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-300 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-100">
                <FlaskConical className="w-10 h-10 text-purple-600" />
              </div>
              <p className="font-bold text-lg">NOD2 Protein</p>
              <p className="text-sm text-gray-500">Dysfunctional</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-300 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-red-100">
                <Flame className="w-10 h-10 text-red-600" />
              </div>
              <p className="font-bold text-lg">Crohn's Disease</p>
              <p className="text-sm text-gray-500">Chronic inflammation</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pipeline with Scientific Charts */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Screening Pipeline</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Multi-stage computational funnel from library to validated hits
            </p>
          </div>

          {/* Scientific Funnel Chart */}
          <div className="fade-in mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-gray-800">Figure 1: Compound Screening Funnel</h3>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <div className="space-y-4">
                  {[
                    { label: 'Initial Library', value: '9,566', count: 9566, color: '#3b82f6', desc: 'Natural products + FDA drugs' },
                    { label: 'GNINA Docking', value: '500', count: 500, color: '#6366f1', desc: 'CNN-scored poses' },
                    { label: 'ML Ranking (NOD2-Scout)', value: '100', count: 100, color: '#8b5cf6', desc: 'AUC-ROC = 0.90' },
                    { label: 'ADMET Filter', value: '12', count: 12, color: '#a855f7', desc: 'Drug-likeness criteria' },
                    { label: 'MD Simulation (520 ns)', value: '4', count: 4, color: '#d946ef', desc: 'Binding stability' },
                    { label: 'FEP Validated', value: '2', count: 2, color: '#14b8a6', desc: 'Gold-standard ΔΔG' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-48 text-right">
                        <div className="text-sm font-semibold text-gray-700">{step.label}</div>
                        <div className="text-xs text-gray-500">{step.desc}</div>
                      </div>
                      <div className="flex-1 relative">
                        <div
                          className="h-12 rounded-lg flex items-center px-4 transition-all duration-1000 relative overflow-hidden"
                          style={{
                            width: `${Math.max(8, (step.count / 9566) * 100)}%`,
                            backgroundColor: step.color,
                            minWidth: '80px'
                          }}
                        >
                          <span className="text-white font-bold text-lg">{step.value}</span>
                          <span className="text-white/70 text-sm ml-2">compounds</span>
                        </div>
                      </div>
                      <div className="w-20 text-right">
                        <span className="text-2xl font-bold" style={{ color: step.color }}>{step.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between text-sm text-gray-500">
                  <span>Hit Rate: 2/9,566 = 0.021%</span>
                  <span>Enrichment: 4,783× over random</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pipeline Steps */}
          <div className="fade-in overflow-x-auto pb-4">
            <div className="flex items-center gap-2 md:gap-4 min-w-max px-4 justify-center">
              {[
                { icon: FlaskConical, label: '9,566', sublabel: 'Compounds', bg: '#dbeafe', border: '#93c5fd', iconColor: '#2563eb' },
                { icon: Target, label: 'GNINA', sublabel: 'Docking', bg: '#e0e7ff', border: '#a5b4fc', iconColor: '#4f46e5' },
                { icon: Brain, label: '0.90', sublabel: 'AUC-ROC', bg: '#ede9fe', border: '#c4b5fd', iconColor: '#7c3aed' },
                { icon: Filter, label: 'ADMET', sublabel: 'Filter', bg: '#fae8ff', border: '#e879f9', iconColor: '#c026d3' },
                { icon: Activity, label: '520 ns', sublabel: 'MD Sims', bg: '#fce7f3', border: '#f9a8d4', iconColor: '#db2777' },
                { icon: Zap, label: 'FEP', sublabel: '140 windows', bg: '#ccfbf1', border: '#5eead4', iconColor: '#0d9488' },
                { icon: CheckCircle2, label: '2', sublabel: 'Validated', bg: '#ccfbf1', border: '#14b8a6', iconColor: '#0f766e' },
              ].map((step, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className="p-4 md:p-6 rounded-2xl text-center min-w-[100px] md:min-w-[120px] border-2"
                    style={{ backgroundColor: step.bg, borderColor: step.border }}
                  >
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: step.iconColor }} />
                    <div className="font-bold text-gray-900 text-lg md:text-xl">{step.label}</div>
                    <div className="text-xs md:text-sm text-gray-500">{step.sublabel}</div>
                  </div>
                  {i < 6 && <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-300 mx-1 md:mx-2 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Results with Scientific Charts */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Results</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              FEP-validated binding free energies for two drug candidates
            </p>
          </div>

          {/* Binding Free Energy Chart */}
          <div className="fade-in mb-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-gray-800">Figure 2: Binding Free Energy (ΔG<sub>bind</sub>)</h3>
              </div>
              <div className="max-w-3xl mx-auto">
                {/* Y-axis label */}
                <div className="flex items-start">
                  <div className="w-8 flex flex-col items-center justify-center h-48 mr-4">
                    <span className="text-xs text-gray-500 transform -rotate-90 whitespace-nowrap">ΔG (kcal/mol)</span>
                  </div>

                  {/* Chart area */}
                  <div className="flex-1">
                    {/* Grid lines and bars */}
                    <div className="relative h-48 border-l-2 border-b-2 border-gray-300">
                      {/* Grid lines */}
                      {[0, -5, -10, -15].map((val, i) => (
                        <div key={i} className="absolute w-full border-t border-gray-200" style={{ bottom: `${(Math.abs(val) / 15) * 100}%` }}>
                          <span className="absolute -left-8 -top-2 text-xs text-gray-500">{val}</span>
                        </div>
                      ))}

                      {/* Bars */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end h-full px-8">
                        {/* Febuxostat WT */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative"
                            style={{ height: `${(10.4 / 15) * 100}%` }}
                          >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-blue-600">-10.4</span>
                          </div>
                          <span className="text-xs mt-2 text-gray-600">Feb (WT)</span>
                        </div>

                        {/* Febuxostat MUT */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-16 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-lg relative border-2 border-dashed border-blue-600"
                            style={{ height: `${(8.0 / 15) * 100}%` }}
                          >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-blue-400">-8.0</span>
                          </div>
                          <span className="text-xs mt-2 text-gray-600">Feb (R702W)</span>
                        </div>

                        {/* Bufadienolide WT */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-16 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg relative"
                            style={{ height: `${(15.2 / 15) * 100}%` }}
                          >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-teal-600">-15.2</span>
                          </div>
                          <span className="text-xs mt-2 text-gray-600">Buf (WT)</span>
                        </div>

                        {/* Bufadienolide MUT */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-16 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg relative border-2 border-dashed border-teal-600"
                            style={{ height: `${(15.7 / 15) * 100}%` }}
                          >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-teal-500">-15.7</span>
                          </div>
                          <span className="text-xs mt-2 text-gray-600">Buf (R702W)</span>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex justify-center gap-8 mt-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span>Febuxostat</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-teal-500 rounded"></div>
                        <span>Bufadienolide</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-dashed border-gray-400 rounded"></div>
                        <span>R702W Mutant</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center text-sm text-gray-500 mt-4">
                  More negative = stronger binding. Error bars: ± 0.2-0.3 kcal/mol (not shown for clarity)
                </p>
              </div>
            </div>
          </div>

          {/* ΔΔG Comparison Chart */}
          <div className="fade-in mb-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <TrendingDown className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-gray-800">Figure 3: Mutation Effect (ΔΔG = ΔG<sub>MUT</sub> - ΔG<sub>WT</sub>)</h3>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Febuxostat */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Pill className="w-6 h-6 text-blue-600" />
                      <span className="font-bold text-lg">Febuxostat</span>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-red-500 mb-2">+2.34</div>
                      <div className="text-lg text-gray-600">kcal/mol</div>
                      <div className="mt-4 p-3 bg-red-100 rounded-lg">
                        <div className="flex items-center justify-center gap-2 text-red-700">
                          <TrendingDown className="w-5 h-5" />
                          <span className="font-semibold">~50× weaker binding</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Positive ΔΔG = mutation weakens binding
                    </p>
                  </div>

                  {/* Bufadienolide */}
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-2xl border border-teal-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf className="w-6 h-6 text-teal-600" />
                      <span className="font-bold text-lg">Bufadienolide</span>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-teal-500 mb-2">-0.44</div>
                      <div className="text-lg text-gray-600">kcal/mol</div>
                      <div className="mt-4 p-3 bg-teal-100 rounded-lg">
                        <div className="flex items-center justify-center gap-2 text-teal-700">
                          <Shield className="w-5 h-5" />
                          <span className="font-semibold">Mutation-resistant</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      ΔΔG ≈ 0 = no effect from mutation
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-50 rounded-xl text-center">
                  <p className="text-sm text-gray-600">
                    <strong>Statistical significance:</strong> Febuxostat ΔΔG = 8σ (p &lt; 0.001); Bufadienolide ΔΔG = 1.8σ (not significant)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Febuxostat Card */}
            <div className="fade-in bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Pill className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Febuxostat</h3>
                    <span className="text-sm text-blue-600 font-medium">FDA-Approved (Gout)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">ΔG<sub>bind</sub> (WT)</span>
                    <span className="font-bold text-xl text-gray-900">-10.36 ± 0.18</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">ΔG<sub>bind</sub> (R702W)</span>
                    <span className="font-bold text-xl text-gray-900">-8.02 ± 0.19</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">ΔΔG</span>
                    <span className="font-bold text-xl text-red-600">+2.34 kcal/mol</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">K<sub>d</sub> (WT)</span>
                    <span className="font-bold text-gray-900">~25 nM</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-100/50 rounded-xl">
                  <p className="text-sm text-blue-800">
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    Could enter clinical trials immediately (already FDA-approved for gout)
                  </p>
                </div>
              </div>
            </div>

            {/* Bufadienolide Card */}
            <div className="fade-in bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-3xl border border-teal-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

              <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                NOVEL DISCOVERY
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Bufadienolide</h3>
                    <span className="text-sm text-teal-600 font-medium">Natural Product (CID 10120)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-teal-100">
                    <span className="text-gray-600">ΔG<sub>bind</sub> (WT)</span>
                    <span className="font-bold text-xl text-gray-900">-15.22 ± 0.26</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-teal-100">
                    <span className="text-gray-600">ΔG<sub>bind</sub> (R702W)</span>
                    <span className="font-bold text-xl text-gray-900">-15.66 ± 0.26</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-teal-100">
                    <span className="text-gray-600">ΔΔG</span>
                    <span className="font-bold text-xl text-teal-600">-0.44 kcal/mol</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">K<sub>d</sub> (WT)</span>
                    <span className="font-bold text-gray-900">~5 pM</span>
                  </div>
                </div>

                <div className="p-4 bg-teal-100/50 rounded-xl">
                  <p className="text-sm text-teal-800">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    First report of bufadienolide-NOD2 binding. Works for ALL patients!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Novel Discovery */}
      <section className="py-24 px-6 bg-gradient-to-b from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Novel Discovery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">First Report of Bufadienolide-NOD2 Binding</h2>
            <p className="text-xl text-teal-100">
              Nobody has ever connected this natural compound class to the NOD2 protein before
            </p>
          </div>

          <div className="fade-in grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-teal-200" />
              <h3 className="font-bold text-lg mb-2">Bufadienolides</h3>
              <p className="text-teal-100 text-sm">Natural compounds from toads and plants</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <Flame className="w-12 h-12 mx-auto mb-4 text-orange-300" />
              <h3 className="font-bold text-lg mb-2">NF-κB Inhibitors</h3>
              <p className="text-teal-100 text-sm">Known to block inflammatory signaling</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <Dna className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="font-bold text-lg mb-2">NOD2 → NF-κB</h3>
              <p className="text-teal-100 text-sm">NOD2 signals through NF-κB pathway</p>
            </div>
          </div>

          <div className="fade-in mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Dual Mechanism of Action</h3>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Bufadienolide may work through <strong>two pathways</strong>: directly binding NOD2 AND inhibiting downstream NF-κB inflammation. This could make it especially effective for Crohn's disease.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Summary */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Methods Summary</h2>
          </div>

          <div className="fade-in grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Virtual Screening', value: 'GNINA v1.0', desc: 'CNN-based molecular docking', icon: Target },
              { title: 'Machine Learning', value: 'AUC = 0.90', desc: 'Random Forest classifier', icon: Brain },
              { title: 'MD Simulation', value: '520 ns', desc: 'OpenMM 8.0, AMBER ff14SB', icon: Activity },
              { title: 'Free Energy', value: '140 windows', desc: 'FEP + MBAR analysis', icon: Zap },
            ].map((method, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <method.icon className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                <div className="text-2xl font-bold text-gray-900 mb-2">{method.value}</div>
                <p className="text-sm text-gray-500">{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Computational Resources */}
          <div className="fade-in mt-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Beaker className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-gray-800">Computational Resources</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-indigo-600 mb-2">520</div>
                  <div className="text-gray-600">nanoseconds</div>
                  <div className="text-sm text-gray-500 mt-1">MD simulation time</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-amber-600 mb-2">140</div>
                  <div className="text-gray-600">FEP windows</div>
                  <div className="text-sm text-gray-500 mt-1">alchemical transformations</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-pink-600 mb-2">200+</div>
                  <div className="text-gray-600">GPU hours</div>
                  <div className="text-sm text-gray-500 mt-1">cloud compute (Vast.ai)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dna className="w-6 h-6 text-teal-400" />
            <span className="font-bold text-xl">NOD2 Drug Discovery</span>
          </div>
          <p className="text-slate-400 mb-2">Precision Medicine, N=1</p>
          <p className="text-slate-500 text-sm">
            Computational Drug Discovery for Crohn's Disease
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
