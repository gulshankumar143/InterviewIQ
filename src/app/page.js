import Link from "next/link";

const featureCards = [
  {
    title: "Smart Resume Analysis",
    description:
      "AI-powered parsing extracts skills, experience, and personal details from resumes in seconds.",
    icon: "📄",
  },
  {
    title: "Interactive Chat",
    description:
      "Guide candidates through a polished conversational flow that fills in missing profile details.",
    icon: "💬",
  },
  {
    title: "Timed Interview",
    description:
      "Deliver structured, measurable mock interviews with a clear timer and progress tracking.",
    icon: "⏱️",
  },
];

const metrics = [
  { label: "Candidates reviewed", value: "1.2K+" },
  { label: "Interview completion", value: "94%" },
  { label: "Avg. score uplift", value: "+28%" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="slide-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200">
              <span className="text-base">✨</span>
              AI hiring, reimagined
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                InterviewIQ
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Experience the future of interviews with a premium AI platform that helps teams screen, evaluate, and understand candidates with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/interviewee" className="btn-primary inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base">
                Start candidate flow
              </Link>
              <Link href="/interviewer" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-indigo-500/60 dark:hover:text-indigo-300">
                Open dashboard
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60">
                  <div className="text-xl font-black text-slate-900 dark:text-white">{metric.value}</div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card relative p-6 shadow-2xl shadow-indigo-500/10 dark:shadow-slate-950/30">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/70 dark:from-indigo-500/5 dark:via-slate-900 dark:to-violet-500/5" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/70 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Live pipeline</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">Interview readiness</div>
                </div>
                <div className="rounded-xl bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  Active
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-500/20">
                  <div className="text-sm text-blue-100">Resume match</div>
                  <div className="mt-6 text-3xl font-black">92%</div>
                  <div className="mt-2 h-2.5 rounded-full bg-white/20">
                    <div className="h-full w-[92%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/70">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Avg. response</div>
                  <div className="mt-6 text-3xl font-black text-slate-900 dark:text-white">4.8m</div>
                  <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">time to complete assessment</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/70">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Candidate feedback</span>
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">Excellent</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Technical depth</span>
                      <span>88%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Communication</span>
                      <span>91%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
            Key capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Built for modern candidate screening
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((feature) => (
            <div key={feature.title} className="group rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-indigo-500/35">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-2xl shadow-lg shadow-indigo-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
