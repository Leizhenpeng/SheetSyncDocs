import { DefaultTheme } from "vitepress/types/default-theme";
export const navbar: DefaultTheme.NavItem[] =  [
    { text: '快速上手', link: '/guide/start', activeMatch: '^/guide/' },
    { text: '产品故事', link: 'https://support.qq.com/products/431975/team/' },
    { text: '用户反馈', link: 'https://support.qq.com/product/431975' }
]

export const navbar_en: DefaultTheme.NavItem[] = [
    { text: 'Guide', link: '/en/guide/', activeMatch: '^/en/guide/' },
    { text: 'Product Story', link: 'https://support.qq.com/products/431975/team/' },
    { text: 'FeedBack', link: 'https://support.qq.com/product/431975' }
]
