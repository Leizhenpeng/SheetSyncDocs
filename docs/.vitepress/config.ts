import { defineConfig } from 'vitepress'
import { navbar_en, navbar } from './navbar_en'
import { sidebar } from './sidebar'
const ogDescription = 'A Content Filling Design Plugin Power By Awesome Online Sheet Api'
const ogImage = 'https://sheet-sync.netlify.app/og-image.png'
const ogTitle = 'Sheet-Sync-Docs'
const ogUrl = 'https://sheet-sync.netlify.app/'

//not use defineConfig, some config will not work

export default {
    title: 'Sheet-Sync-Plugin',
    description: `${ogDescription}`,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@vite_js' }],
        ['meta', { name: 'theme-color', content: '#1e8e3e' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'SheetSyncPlugin',
            description: ' A Figma Content Filling plugin Power By WPS Sheet.'
        },
        '/en/': {
            lang: 'en-US',
            title: 'SheetSyncPlugin',
            description: '一款由 WPS 驱动的 FIGMA 内容填充插件'
        }
    },
    themeConfig: {
        footer: {
            message: `Released under the GPL License.`,
            copyright: 'Copyright © 2022-present Forkway'
        },
        logo: '/logo.png',
        siteTitle: 'SheetSyncDocs',

        nav: navbar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Leizhenpeng/SheetSyncDocs' }
        ],
        editLink: {
            pattern: 'https://github.com/Leizhenpeng/SheetSyncDocs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        localeLinks: {
            text: '简体中文',
            items: [
                { text: 'English', link: '/en/' },
            ]
        },
        sidebar: sidebar,
        algolia: {
            appId: 'CN4JQQMG9O',
            apiKey: 'e2b81d64b59e6b5bc9bcfcb9487d2793',
            indexName: 'figma-sheet-sync',
            placeholder: 'Search',
            translations: {
                button: {
                    buttonText: 'Quick Search',
                },
            }
        },
        locales: {
            '/en/': {
                nav: navbar_en,
                localeLinks: {
                    text: 'English',
                    items: [
                        { text: '简体中文', link: '/' }
                    ]
                }
                ,
                algolia: {
                    appId: 'CN4JQQMG9O',
                    apiKey: 'e2b81d64b59e6b5bc9bcfcb9487d2793',
                    indexName: 'figma-sheet-sync',
                    placeholder: '想找点什么？',
                    translations: {
                        button: {
                            buttonText: '快速搜索',
                        },
                    }
                },
            }
        }

    },
    appearance: true
}
