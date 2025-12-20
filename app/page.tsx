import type { CSSProperties } from 'react'
import Image from 'next/image'
import ScrollCard from './components/ScrollCard'

const stagger = (delay: number): CSSProperties => ({
  '--delay': `${delay}ms`,
}) as CSSProperties

const focusAreas = [
  {
    title: '工具链与自动化',
    description: '统一 CLI、模板与发布流程，提升工程一致性与交付效率。',
    signals: ['脚手架与规范化目录', '自动化回归与回滚机制', '发布节奏与版本策略'],
  },
  {
    title: '质量门禁体系',
    description: '从测试、审查到可观测性，构建可追溯的质量保障流程。',
    signals: ['代码审查与测试门禁', '性能基准与回归监控', '可观测性指标闭环'],
  },
  {
    title: '知识工程化',
    description: '以规范、文档与案例沉淀团队经验，降低协作成本。',
    signals: ['工程规范与最佳实践', '案例库与踩坑复盘', '团队协作模板'],
  },
]

const programs = [
  {
    title: 'RustX 工程栈',
    description: '面向生产环境的 Rust 工程化工具与基础设施。',
    items: ['CLI 与自动化脚本', '工程模板与落地规范', '性能监测与指标体系'],
    deliverables: ['通用模板集', '发布流水线', '质量仪表盘'],
  },
  {
    title: 'RustX 交付体系',
    description: '以流程驱动交付节奏，建立可复制的质量门禁。',
    items: ['CI/CD 流水线与版本策略', '规范化代码审查与测试', '协作规范与复盘机制'],
    deliverables: ['评审清单', '测试矩阵', '复盘模板'],
  },
]

const community = [
  {
    title: '参与方式',
    items: ['提交代码与文档贡献', '参与议题讨论与评审', '分享实践经验与踩坑总结', '协助翻译与内容共建'],
  },
  {
    title: '协作资源',
    items: ['GitHub 组织与项目仓库', '工程实践与学习资料', '社区讨论与协作空间', '活动日历与会议情报'],
  },
]

const metrics = [
  {
    label: '交付节奏',
    value: '每 2 周',
    note: '稳定迭代节奏',
  },
  {
    label: '工程能力',
    value: '可复用栈',
    note: '模板、规范与工具链',
  },
  {
    label: '质量目标',
    value: '可追踪',
    note: '测试、审查、观测闭环',
  },
]

const deliveryPipeline = [
  {
    title: 'Plan',
    detail: '需求拆解与风险评审',
  },
  {
    title: 'Build',
    detail: '模板化研发与自动化测试',
  },
  {
    title: 'Ship',
    detail: '发布监控与回滚策略',
  },
]

const stackTags = ['CLI', 'CI/CD', 'Release', 'Observability', 'Infra']

const collaborationRules = [
  '提案先行，设计评审明确范围',
  '异步协作，文档优先对齐',
  '交付可追踪，复盘沉淀',
]

export default function Home() {
  return (
    <main className="relative pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <ScrollCard
          id="top"
          className="relative min-h-[80vh] w-full rounded-2xl border border-slate-200 bg-white p-10 shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-950"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-1 w-24 bg-[#d25230]" />
            <div className="absolute right-10 top-10 h-20 w-20 rounded-full border border-slate-200/60 dark:border-slate-800/60" />
            <div className="absolute left-10 bottom-10 h-14 w-14 rounded-lg border border-slate-200/60 dark:border-slate-800/60" />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div
                data-animate
                style={stagger(0)}
                className="inline-flex w-fit items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                RustX Labs · Engineering Team
              </div>
              <h1
                data-animate
                style={stagger(80)}
                className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100"
              >
                专注 Rust 工程化的
                <span className="block text-[#d25230]">交付与工具团队。</span>
              </h1>
              <p
                data-animate
                style={stagger(160)}
                className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
              >
                我们以工程化流程驱动 Rust 项目的交付质量，提供可复用的工具链、规范和实践方法。
              </p>
              <div data-animate style={stagger(240)} className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-md bg-[#d25230] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c54b2b]"
                  href="https://github.com/rustx-labs"
                >
                  探索项目
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  href="#community"
                >
                  加入社区
                </a>
              </div>
              <div className="grid gap-4 pt-6 sm:grid-cols-3">
                {metrics.map((item, index) => (
                  <div
                    key={item.label}
                    data-animate
                    style={stagger(320 + index * 80)}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {item.value}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <div data-animate style={stagger(200)} className="flex items-center gap-3">
                  <Image src="/logo.svg" alt="RustX Labs Logo" width={56} height={56} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">工程雷达</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">工具链中枢</p>
                  </div>
                </div>
                <ul data-animate style={stagger(280)} className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#d25230]" />
                    自动化发布与版本策略
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#d25230]" />
                    工程模板与最佳实践
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#d25230]" />
                    观测指标与质量门禁
                  </li>
                </ul>
                <div data-animate style={stagger(360)} className="mt-4 flex flex-wrap gap-2">
                  {stackTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                <p
                  data-animate
                  style={stagger(240)}
                  className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
                >
                  交付看板
                </p>
                <p
                  data-animate
                  style={stagger(300)}
                  className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100"
                >
                  以流程驱动工程交付
                </p>
                <div className="mt-4 grid gap-3">
                  {deliveryPipeline.map((step, index) => (
                    <div
                      key={step.title}
                      data-animate
                      style={stagger(360 + index * 80)}
                      className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{step.title}</span>
                      <span>{step.detail}</span>
                    </div>
                  ))}
                </div>
                <div
                  data-animate
                  style={stagger(600)}
                  className="mt-4 rounded-md border border-dashed border-slate-300 px-4 py-3 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400"
                >
                  输出节奏以计划看板与复盘机制持续迭代
                </div>
              </div>
            </div>
          </div>
        </ScrollCard>

        <ScrollCard
          id="focus"
          className="min-h-[75vh] w-full rounded-2xl border border-slate-200 bg-white p-10 shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p data-animate style={stagger(0)} className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  核心方向
                </p>
                <h2
                  data-animate
                  style={stagger(80)}
                  className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100"
                >
                  把工程效率做成体系化能力。
                </h2>
              </div>
              <p
                data-animate
                style={stagger(160)}
                className="max-w-xl text-base text-slate-600 dark:text-slate-300"
              >
                每一项工作都围绕“可复制、可交付、可沉淀”的工程标准展开。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {focusAreas.map((item, index) => (
                <div
                  key={item.title}
                  data-animate
                  style={stagger(240 + index * 80)}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="h-1 w-10 bg-[#d25230]" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                    {item.signals.map((signal) => (
                      <li key={signal} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d25230]" />
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              data-animate
              style={stagger(520)}
              className="flex flex-wrap items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
            >
              <span className="font-semibold text-slate-700 dark:text-slate-200">输出形式</span>
              <span>工具链模板</span>
              <span>工程规范</span>
              <span>质量门禁清单</span>
              <span>工程实践手册</span>
            </div>
          </div>
        </ScrollCard>

        <ScrollCard
          id="programs"
          className="min-h-[75vh] w-full rounded-2xl border border-slate-200 bg-white p-10 shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p data-animate style={stagger(0)} className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  工程计划
                </p>
                <h2
                  data-animate
                  style={stagger(80)}
                  className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100"
                >
                  以工程交付视角组织每一条计划。
                </h2>
              </div>
              <p
                data-animate
                style={stagger(160)}
                className="max-w-xl text-base text-slate-600 dark:text-slate-300"
              >
                将长期积累拆解为可交付阶段，确保工具链稳定演进。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {programs.map((program, index) => (
                <div
                  key={program.title}
                  data-animate
                  style={stagger(240 + index * 100)}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{program.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {program.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d25230]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {program.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              data-animate
              style={stagger(520)}
              className="grid gap-4 rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 lg:grid-cols-3"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">阶段目标</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">季度可交付</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">发布策略</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">灰度 + 回滚</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">验收方式</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">指标 + 复盘</p>
              </div>
            </div>
          </div>
        </ScrollCard>

        <ScrollCard
          id="community"
          className="min-h-[75vh] w-full rounded-2xl border border-slate-200 bg-white p-10 shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p data-animate style={stagger(0)} className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  社区协作
                </p>
                <h2
                  data-animate
                  style={stagger(80)}
                  className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100"
                >
                  用工程协作方式放大团队影响力。
                </h2>
                <p
                  data-animate
                  style={stagger(160)}
                  className="mt-4 text-base text-slate-600 dark:text-slate-300"
                >
                  我们欢迎贡献者一起打磨工具链、输出内容、完善工程实践。
                </p>
              </div>
              <div
                data-animate
                style={stagger(240)}
                className="inline-flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">协作窗口</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">开放提案与贡献通道</span>
              </div>
              <div data-animate style={stagger(320)} className="rounded-md border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">协作准则</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {collaborationRules.map((rule) => (
                    <li key={rule} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d25230]" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-6">
              {community.map((card, index) => (
                <div
                  key={card.title}
                  data-animate
                  style={stagger(240 + index * 120)}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
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
              <div
                data-animate
                style={stagger(520)}
                className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">贡献流程</p>
                <div className="mt-4 grid gap-3">
                  <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">1. 提案</span>
                    <span>方向与价值对齐</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">2. 实施</span>
                    <span>协作开发与审查</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">3. 交付</span>
                    <span>发布 + 复盘沉淀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollCard>

        <ScrollCard
          className="min-h-[60vh] w-full rounded-2xl border border-slate-200 bg-slate-900 p-10 text-white shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p data-animate style={stagger(0)} className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Call to Action
                </p>
                <h2
                  data-animate
                  style={stagger(80)}
                  className="mt-3 text-3xl font-semibold text-white sm:text-4xl"
                >
                  把 Rust 工程交付做成团队优势。
                </h2>
                <p data-animate style={stagger(160)} className="mt-4 text-sm text-white/70">
                  如果你在构建工程化体系、工具链或质量门禁，欢迎和我们一起共建。
                </p>
              </div>
              <a
                data-animate
                style={stagger(200)}
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                href="https://github.com/rustx-labs"
              >
                前往 GitHub
              </a>
            </div>

            <div data-animate style={stagger(280)} className="grid gap-4 text-sm text-white/70 lg:grid-cols-3">
              <div className="rounded-md border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">我们在找</p>
                <p className="mt-2 font-semibold text-white">工程化贡献者</p>
              </div>
              <div className="rounded-md border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">我们在做</p>
                <p className="mt-2 font-semibold text-white">工具链与交付体系</p>
              </div>
              <div className="rounded-md border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">我们在输出</p>
                <p className="mt-2 font-semibold text-white">工程规范与案例</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-white/60 sm:flex-row sm:text-left">
              <p>© {new Date().getFullYear()} RustX Labs. 让我们一起推动 Rust 的发展！</p>
              <span>RustX Labs · 工程、交付、协作</span>
            </div>
          </div>
        </ScrollCard>
      </div>
    </main>
  )
}
