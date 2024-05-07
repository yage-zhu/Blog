export default {
    root: {
        label: '中文',
        lang: 'zh'
    },
    en: {
        label: 'English',
        lang: 'en',  // 可选，将作为 `lang` 属性添加到 `html` 标签中
        link: '/en',
        themeConfig: {
            nav: [
                { text: 'Home', link: '/' },
                {
                    text: 'web developer',
                    items: [
                      { text: 'HTML', link: '/html/1' },
                      { text: 'CSS', link: '/css/1' },
                      { text: 'JavaScript', link: '/javascript/1' },
                      { text: 'ajax', link: '/ajax/1' },
                      { text: 'less and scss', link: '/less and scss/1' },
                      { text: 'TypeScript', link: '/typescript/1' },
                      { text: 'Vue3', link: '/vue3/1' },
                      { text: 'How the browser works', link: '/browser/1' }
                    ]
                },
                {
                    text: 'Security',
                    items: [
                      { text: 'Kali', link: '/kali/1' },
                      { text: 'Network Security', link: '/network security/1' },
                      { text: 'Security Devices', link: '/security devices/1' },
                    ]
                },
                { text: 'Python', link: '/python/1' },
                { text: 'Nodejs', link: '/nodejs/1' },
                { text: 'Git', link: '/git/1' },
                { text: 'Linux', link: '/linux/1' },
            ]
        }
    }
}