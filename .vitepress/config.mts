import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'
import locales from './locales.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "yage",
  description: "yage Blog",
  srcDir: 'docs',
  appearance: 'dark',
  locales,
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: '/stars.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yage-zhu' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present <a href="mailto:xuzn@msn.com">xuzn@msn.com</a>'
    }
  }
})
