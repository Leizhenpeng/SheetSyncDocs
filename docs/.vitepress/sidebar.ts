import {DefaultTheme} from 'vitepress';

const sec1 = {
    text: '简单来说',
    collapsible: true,
    items: [
        { text: '诞生日记', link: '/guide/tutorial/whyIt.md' },
        { text: '使用场景', link: '/guide/tutorial/useCase' },
        { text: '快速上手', link: '/guide/tutorial/start' },
        { text: '我们的不同', link: '/guide/tutorial/enhance' },
    ],
};

const sec2 :DefaultTheme.SidebarGroup= {
    text:'复杂来讲',
    collapsible: true,
    items:[
        {text:'规范表单结构',link:'/guide/advance/table'},
    ]
}

const sec3 :DefaultTheme.SidebarGroup= {
    text:'顺便提一下',
    items:[
        {text:'致谢',link:'/guide/other/thanks'},
    ]
}




export const sidebar: DefaultTheme.Sidebar = {
    '/guide/': [sec1,sec2,sec3

    ],
    '/en/guide/': [{
        text: 'Guide',
        items: [
            { text: 'Getting Started', link: '/en/guide/' },
            { text: 'Introduction', link: '/en/guide/introduce' },
            { text: 'Usage', link: '/en/guide/usage' }],
    }],
};
