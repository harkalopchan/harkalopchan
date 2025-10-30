'use client'

import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] pointer-events-none"></div>
      
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        {/* Header Section */}
        <header className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono">{"<"}Senior Frontend Developer{" />"}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent animate-fade-in tracking-tight">
            <span className="text-slate-400 dark:text-slate-500">const</span>{' '}
            <span className="text-blue-600 dark:text-blue-400">developer</span>{' '}
            <span className="text-slate-400 dark:text-slate-500">=</span>{' '}
            <span className="font-mono text-4xl md:text-5xl">"HARKA LOPCHAN"</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            <span className="text-slate-400 dark:text-slate-500">//</span>{' '}
            Building Scalable, Accessible, and High-Performance Web Experiences
          </p>
          
          {/* Download PDF CTA */}
          <div className="mb-8">
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-blue-600 dark:bg-blue-500 text-white font-semibold border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-600 dark:text-slate-400 text-sm md:text-base">
            <div className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dubai, UAE</span>
            </div>
            
            <a href="tel:+971561067220" className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+971 561067220</span>
            </a>
            
            <a href="mailto:harkalopchan@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>
            
            <div className="flex gap-2">
              <a href="https://linkedin.com/in/harkalopchan" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors w-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="https://github.com/harkalopchan" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="https://harkalopchan.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors w-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Professional Summary */}
            <section className="pb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 dark:text-blue-400 font-mono text-lg">//</span>
                  <div className="w-1 h-8 bg-blue-500"></div>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 font-mono">Professional Summary</h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                  Innovative Frontend Developer with over <strong className="text-blue-600 dark:text-blue-400">15 years</strong> of experience delivering high-performance, accessible, and scalable digital platforms using React.js, Next.js, TypeScript, and modern UI frameworks. Thrives in collaborative environments, translating complex requirements into elegant, user-centric interfaces that balance design and performance.
                </p>
                <p>
                  Strong collaborator with excellent communication, mentoring, and problem-solving skills.
                </p>
                <div className="mt-6 p-4 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Core Skills:</p>
                  <p className="text-slate-700 dark:text-slate-300 text-base">
                    React.js, Next.js, TypeScript, Redux, Tailwind CSS, Umbraco CMS, Sanity CMS, HubSpot CMS, REST APIs, GraphQL, Accessibility (WCAG 2.1), CI/CD, Git
                  </p>
                </div>
              </div>
            </section>

            {/* Core Expertise */}
            <section className="pb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-purple-500 dark:text-purple-400 font-mono text-lg">//</span>
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 font-mono">Core Expertise</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Frontend Development</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Expert in building modern, responsive web applications using React.js, Next.js, and TypeScript. Specialized in creating pixel-perfect, accessible UIs with optimal performance and user experience.
                  </p>
                </div>

                <div className="p-5 rounded bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-purple-500 dark:bg-purple-400 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Performance Optimization</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Proven track record of improving website performance by 50%+ through component optimization, lazy loading, code-splitting strategies, and efficient bundle management.
                  </p>
                </div>

                <div className="p-5 rounded bg-gradient-to-br from-pink-50 to-pink-100/50 dark:from-pink-900/20 dark:to-pink-800/20 border border-pink-200 dark:border-pink-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-pink-500 dark:bg-pink-400 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Accessibility & Inclusive Design</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Deep expertise in WCAG 2.1 compliance, creating accessible web experiences that work for all users. Experience with RTL support, keyboard navigation, and screen reader compatibility.
                  </p>
                </div>

                <div className="p-5 rounded bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-emerald-500 dark:bg-emerald-400 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">CMS Integration</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Extensive experience integrating and customizing headless CMS platforms including Umbraco, Sanity, and HubSpot CMS. Delivered 15+ enterprise platforms with dynamic content management.
                  </p>
                </div>

                <div className="p-5 rounded bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-orange-500 dark:bg-orange-400 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Technical Leadership</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Strong mentoring and team leadership skills. Successfully mentored 4 junior developers, established best practices, code reviews, and collaborative development workflows.
                  </p>
                </div>

                <div className="p-5 rounded bg-gradient-to-br from-cyan-50 to-cyan-100/50 dark:from-cyan-900/20 dark:to-cyan-800/20 border border-cyan-200 dark:border-cyan-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-cyan-500 dark:bg-cyan-400 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Quality & Best Practices</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Advocate for clean code, testing, CI/CD pipelines, and maintainable architecture. Reduced deployment time by 40% through improved workflows and automated processes.
                  </p>
                </div>
              </div>
            </section>

            {/* Selected Achievements */}
            <section className="pb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-purple-500 dark:text-purple-400 font-mono text-lg">//</span>
                  <div className="w-1 h-8 bg-purple-500"></div>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 font-mono">Selected Achievements</h2>
              </div>
              <div className="grid gap-4">
                {[
                  { metric: '50%+', text: 'Improved performance via component optimization and lazy loading' },
                  { metric: '30%', text: 'Increased accessibility compliance (WCAG 2.1)' },
                  { metric: '15+', text: 'Delivered enterprise web platforms integrating CMS and APIs' },
                  { metric: '4', text: 'Mentored junior developers, improving team output and code quality' },
                  { metric: '25%', text: 'Enhanced site SEO performance, boosting organic traffic' },
                  { metric: '40%', text: 'Reduced deployment time through improved CI/CD workflow' },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold text-lg">
                      {achievement.metric.includes('+') ? achievement.metric.replace('+', '') : achievement.metric.includes('%') ? achievement.metric.replace('%', '') : achievement.metric}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 pt-2 leading-relaxed">
                      <strong className="text-blue-600 dark:text-blue-400">{achievement.metric}</strong> {achievement.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section className="pb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500 dark:text-pink-400 font-mono text-lg">//</span>
                  <div className="w-1 h-8 bg-pink-500"></div>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 font-mono">Professional Experience</h2>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-4 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded bg-blue-500"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 font-mono">Senior Frontend Developer</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0 font-mono">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>May 2014 - Jun 2025</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 font-mono">MBLM, Dubai, UAE</p>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    {[
                      'Led development of enterprise-grade digital platforms using React, Next.js, Gatsby, and Umbraco CMS.',
                      'Translated Sketch, Figma, and XD designs into pixel-perfect responsive components.',
                      'Delivered bilingual Arabic/English UX with full RTL support.',
                      'Optimized website performance, improving load times by up to 50%.',
                      'Integrated Sanity and HubSpot CMS to enable dynamic, content-driven web experiences.',
                      'Applied WCAG 2.1 accessibility standards to improve inclusivity and SEO.',
                      'Managed Git workflows, CI/CD pipelines, and collaborative sprints for quality delivery.',
                      'Worked closely with designers and backend engineers to align design and functionality.',
                      'Enhanced reusable UI libraries and implemented code-splitting strategies aligned with performance KPIs.',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative pl-8 border-l-4 border-purple-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded bg-purple-500"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 font-mono">Co-Founder & Frontend Developer</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0 font-mono">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Jan 2013 - May 2014</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4 font-mono">Codeilo Solutions, Kathmandu, Nepal</p>
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
                        <span className="text-purple-500 dark:text-purple-400">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative pl-8 border-l-4 border-pink-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded bg-pink-500"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 font-mono">Senior Frontend Developer</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0 font-mono">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Dec 2007 - Dec 2012</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-4 font-mono">Websearch Professionals, Kathmandu, Nepal</p>
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
                        <span className="text-pink-500 dark:text-pink-400">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <section className="pb-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500 dark:text-cyan-400 font-mono text-sm">//</span>
                  <div className="w-1 h-6 bg-green-500"></div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 font-mono">Skills</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">Frontend Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'React Native', 'Redux', 'Context API', 'Tailwind CSS', 'CSS-in-JS', 'Styled Components', 'Accessibility (WCAG 2.1)', 'Performance Optimization', 'HTML5', 'CSS3'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded bg-blue-50 dark:bg-blue-900/20 text-slate-700 dark:text-slate-300 text-xs font-medium border border-blue-200 dark:border-blue-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">Backend & API Integration</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'REST APIs', 'GraphQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded bg-green-50 dark:bg-green-900/20 text-slate-700 dark:text-slate-300 text-xs font-medium border border-green-200 dark:border-green-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">CMS Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Umbraco CMS', 'Sanity CMS', 'HubSpot CMS'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded bg-orange-50 dark:bg-orange-900/20 text-slate-700 dark:text-slate-300 text-xs font-medium border border-orange-200 dark:border-orange-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">Tools & Workflow</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'CI/CD', 'Figma-to-Code', 'Vite', 'Webpack', 'Jest', 'React Testing Library'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">AI Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['ChatGPT', 'Gemini', 'Cursor'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded bg-cyan-50 dark:bg-cyan-900/20 text-slate-700 dark:text-slate-300 text-xs font-medium border border-cyan-200 dark:border-cyan-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Training / Courses */}
            <section className="pb-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-violet-500 dark:text-violet-400 font-mono text-sm">//</span>
                  <div className="w-1 h-6 bg-violet-500"></div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 font-mono">Training / Courses</h2>
              </div>
              <div className="space-y-2">
                <div className="p-4 rounded bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Master's Diploma in Internet Architecture</h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium">SSi Education</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Kathmandu, Nepal</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm">© {new Date().getFullYear()} Harka Lopchan. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
