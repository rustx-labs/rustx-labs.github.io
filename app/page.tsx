import Image from 'next/image'

const focusAreas = [
  {
    title: '工程级工具链',
    description:
      '打造更可靠的 Rust 工程化体验，从依赖管理到自动化发布都更顺滑。',
  },
  {
    title: '中文教育内容',
    description:
      '持续输出高质量教程、案例拆解和实践指南，让学习曲线更友好。',
  },
  {
    title: '全球知识本地化',
    description:
      '翻译与整理国际优秀资料，连接国内外 Rust 社区的最新脉动。',
  },
]

const programs = [
  {
    title: 'RustX 工具实验室',
    description: '面向生产场景的效率工具与脚手架套件。',
    items: ['CLI 与自动化脚本', '工程模板与最佳实践', '性能与可观测性工具'],
  },
  {
    title: 'RustX 学习路径',
    description: '从基础到进阶的实践路径与团队协作课程。',
    items: ['分层课程与项目实战', '技术写作与示例仓库', '社区分享与直播复盘'],
  },
]

const community = [
  {
    title: '参与方式',
    items: ['提交代码与文档贡献', '参与议题讨论与评审', '分享实践经验与踩坑总结', '协助翻译与内容共建'],
  },
  {
    title: '资源链接',
    items: ['GitHub 组织与项目仓库', 'Rust 资讯与精选文章', '社区讨论与协作空间', '活动日历与会议情报'],
  },
]

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-[320px] w-[320px] rounded-full bg-[#f8a97e]/70 blur-[120px] motion-safe:animate-[float_12s_ease-in-out_infinite] dark:bg-[#f1b08a]/40" />
        <div className="absolute top-[20%] left-[-15%] h-[260px] w-[260px] rounded-full bg-[#4cc9c0]/50 blur-[120px] motion-safe:animate-[float_14s_ease-in-out_infinite] dark:bg-[#4cc9c0]/30" />
        <div className="absolute bottom-[-120px] right-[15%] h-[240px] w-[240px] rounded-full bg-[#fbd38d]/60 blur-[110px] motion-safe:animate-[pulse-soft_10s_ease-in-out_infinite] dark:bg-[#fbd38d]/30" />
      </div>

      <section
        id="top"
        className="relative mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-12 px-6 pb-20 pt-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div className="space-y-6 motion-safe:animate-[rise_900ms_ease-out]">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-orange-200/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 shadow-sm dark:border-orange-400/30 dark:bg-slate-900/70 dark:text-orange-300">
            RustX Labs · 实验室档案
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
            把 Rust 的创造力
            <span className="block text-[#e05e3c] dark:text-orange-300">带进真实世界的生产力。</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed">
            RustX 实验室聚焦工具、内容与社区共建，为开发者提供可信赖的工程化实践与全球视野。
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#e05e3c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/70 transition-transform hover:-translate-y-0.5"
              href="https://github.com/rustx-labs"
            >
              探索项目
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
              href="#community"
            >
              加入社区
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4 text-sm">
            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">实验方向</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">3+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">工具、教育、翻译</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">社区协作</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">100%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">开源驱动</p>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[var(--shadow-soft)] backdrop-blur motion-safe:animate-[rise_900ms_ease-out] dark:border-slate-800/80 dark:bg-slate-900/70"
          style={{ animationDelay: '120ms' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/logo.svg" alt="RustX Labs Logo" width={64} height={64} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">实验台</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">RustX 制造中</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
              2024
            </span>
          </div>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">工具链升级</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                让团队交付更快，构建更稳定的 Rust 工程实践。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">内容与传播</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                用结构化知识与案例分享，让 Rust 更易学、更可用。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">社区协作</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                开源、共建、互助，持续放大 Rust 社区的影响力。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">我们在做什么</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100">
              让 Rust 项目从灵感到落地更顺畅。
            </h2>
          </div>
          <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
            我们把研发节奏、知识传播和生态协作放在一起思考，让贡献更集中、输出更可持续。
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {focusAreas.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur motion-safe:animate-[rise_900ms_ease-out] dark:border-slate-800/80 dark:bg-slate-900/60"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#e05e3c] dark:text-orange-300">Focus</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
        <div className="rounded-[32px] border border-white/80 bg-white/75 p-10 shadow-[var(--shadow-soft)] backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">计划进行中</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100">
                两条核心计划驱动我们的节奏。
              </h2>
            </div>
            <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
              我们把长期积累拆解为可以交付的阶段性成果，持续公开进度与经验。
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950/60"
              >
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{program.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{program.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e05e3c] dark:bg-orange-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">社区协作</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100">
              RustX 是一个开放的实验室。
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              无论是写代码、做翻译还是分享经验，我们都欢迎新的合作者加入，一起完成更大的目标。
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-orange-200/70 bg-orange-50/80 px-5 py-4 dark:border-orange-300/20 dark:bg-orange-500/10">
              <span className="text-sm font-semibold text-orange-700 dark:text-orange-200">协作窗口</span>
              <span className="text-sm text-orange-700/80 dark:text-orange-200/80">当前开放提案与贡献通道</span>
            </div>
          </div>
          <div className="grid gap-6">
            {community.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[36px] bg-slate-900 px-8 py-12 text-white shadow-[0_40px_80px_-50px_rgba(15,23,42,0.8)] dark:bg-slate-800 sm:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Call to Action</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                一起把 Rust 的力量推向更广阔的舞台。
              </h2>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 dark:bg-slate-100"
              href="https://github.com/rustx-labs"
            >
              前往 GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-white/60 py-10 dark:border-slate-800/80 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} RustX Labs. 让我们一起推动 Rust 的发展！</p>
          <span>RustX Labs · 工程、内容、社区</span>
        </div>
      </footer>
    </main>
  )
}
