/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
}

module.exports = withMDX(nextConfig)

class VeliteWebpackPlugin {
  static started = false
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite')
      await build({ watch: dev, clean: !dev })
    })
  }
}
