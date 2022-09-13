import { DefaultTheme } from "vitepress/types/default-theme";
export const navbar_cn: DefaultTheme.NavItem[] =  [
    { text: '上手指南', link: '/zh/guide/', activeMatch: '/zh/guide/' },
    { text: '产品故事', link: 'https://support.qq.com/products/431975/team/' },
    { text: '用户反馈', link: 'https://support.qq.com/product/431975' }
]

export const navbar: DefaultTheme.NavItem[] = [
    { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
    { text: 'Product Story', link: 'https://support.qq.com/products/431975/team/' },
    { text: 'FeedBack', link: 'https://support.qq.com/product/431975' }
]