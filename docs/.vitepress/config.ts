import { defineConfig } from 'vitepress'


const ogDescription = 'A Figma Content Filling plugin Power By WPS Sheet.'
const ogImage = 'https://WpsSheetSync.forkway.cn/og-image.png'
const ogTitle = 'WpsSheetSync'
const ogUrl = 'https://WpsSheetSync.forkway.cn'


export default defineConfig({

    title: 'WpsSheetSync',
    description: `${ogDescription}`,

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@vite_js' }],
        ['meta', { name: 'theme-color', content: '#646cff' }]
    ],

    themeConfig: {
        footer: {
            message: `Released under the GPL License.`,
            copyright: 'Copyright © 2022-present Forkway'
        },
        logo: '/logo.svg',
        siteTitle: 'WpsSheetSync',

        nav: [
            { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
            // { text: 'Configs', link: '/configs/', activeMatch: '/config/' },
            { text: 'Feedback', link: 'https://support.qq.com/product/431975' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Leizhenpeng/WpsSheetSync' }
        ],
        editLink: {
            pattern: 'https://github.com/Leizhenpeng/WpsSheetSync/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        localeLinks: {
            text: 'English',
            items: [
                { text: '简体中文', link: ogUrl },
            ]
        },
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Getting Started', link: '/guide/' },
                        { text: 'Introduction', link: '/guide/introduce' },
                        { text: 'Usage', link: '/guide/usage' },]
                }
            ]
        }
    },
    appearance: true
})