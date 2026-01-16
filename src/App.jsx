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
  AlertTriangle,
  Sparkles,
  Target,
  Microscope,
  Heart,
  User,
  BarChart3,
  Zap
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
            ISEF 2026 Project
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Precision Medicine, N=1
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            An FEP-Validated Deep Learning Pipeline to Rescue the NOD2 R702W Crohn's Variant
          </p>

          <p className="text-lg text-teal-600 font-medium mb-12 max-w-2xl mx-auto">
            Finding drugs for Crohn's disease patients with NOD2 mutations using AI and computational chemistry
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

      {/* The Problem */}
      <section id="problem" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
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
              <div className="text-4xl font-bold text-red-600">40x</div>
              <p className="text-sm text-gray-500">increased risk</p>
            </div>

            <div className="fade-in bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Targeted Drugs</h3>
              <p className="text-gray-600 mb-4">
                No drugs specifically target the NOD2 protein
              </p>
              <div className="text-4xl font-bold text-amber-600">0</div>
              <p className="text-sm text-gray-500">approved NOD2 drugs</p>
            </div>

            <div className="fade-in bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Mission</h3>
              <p className="text-gray-600 mb-4">
                I have Crohn's disease with the R702W mutation
              </p>
              <div className="text-4xl font-bold text-teal-600">N=1</div>
              <p className="text-sm text-gray-500">precision medicine</p>
            </div>
          </div>

          {/* Gene to Disease Flow */}
          <div className="fade-in flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-slate-50 p-8 rounded-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Dna className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold">NOD2 Gene</p>
              <p className="text-sm text-gray-500">Mutated</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <FlaskConical className="w-8 h-8 text-purple-600" />
              </div>
              <p className="font-semibold">NOD2 Protein</p>
              <p className="text-sm text-gray-500">Dysfunctional</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Activity className="w-8 h-8 text-red-600" />
              </div>
              <p className="font-semibold">Crohn's Disease</p>
              <p className="text-sm text-gray-500">Inflammation</p>
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

          <div className="fade-in overflow-x-auto pb-4">
            <div className="flex items-center gap-4 min-w-max px-4">
              {[
                { icon: FlaskConical, label: '9,566', sublabel: 'Compounds', color: 'blue' },
                { icon: Target, label: 'GNINA', sublabel: 'Docking', color: 'indigo' },
                { icon: Brain, label: '0.90 AUC', sublabel: 'NOD2-Scout ML', color: 'purple' },
                { icon: Filter, label: 'ADMET', sublabel: 'Drug Filter', color: 'pink' },
                { icon: Activity, label: '520 ns', sublabel: 'MD Simulation', color: 'orange' },
                { icon: Zap, label: 'FEP', sublabel: 'Validation', color: 'amber' },
                { icon: CheckCircle2, label: '2 Hits', sublabel: 'Validated', color: 'teal' },
              ].map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className={`bg-${step.color}-50 border border-${step.color}-200 p-6 rounded-2xl text-center min-w-[120px]`}
                       style={{
                         backgroundColor: `var(--color-${step.color}-50, #f0f9ff)`,
                         borderColor: `var(--color-${step.color}-200, #bae6fd)`
                       }}>
                    <step.icon className={`w-8 h-8 mx-auto mb-2`} style={{ color: `var(--color-${step.color}-600, #0284c7)` }} />
                    <div className="font-bold text-gray-900">{step.label}</div>
                    <div className="text-sm text-gray-500">{step.sublabel}</div>
                  </div>
                  {i < 6 && <ArrowRight className="w-6 h-6 text-gray-300 mx-2 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Results</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Two validated drug candidates with very different profiles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Febuxostat Card */}
            <div className="fade-in bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Pill className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Febuxostat</h3>
                    <span className="text-sm text-blue-600 font-medium">FDA-Approved (Gout)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-blue-100">
                    <span className="text-gray-600">Binding Affinity</span>
                    <span className="font-bold text-gray-900">-10.4 kcal/mol</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-blue-100">
                    <span className="text-gray-600">Mutation Effect</span>
                    <span className="font-bold text-red-600">50x weaker in R702W</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Status</span>
                    <span className="font-bold text-blue-600">Ready for trials</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Works for wildtype patients, but may have reduced efficacy for R702W carriers
                  </p>
                </div>
              </div>
            </div>

            {/* Bufadienolide Card */}
            <div className="fade-in bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-3xl border border-teal-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

              <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                NOVEL DISCOVERY
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Bufadienolide</h3>
                    <span className="text-sm text-teal-600 font-medium">Natural Product (CID 10120)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-teal-100">
                    <span className="text-gray-600">Binding Affinity</span>
                    <span className="font-bold text-gray-900">-15.2 kcal/mol</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-teal-100">
                    <span className="text-gray-600">Mutation Effect</span>
                    <span className="font-bold text-teal-600">Mutation-resistant!</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Status</span>
                    <span className="font-bold text-teal-600">First ever report</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-teal-100 rounded-xl border border-teal-200">
                  <p className="text-sm text-teal-800">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    First report of bufadienolide-NOD2 binding. Works for ALL patients regardless of mutation!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why It Matters</h2>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="text-red-400 font-semibold mb-2">MM-GBSA (Standard Method)</div>
                  <div className="text-3xl font-bold mb-2">Got it WRONG</div>
                  <p className="text-slate-400">Predicted opposite direction for mutation effects</p>
                </div>
                <div className="text-left">
                  <div className="text-teal-400 font-semibold mb-2">FEP (Gold Standard)</div>
                  <div className="text-3xl font-bold mb-2">Revealed the truth</div>
                  <p className="text-slate-400">Accurate free energy calculations</p>
                </div>
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-slate-300 italic">
              "This is why rigorous computational methods matter for precision medicine"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Novel Contributions */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Novel Contributions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What makes this research unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'First bufadienolide-NOD2 binding report', desc: 'Nobody has connected this compound class to NOD2 before' },
              { icon: Microscope, title: 'First FEP study on NOD2 ligands', desc: 'Rigorous free energy validation' },
              { icon: AlertTriangle, title: 'Exposed MM-GBSA limitations', desc: 'Standard method fails for allosteric mutations' },
              { icon: Target, title: 'Mutation-resistant drug candidate', desc: 'Found compound unaffected by disease mutation' },
              { icon: User, title: 'N=1 Precision Medicine', desc: 'Researching my own genetic mutation' },
            ].map((item, i) => (
              <div key={i} className="fade-in bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors">
                <item.icon className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 px-6 bg-gradient-to-b from-teal-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { value: '9,566', label: 'Compounds Screened' },
              { value: '0.90', label: 'ML Model AUC' },
              { value: '520 ns', label: 'Simulation Time' },
              { value: '140', label: 'FEP Windows' },
              { value: '2', label: 'Validated Hits' },
            ].map((stat, i) => (
              <div key={i} className="fade-in text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-teal-100 text-sm">{stat.label}</div>
              </div>
            ))}
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
