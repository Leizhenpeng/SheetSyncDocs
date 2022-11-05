import {DefaultTheme} from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {

    '/guide/': [
        {
            text: '简单说',
            items: [
                { text: '诞生日记', link: '/guide/whyIt.md' },
                { text: '使用场景', link: '/guide/useCase' },
                { text: '快速上手', link: '/guide/start' },
                { text: '我们的不同', link: '/guide/enhance' },
            ],

        },
    ],
    '/en/guide/': [{
        text: 'Guide',
        items: [
            { text: 'Getting Started', link: '/en/guide/' },
            { text: 'Introduction', link: '/en/guide/introduce' },
            { text: 'Usage', link: '/en/guide/usage' }],
    }],
};
