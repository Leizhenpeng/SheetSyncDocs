import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {

    '/guide/': [
        {
            text: 'Guide',
            items: [
                { text: 'Getting Started', link: '/guide/' },
                { text: 'Introduction', link: '/guide/introduce' },
                { text: 'Usage', link: '/guide/usage' },]
        }
    ],
    '/zh/guide/': [{
        text: 'Guide',
        items: [
            { text: '开始', link: '/zh/guide/' },
            { text: '介绍', link: '/zh/guide/introduce' },
            { text: '用法', link: '/zh/guide/usage' },]
    }]
}