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
  Flame
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

  // Bar Chart Component
  const BarChart = ({ data, title, unit = '', color = 'teal' }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h4 className="font-semibold text-gray-700 mb-4">{title}</h4>
      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-semibold">{item.value}{unit}</span>
            </div>
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.color || `var(--color-${color}-500, #14b8a6)`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-8">
            <Dna className="w-4 h-4" />
            ISEF 2026 Project
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
            Learn More
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
              <div className="text-5xl font-bold text-red-600">40x</div>
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

      {/* The Pipeline */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Pipeline</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From 9,566 compounds to 2 validated drug candidates
            </p>
          </div>

          {/* Pipeline Funnel Visualization */}
          <div className="fade-in mb-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Funnel bars */}
              <div className="space-y-3">
                {[
                  { label: 'Initial Library', value: '9,566', width: '100%', color: '#3b82f6' },
                  { label: 'After Docking (GNINA)', value: '500', width: '60%', color: '#6366f1' },
                  { label: 'After ML Ranking', value: '100', width: '40%', color: '#8b5cf6' },
                  { label: 'After ADMET Filter', value: '12', width: '25%', color: '#a855f7' },
                  { label: 'After MD Simulation', value: '4', width: '15%', color: '#d946ef' },
                  { label: 'FEP Validated', value: '2', width: '8%', color: '#14b8a6' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-40 text-right text-sm font-medium text-gray-600">{step.label}</div>
                    <div className="flex-1 relative">
                      <div
                        className="h-10 rounded-lg flex items-center justify-end pr-4 transition-all duration-1000"
                        style={{ width: step.width, backgroundColor: step.color }}
                      >
                        <span className="text-white font-bold text-sm">{step.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pipeline Steps */}
          <div className="fade-in overflow-x-auto pb-4">
            <div className="flex items-center gap-2 md:gap-4 min-w-max px-4 justify-center">
              {[
                { icon: FlaskConical, label: '9,566', sublabel: 'Compounds', bg: '#dbeafe', border: '#93c5fd', iconColor: '#2563eb' },
                { icon: Target, label: 'GNINA', sublabel: 'Docking', bg: '#e0e7ff', border: '#a5b4fc', iconColor: '#4f46e5' },
                { icon: Brain, label: '0.90 AUC', sublabel: 'ML Model', bg: '#ede9fe', border: '#c4b5fd', iconColor: '#7c3aed' },
                { icon: Filter, label: 'ADMET', sublabel: 'Drug Filter', bg: '#fae8ff', border: '#e879f9', iconColor: '#c026d3' },
                { icon: Activity, label: '520 ns', sublabel: 'MD Sims', bg: '#fce7f3', border: '#f9a8d4', iconColor: '#db2777' },
                { icon: Zap, label: 'FEP', sublabel: 'Validation', bg: '#ccfbf1', border: '#5eead4', iconColor: '#0d9488' },
                { icon: CheckCircle2, label: '2 Hits', sublabel: 'Validated', bg: '#ccfbf1', border: '#14b8a6', iconColor: '#0f766e' },
              ].map((step, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className="p-4 md:p-6 rounded-2xl text-center min-w-[100px] md:min-w-[120px] border-2"
                    style={{ backgroundColor: step.bg, borderColor: step.border }}
                  >
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: step.iconColor }} />
                    <div className="font-bold text-gray-900 text-sm md:text-base">{step.label}</div>
                    <div className="text-xs md:text-sm text-gray-500">{step.sublabel}</div>
                  </div>
                  {i < 6 && <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-300 mx-1 md:mx-2 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Results with Charts */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Results</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Two validated drug candidates with very different profiles
            </p>
          </div>

          {/* Binding Affinity Comparison Chart */}
          <div className="fade-in mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-center">Binding Affinity Comparison (kcal/mol)</h3>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  {/* Bufadienolide */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-teal-600" />
                        <span className="font-semibold">Bufadienolide (Natural)</span>
                      </div>
                      <span className="font-bold text-teal-600">-15.2 kcal/mol</span>
                    </div>
                    <div className="h-10 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" style={{ width: '100%' }} />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Stronger binding = better drug</p>
                  </div>

                  {/* Febuxostat */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <Pill className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">Febuxostat (FDA Drug)</span>
                      </div>
                      <span className="font-bold text-blue-600">-10.4 kcal/mol</span>
                    </div>
                    <div className="h-10 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
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

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-blue-100">
                    <span className="text-gray-600">Binding Affinity</span>
                    <span className="font-bold text-gray-900">-10.4 kcal/mol</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-blue-100">
                    <span className="text-gray-600">In R702W Mutant</span>
                    <span className="font-bold text-amber-600">50x weaker</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Status</span>
                    <span className="font-bold text-blue-600">Trial-ready</span>
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

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-teal-100">
                    <span className="text-gray-600">Binding Affinity</span>
                    <span className="font-bold text-gray-900">-15.2 kcal/mol</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-teal-100">
                    <span className="text-gray-600">In R702W Mutant</span>
                    <span className="font-bold text-teal-600 flex items-center gap-1">
                      <Shield className="w-4 h-4" /> Mutation-resistant
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Status</span>
                    <span className="font-bold text-teal-600">First ever report</span>
                  </div>
                </div>

                <div className="p-4 bg-teal-100/50 rounded-xl">
                  <p className="text-sm text-teal-800">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Works for ALL patients regardless of mutation status!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mutation Effect Chart */}
          <div className="fade-in mt-12">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-center">Mutation Effect on Drug Binding</h3>
              <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-500 mb-2">-50x</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Pill className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Febuxostat</span>
                  </div>
                  <p className="text-sm text-gray-500">Binding weakened by R702W mutation</p>
                  <div className="mt-4 h-4 bg-gray-100 rounded-full overflow-hidden max-w-xs mx-auto">
                    <div className="h-full bg-gradient-to-r from-red-300 to-red-500 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-teal-500 mb-2">0x</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Leaf className="w-5 h-5 text-teal-600" />
                    <span className="font-semibold">Bufadienolide</span>
                  </div>
                  <p className="text-sm text-gray-500">No effect from mutation</p>
                  <div className="mt-4 h-4 bg-gray-100 rounded-full overflow-hidden max-w-xs mx-auto">
                    <div className="h-full bg-gradient-to-r from-teal-300 to-teal-500 rounded-full" style={{ width: '100%' }} />
                  </div>
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

      {/* By The Numbers */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {[
              { value: '9,566', label: 'Compounds Screened', icon: FlaskConical, color: 'blue' },
              { value: '0.90', label: 'ML Model AUC', icon: Brain, color: 'purple' },
              { value: '520', label: 'ns Simulation', icon: Activity, color: 'pink' },
              { value: '140', label: 'FEP Windows', icon: Zap, color: 'amber' },
              { value: '2', label: 'Validated Hits', icon: CheckCircle2, color: 'teal' },
            ].map((stat, i) => (
              <div key={i} className="fade-in text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center`}
                     style={{ backgroundColor: `var(--color-${stat.color}-100, #dbeafe)` }}>
                  <stat.icon className="w-8 h-8" style={{ color: `var(--color-${stat.color}-600, #2563eb)` }} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mini visualization */}
          <div className="fade-in mt-16 max-w-2xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h4 className="font-semibold text-center mb-4 text-gray-700">Computational Resources</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 w-32">MD Simulation</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full" style={{ width: '85%' }} />
                  </div>
                  <span className="text-sm font-semibold">520 ns</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 w-32">FEP Windows</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" style={{ width: '70%' }} />
                  </div>
                  <span className="text-sm font-semibold">140</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 w-32">GPU Hours</span>
                  <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full" style={{ width: '60%' }} />
                  </div>
                  <span className="text-sm font-semibold">200+</span>
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
          <p className="text-slate-400 mb-2">ISEF 2026</p>
          <p className="text-slate-500 text-sm">
            Precision Medicine, N=1
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
