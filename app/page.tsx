'use client'

import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      <ThemeToggle />

      <div className="container mx-auto px-0 py-10 max-w-6xl">
        <div className="resume-shell dark:border-slate-800">
          <div className="resume-pad">
            {/* Header Section */}
            <header className="mb-12 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono">{"<"}Senior Frontend Engineer{" />"}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent animate-fade-in tracking-tight">
                <span className="text-slate-400 dark:text-slate-500">const </span>
                <span className="text-blue-600 dark:text-blue-400">engineer</span>
                <span className="text-slate-400 dark:text-slate-500"> = </span>
                <span className="font-mono text-4xl md:text-5xl font-medium">"HARKA MAN TAMANG"</span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 mb-5 font-light max-w-3xl mx-auto leading-relaxed">
                <span className="text-slate-400 dark:text-slate-500">//</span>{' '}
                I build fast, reliable UIs that teams can ship (and maintain) with&nbsp;confidence.
              </p>
              <p className="text-base md:text-xl text-slate-700 dark:text-slate-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed">
                My sweet spot is turning complex product requirements into simple, scalable frontend systems — React/Next.js, TypeScript, design systems, performance, accessibility, and clean collaboration across product and&nbsp;engineering.
              </p>
              <p className="text-base md:text-xl text-slate-700 dark:text-slate-300 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
                Open to <strong className="text-brand">Senior Frontend / Lead Frontend roles — UAE or Remote</strong></p>
              {/* Download PDF CTA */}
              <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/Harka_Man_Tamang_Senior_Frontend_Engineer.pdf"
                  download
                  className="btn-primary px-6 py-3 border-2 border-brand"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </a>

                <a
                  href="mailto:harkalopchan@gmail.com?subject=Senior%20Frontend%20Role%20-%20Intro"
                  className="btn-secondary px-6 py-3 text-slate-900 dark:text-slate-100 dark:border-slate-800"
                >
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact</span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Dubai, UAE</span>
                </div>

                <a
                  href="tel:+971561067220"
                  className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand hover:opacity-90 transition-colors ring-brand"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+971 561067220</span>
                </a>

                <a
                  href="mailto:harkalopchan@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand hover:opacity-90 transition-colors ring-brand"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>

                <div className="flex gap-2">
                  <a
                    href="https://linkedin.com/in/harkalopchan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors w-10 flex items-center justify-center ring-brand"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/harkalopchan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors w-10 flex items-center justify-center ring-brand"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <a
                    href="https://harkalopchan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Portfolio website"
                    className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-purple-brand hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors w-10 flex items-center justify-center ring-brand"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {[
                  'Systems thinking',
                  'Performance-first',
                  'Design systems',
                  'Accessibility',
                  'Pragmatic DX',
                  'Mentorship',
                ].map((tag, idx) => {
                  const accents = ['var(--brand-blue)', 'var(--brand-cyan)', 'var(--brand-purple)', 'var(--brand-amber)']
                  const a = accents[idx % accents.length]
                  return (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border text-xs font-semibold"
                      style={{
                        color: `light-dark(#334155, ${a})`,
                        borderColor: `color-mix(in srgb, ${a} 55%, var(--border))`,
                        background: `light-dark(color-mix(in srgb, ${a} 12%, var(--surface-solid)), transparent)`,
                      }}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </header>

            {/* Section nav */}
            <nav aria-label="Page sections" className="mb-10 flex flex-wrap gap-2 text-sm">
              {[
                { href: '#summary', label: 'Summary' },
                { href: '#expertise', label: 'Expertise' },
                { href: '#achievements', label: 'Achievements' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors ring-brand"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div id="content" className="resume-grid scroll-mt-24">
              {/* Main Content */}
              <div className="resume-main">
                {/* Professional Summary */}
                <section
                  id="summary"
                  className="section-block"
                >
                  <div className="section-head">
                    <h2 className="section-title text-slate-900 dark:text-slate-100">Professional Summary</h2>
                    <span className="section-label">Overview</span>
                  </div>
                  <div className="mt-4 hairline dark:bg-slate-800" />
                  <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg mt-6">
                    <p>
                      I'm a Senior Frontend Engineer with <strong className="text-brand">15+ years</strong> of experience building modern web products — from marketing sites to data-heavy enterprise platforms.
                      I care about the details that make software feel “done”: performance, accessibility, predictable UI architecture, and components that scale with the team.
                    </p>
                    <p>
                      I work best in environments where engineers and designers iterate closely, ship often, and measure outcomes. I'm comfortable leading initiatives end-to-end — from technical direction and UI engineering to delivery and mentorship.
                    </p>
                  </div>
                </section>

                {/* Working Style */}
                <section className="section-divider">
                  <div className="section-head">
                    <h2 className="section-title text-slate-900 dark:text-slate-100">How I work</h2>
                    <span className="section-label">Principles</span>
                  </div>
                  <div className="mt-4 hairline dark:bg-slate-800" />

                  <div className="grid gap-4 md:grid-cols-2 mt-6">
                    {[
                      {
                        title: 'Start with clarity',
                        desc: 'Align on success metrics, user journeys, edge cases, and constraints before writing code.',
                      },
                      {
                        title: 'Make the system easy to change',
                        desc: 'Prefer composable components, sensible boundaries, and conventions that reduce cognitive load.',
                      },
                      {
                        title: 'Performance is a feature',
                        desc: 'Measure, then optimize: Core Web Vitals, bundle hygiene, smart loading, and perceived speed.',
                      },
                      {
                        title: 'Accessible by default',
                        desc: 'Keyboard support, semantics, and screen reader UX are part of “done”.',
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="p-5 border dark:border-slate-800">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-5 border dark:border-slate-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Principles.ts</p>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500">export const</span>{' '}
                        <span className="text-brand">principles</span>{' '}
                        <span className="text-slate-400 dark:text-slate-500">=</span> {'{'}
                      </div>
                      <div className="pl-4">
                        <div>
                          <span className="text-slate-500 dark:text-slate-400">quality</span>: <span className="text-emerald-600 dark:text-emerald-400">'measurable'</span>,
                        </div>
                        <div>
                          <span className="text-slate-500 dark:text-slate-400">ui</span>: <span className="text-emerald-600 dark:text-emerald-400">'accessible'</span>,
                        </div>
                        <div>
                          <span className="text-slate-500 dark:text-slate-400">systems</span>: <span className="text-emerald-600 dark:text-emerald-400">'composable'</span>,
                        </div>
                        <div>
                          <span className="text-slate-500 dark:text-slate-400">delivery</span>: <span className="text-emerald-600 dark:text-emerald-400">'iterative'</span>,
                        </div>
                      </div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                </section>

                {/* Core Expertise */}
                <section
                  id="expertise"
                  className="section-divider"
                >
                  <div className="section-head">
                    <h2 className="section-title text-slate-900 dark:text-slate-100">Core Expertise</h2>
                    <span className="section-label">Strengths</span>
                  </div>
                  <div className="mt-4 hairline dark:bg-slate-800 mb-6" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 border  dark:border-slate-800" style={{ borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-purple-brand">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 20V9" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Frontend Architecture</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        Designing scalable frontend systems, reusable UI patterns, and maintainable application structures for modern web platforms.
                      </p>
                    </div>

                    <div className="p-5 border  dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-purple-brand">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">React &amp; Next.js Development</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        Building fast, production-ready web applications using modern React patterns, Next.js architecture, and component-driven development.
                      </p>
                    </div>

                    <div className="p-5 border  dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-purple-brand">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="M8 8h8" />
                            <path d="M8 12h5" />
                            <path d="M8 16h3" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">TypeScript &amp; Component Engineering</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">Developing type-safe, reusable components and robust frontend foundations that improve consistency and long-term maintainability.</p>
                    </div>

                    <div className="p-5 border  dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-purple-brand">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3v4" />
                            <path d="M5.64 5.64l2.83 2.83" />
                            <path d="M3 12h4" />
                            <path d="M5.64 18.36l2.83-2.83" />
                            <path d="M12 17l4-4" />
                            <circle cx="12" cy="12" r="7" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Performance Optimization</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        Improving Core Web Vitals, reducing bundle sizes, and optimizing rendering, loading, and runtime performance across complex interfaces.
                      </p>
                    </div>

                    <div className="p-5 border  dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-purple-brand">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="7" cy="7" r="3" />
                            <circle cx="17" cy="7" r="3" />
                            <circle cx="12" cy="17" r="3" />
                            <path d="M9.5 9.5l1.5 4" />
                            <path d="M14.5 9.5l-1.5 4" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Design Systems &amp; UI Engineering</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        Implementing scalable UI component libraries, design systems, and interaction patterns that improve consistency and delivery speed.
                      </p>
                    </div>

                    <div className="p-5 border dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-purple-brand">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="5" r="2" />
                            <path d="M12 7v6" />
                            <path d="M9 10h6" />
                            <path d="M10 21l2-5 2 5" />
                            <path d="M8 14l4 2 4-2" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Accessibility &amp; RTL Support</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        Building WCAG-compliant user experiences with multilingual support, right-to-left layouts, keyboard navigation, and inclusive interaction design.
                      </p>
                    </div>

                    <div className="p-5 border  dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-purple-brand">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 8L4 12l4 4" />
                            <path d="M16 8l4 4-4 4" />
                            <path d="M10 19l4-14" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">API Integration</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        Working with REST APIs, GraphQL, and real-time data integrations to build connected, responsive, and data-driven frontend experiences.
                      </p>
                    </div>

                    <div className="p-5 border  dark:border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="min-w-10 h-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-warm">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                            <path d="M12 8v8" />
                            <path d="M8.5 11.5H12h3.5" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Technical Leadership</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        Mentoring developers, reviewing code, and contributing to engineering standards, team quality, and sustainable frontend delivery practices.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Selected Achievements */}
                <section
                  id="achievements"
                  className="section-divider"
                >
                  <div className="section-head">
                    <h2 className="section-title text-slate-900 dark:text-slate-100">Selected Achievements</h2>
                    <span className="section-label">Impact</span>
                  </div>
                  <div className="mt-4 hairline dark:bg-slate-800 mb-6" />
                  <div className="grid gap-4">
                    {[
                      {
                        title: '50%+ faster performance',
                        desc: 'Improved frontend performance and Core Web Vitals across multiple enterprise projects',
                        tone: 'from-[var(--brand-blue)] to-[var(--brand-cyan)]',
                      },
                      {
                        title: 'Large-scale platforms delivered',
                        desc: 'Delivered large-scale websites and web applications across different industries',
                        tone: 'from-[var(--brand-purple)] to-[var(--brand-blue)]',
                      },
                      {
                        title: 'Reusable systems',
                        desc: 'Built component systems and design patterns that accelerated delivery and reduced rework',
                        tone: 'from-[var(--brand-cyan)] to-[var(--brand-blue)]',
                      },
                      {
                        title: '40% less deployment friction',
                        desc: 'Improved CI/CD workflows to reduce deployment friction and increase delivery efficiency',
                        tone: 'from-[var(--brand-amber)] to-[var(--brand-purple)]',
                      },
                      {
                        title: 'RTL & Multilingual platforms',
                        desc: 'Led multilingual platforms supporting Arabic RTL interfaces and accessibility standards',
                        tone: 'from-[var(--brand-cyan)] to-[var(--brand-amber)]',
                      },
                    ].map((a) => (
                      <div key={a.title} className="p-4 border" style={{ borderColor: 'var(--border)' }}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-base font-bold text-slate-900 dark:text-slate-100">{a.title}</p>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{a.desc}</p>
                          </div>
                          <span className={`h-8 w-8 shrink-0 rounded-full bg-gradient-to-br ${a.tone} opacity-90`} aria-hidden="true" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Key Projects */}
                <section
                  id="projects"
                  className="section-divider"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-accent text-lg">//</span>
                      <div className="w-1 h-8" style={{ background: 'var(--brand-cyan)' }}></div>
                    </div>
                    <h2 className="section-title text-slate-800 dark:text-slate-200">Key Projects</h2>
                  </div>

                  <div className="grid gap-4">
                    {[
                      {
                        title: 'Enterprise dashboards & real-time reporting',
                        stack: 'Node.js • React • TypeScript • REST',
                        bullets: [
                          'Designed scalable UI patterns for complex data tables, filters, and role-based views',
                          'Improved perceived performance with smart loading states, virtualization, and code-splitting',
                          'Hardened accessibility for keyboard navigation and screen reader support',
                        ],
                      },
                      {
                        title: 'Multilingual, RTL-ready web platforms',
                        stack: 'React • Next.js • RTL • Design System',
                        bullets: [
                          'Built Arabic/English UX with layout mirroring, typography tuning, and robust content handling',
                          'Delivered reusable components to keep UI consistent across multiple products',
                          'Collaborated with design/UX to ensure pixel-perfect implementation',
                        ],
                      },
                      {
                        title: 'Headless CMS marketing sites & content platforms',
                        stack: 'Next.js • Tailwind • CMS integrations',
                        bullets: [
                          'Integrated content models and dynamic rendering for scalable page creation',
                          'Optimized Core Web Vitals via image strategy, lazy loading, and bundle hygiene',
                          'Enabled teams to ship faster with component libraries and clear conventions',
                        ],
                      },
                    ].map((project) => (
                      <article
                        key={project.title}
                        className="p-5 border dark:border-slate-800"
                      >
                        <div className="flex flex-col md:items-start md:justify-between gap-2 mb-3">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{project.title}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{project.stack}</p>
                        </div>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                          {project.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                              <span className="text-accent">▸</span>
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Work Experience */}
                <section
                  id="experience"
                  className="section-divider"
                >
                  <div className="section-head">
                    <h2 className="section-title text-slate-900 dark:text-slate-100">Professional Experience</h2>
                    <span className="section-label">Timeline</span>
                  </div>
                  <div className="mt-4 hairline dark:bg-slate-800 mb-6" />
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2" style={{ borderColor: 'color-mix(in srgb, var(--brand-blue) 65%, transparent)' }}>
                      <div className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full" style={{ background: 'var(--brand-blue)' }}></div>
                      <div className="flex flex-col mb-3">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Senior Frontend Developer</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>May 2014 - Current</span>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-brand mb-4">MBLM, Dubai, UAE</p>
                      <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                        {[
                          'Led development of a scalable frontend architecture using React.js, Next.js, TypeScript, GraphQL, and RESTful APIs',
                          'Built scalable, reusable UI architectures supporting multilingual Arabic/English experiences and full RTL layouts',
                          'Improved performance and load times by 50%+ through code-splitting, lazy loading, asset optimization, and component refactoring',
                          'Collaborated closely with UX, designers, backend engineers, and stakeholders to deliver pixel-perfect, high-quality digital products',
                          'Developed reusable design system components and implementation standards across multiple projects',
                          'Strengthened release processes through Git workflows and CI/CD improvements, reducing deployment friction and improving delivery speed',
                          'Contributed to frontend architectural decisions, code quality standards, and mentoring within the engineering team',
                          'Promoted practical AI-assisted engineering workflows to improve development efficiency and team productivity'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-brand">▸</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative pl-8 border-l-2" style={{ borderColor: 'color-mix(in srgb, var(--brand-blue) 65%, transparent)' }}>
                      <div className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full" style={{ background: 'var(--brand-blue)' }}></div>
                      <div className="flex flex-col mb-3">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Co-Founder & Frontend Developer</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Jan 2013 - May 2014</span>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-brand mb-4">Codeilo Solutions, Kathmandu, Nepal</p>
                      <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                        {[
                          'Founded a web development agency delivering responsive WordPress and custom frontend solutions.',
                          'Managed development and projects delivery to meet deadlines.',
                          'Developed modular UI components, reducing projects delivery time by 25%.',
                          'Built and deployed client websites using modern JS frameworks and WordPress, ensuring cross-browser compatibility and mobile responsiveness.',
                          'Collaborated with designers to translate wireframes into functional, pixel-perfect UIs.',
                          'Optimized website loading speed and SEO performance, resulting in improved search rankings and client satisfaction.',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-brand">▸</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative pl-8 border-l-2" style={{ borderColor: 'color-mix(in srgb, var(--brand-blue) 65%, transparent)' }}>
                      <div className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full" style={{ background: 'var(--brand-blue)' }}></div>
                      <div className="flex flex-col mb-3">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Senior Frontend Developer</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Dec 2007 - Dec 2012</span>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-brand mb-4">Websearch Professionals, Kathmandu, Nepal</p>
                      <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                        {[
                          'Designed and implemented responsive, cross-browser compatible UIs for ASP.NET, WordPress, and static websites.',
                          'Delivered frontend solutions for global clients using HTML, CSS, JavaScript, and ASP.NET.',
                          'Converted PSD designs into clean, reusable HTML/CSS templates following best practices.',
                          'Introduced a modular CSS architecture, reducing maintenance time by 20%.',
                          'Led and executed long-term layout design projects with a mobile-first approach.',
                          'Mentored junior developers and performed regular code reviews to ensure quality and consistency.',
                          'Collaborated closely with cross-functional teams to align design and functionality goals.',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-brand">▸</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="resume-side md:sticky md:top-24 self-start side-rail">
                {/* Skills */}
                <section
                  id="skills"
                  className="section-divider"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-accent text-sm">//</span>
                      <div className="w-1 h-6" style={{ background: 'var(--brand-cyan)' }}></div>
                    </div>
                    <h2 className="section-title text-slate-800 dark:text-slate-200">Skills</h2>
                  </div>
                  <div className="space-y-5">
                    <div style={{ ['--cat' as any]: 'var(--brand-blue)' }}>
                      <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--cat)' }}>Frontend</h3>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'Context API', 'React Hook Form', 'HTML5', 'CSS3'].map((skill) => (
                          <span
                            key={skill}
                            className="chip text-slate-700 dark:text-[var(--cat)]"
                            style={{
                              borderColor: 'color-mix(in srgb, var(--cat) 55%, var(--border))',
                              background: 'light-dark(color-mix(in srgb, var(--cat) 12%, var(--surface-solid)), transparent)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ ['--cat' as any]: 'var(--brand-cyan)' }}>
                      <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--cat)' }}>UI Engineering</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Responsive Design', 'Design Systems', 'Accessibility (WCAG 2.1)', 'RTL Support', 'Performance Optimization', 'Cross-Browser Compatibility'].map((skill) => (
                          <span
                            key={skill}
                            className="chip text-slate-700 dark:text-[var(--cat)]"
                            style={{
                              borderColor: 'color-mix(in srgb, var(--cat) 55%, var(--border))',
                              background: 'light-dark(color-mix(in srgb, var(--cat) 12%, var(--surface-solid)), transparent)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ ['--cat' as any]: 'var(--brand-purple)' }}>
                      <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--cat)' }}>Integration</h3>
                      <div className="flex flex-wrap gap-2">
                        {['REST APIs', 'GraphQL', 'WebSockets', 'Headless CMS'].map((skill) => (
                          <span
                            key={skill}
                            className="chip text-slate-700 dark:text-[var(--cat)]"
                            style={{
                              borderColor: 'color-mix(in srgb, var(--cat) 55%, var(--border))',
                              background: 'light-dark(color-mix(in srgb, var(--cat) 12%, var(--surface-solid)), transparent)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ ['--cat' as any]: 'var(--brand-amber)' }}>
                      <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--cat)' }}>Testing &amp; Quality</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Jest', 'React Testing Library', 'CI/CD', 'Git', 'Code Reviews'].map((skill) => (
                          <span
                            key={skill}
                            className="chip text-slate-700 dark:text-[var(--cat)]"
                            style={{
                              borderColor: 'color-mix(in srgb, var(--cat) 55%, var(--border))',
                              background: 'light-dark(color-mix(in srgb, var(--cat) 12%, var(--surface-solid)), transparent)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ ['--cat' as any]: 'var(--brand-cyan)' }}>
                      <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--cat)' }}>CMS Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Umbraco CMS', 'Sanity CMS', 'HubSpot CMS'].map((skill) => (
                          <span
                            key={skill}
                            className="chip text-slate-700 dark:text-[var(--cat)]"
                            style={{
                              borderColor: 'color-mix(in srgb, var(--cat) 55%, var(--border))',
                              background: 'light-dark(color-mix(in srgb, var(--cat) 12%, var(--surface-solid)), transparent)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ ['--cat' as any]: 'var(--brand-purple)' }}>
                      <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--cat)' }}>Tools &amp; Workflow</h3>
                      <div className="flex flex-wrap gap-2">
                        {['GitHub', 'Vite', 'Webpack', 'Figma-to-Code', 'Cursor', 'ChatGPT', 'Gemini', 'Claude'].map((skill) => (
                          <span
                            key={skill}
                            className="chip text-slate-700 dark:text-[var(--cat)]"
                            style={{
                              borderColor: 'color-mix(in srgb, var(--cat) 55%, var(--border))',
                              background: 'light-dark(color-mix(in srgb, var(--cat) 12%, var(--surface-solid)), transparent)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section
                  id="education"
                  className="section-divider"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-brand text-sm">//</span>
                      <div className="w-1 h-6" style={{ background: 'var(--brand-purple)' }}></div>
                    </div>
                    <h2 className="section-title text-slate-800 dark:text-slate-200">Education</h2>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="p-4 border dark:border-slate-800">
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Bachelor of Computer Applications (BCA) - Coursework Completed</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Indira Gandhi National Open University (IGNOU)</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-4 border dark:border-slate-800">
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Master's Diploma in Internet Architecture</h3>
                      <p className="text-purple-brand font-medium">SSi Education</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </section>

                {/* Quick Summary */}
                <section className="section-divider">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-warm text-sm">//</span>
                      <div className="w-1 h-6" style={{ background: 'var(--brand-amber)' }}></div>
                    </div>
                    <h2 className="section-title text-slate-800 dark:text-slate-200">Highlights</h2>
                  </div>
                  <div className="grid gap-3">
                    {[
                      { k: 'Experience', v: '15+ years' },
                      { k: 'Delivery', v: 'Large-scale platforms delivered' },
                      { k: 'Impact', v: '50%+ performance improvements' },
                      { k: 'Specialty', v: 'RTL, accessibility, design systems' },
                    ].map((item) => (
                      <div
                        key={item.k}
                        className="flex flex-col gap-1 p-3 border dark:border-slate-800">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.k}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{item.v}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </aside>
            </div>

            {/* Footer */}
            <footer className="mt-16 text-center text-slate-500 dark:text-slate-400">
              <p className="text-xs">&copy; {new Date().getFullYear()} Harka Man Tamang<br />Senior Frontend Engineer / React • Next.js • TypeScript</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
