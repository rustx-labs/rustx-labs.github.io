import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center pt-8 pb-4">
            <Image src="/logo.png" alt="RustX Labs Logo" width={200} height={200} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block text-orange-600 dark:text-orange-500">RustX 实验室</span>
            <span className="block text-2xl mt-3 text-gray-500 dark:text-gray-400">推动 Rust 编程语言的发展与应用</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            我们致力于创建和分享实用的工具、库和资源，帮助开发者更高效地使用 Rust。同时，我们也专注于翻译和传播优秀的 Rust 相关内容，促进 Rust 在中国的普及。
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-semibold text-orange-600 dark:text-orange-500">我们的工作</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              RustX 实验室在以下领域持续努力：
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* 开源项目 */}
              <div className="relative p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">开源项目</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  创建和维护多个开源项目，为 Rust 生态系统做出贡献，提供实用工具和完善的文档。
                </p>
              </div>

              {/* 教育内容 */}
              <div className="relative p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">教育内容</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  开发高质量的教育内容，包括博客文章、视频教程和研讨会材料，助力开发者提升技能。
                </p>
              </div>

              {/* 翻译工作 */}
              <div className="relative p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">翻译工作</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  翻译优质的 Rust 资源，让更多中文开发者能够接触到国际上的优秀内容。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-600 dark:bg-orange-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">准备好加入我们了吗？</span>
            <span className="block text-xl mt-2 font-normal">一起为 Rust 社区贡献力量！</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="https://github.com/rustx-labs" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50">
                访问 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-semibold text-orange-600 dark:text-orange-500">社区参与</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              加入我们，一起构建更强大的 Rust 社区
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">参与方式</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li>• 提交代码和文档贡献</li>
                <li>• 参与技术讨论和问题解答</li>
                <li>• 分享您的 Rust 使用经验</li>
                <li>• 协助翻译技术文档</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">资源链接</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li>• GitHub 仓库和项目文档</li>
                <li>• 技术博客和学习资料</li>
                <li>• 社区讨论和交流平台</li>
                <li>• 活动日历和会议信息</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400 dark:text-gray-300">
              © {new Date().getFullYear()} RustX Labs. 让我们一起推动 Rust 的发展！
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
