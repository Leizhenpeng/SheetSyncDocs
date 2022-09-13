import { defineConfig } from 'vitepress'
import { navbar, navbar_cn } from './navbar'
import { sidebar } from './sidebar'
const ogDescription = 'A Figma Content Filling plugin Power By WPS Sheet.'
const ogImage = 'https://WpsFigmaSync.forkway.cn/og-image.png'
const ogTitle = 'WpsFigmaSync'
const ogUrl = 'https://WpsFigmaSync.forkway.cn'

//not use defineConfig, some config will not work

export default {
    title: 'WpsFigmaSync',
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
    locales: {
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'WpsFigmaSync',
            description: ' A Figma Content Filling plugin Power By WPS Sheet.'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'WpsFigmaSync',
            description: '一款由 WPS 驱动的 FIGMA 内容填充插件'
        }
    },
    themeConfig: {
        footer: {
            message: `Released under the GPL License.`,
            copyright: 'Copyright © 2022-present Forkway'
        },
        logo: '/logo.svg',
        siteTitle: 'WpsFigmaSync',

        nav: navbar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Leizhenpeng/WpsFigmaSyncDocs' }
        ],
        editLink: {
            pattern: 'https://github.com/Leizhenpeng/WpsFigmaSyncDocs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        localeLinks: {
            text: 'English',
            items: [
                { text: '简体中文', link: '/zh/' },
            ]
        },
        sidebar: sidebar,
        locales: {
            '/zh/': {
                nav: navbar_cn,
                localeLinks: {
                    text: '简体中文',
                    items: [
                        { text: 'English', link: '/' }
                    ]
                }
            }
        }
        
    },
    appearance: true
}