import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {EnumChangefreq} from "sitemap/dist/lib/types";

const config: Config = {
    title: 'Programmer Zaman Now',
    tagline: 'Tempat Belajar untuk Menjadi Software Development Expert yang Zaman Now Banget!',
    favicon: 'img/pzn.png',

    // Set the production url of your site here
    url: 'https://www.programmerzamannow.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ProgrammerZamanNow', // Usually your GitHub org/user name.
    projectName: 'programmerzamannow.github.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
                sitemap: {
                    changefreq: EnumChangefreq.WEEKLY,
                    priority: 0.5,
                    filename: 'sitemap.xml',
                }
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-java',
                path: 'articles/pemrograman/java',
                routeBasePath: 'pemrograman/java',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/pzn.png',
        navbar: {
            title: 'Programmer Zaman Now',
            logo: {
                alt: 'Programmer Zaman Now',
                src: 'img/pzn.png',
            },
            items: [
                {
                    position: 'left',
                    to: '/promo',
                    label: 'Promo Kelas Udemy',
                },
                {
                    position: 'left',
                    to: 'https://kelas.programmerzamannow.com/',
                    label: 'Kelas Online',
                },
                {
                    position: 'left',
                    label: 'Pemrograman',
                    items: [
                        {
                            to: '/pemrograman/java/intro',
                            label: 'Java',
                        },
                        // {
                        //     to: '/pemrograman/javascript/intro',
                        //     label: 'JavaScript',
                        // },
                        // {
                        //     to: '/pemrograman/golang/intro',
                        //     label: 'Go-Lang',
                        // },
                        // {
                        //     to: '/pemrograman/php/intro',
                        //     label: 'PHP',
                        // },
                        // {
                        //     to: '/pemrograman/dart/intro',
                        //     label: 'Dart',
                        // },
                        // {
                        //     to: '/pemrograman/kotlin/intro',
                        //     label: 'Kotlin',
                        // },
                        // {
                        //     to: '/pemrograman/swift/intro',
                        //     label: 'Swift',
                        // },
                        // {
                        //     to: '/pemrograman/typescript/intro',
                        //     label: 'TypeScript',
                        // }
                    ]
                },
                {
                    position: 'right',
                    label: 'Komunitas',
                    items: [
                        // {
                        //     href: 'https://discord.com',
                        //     label: 'Discord',
                        // },
                        {
                            href: 'https://web.facebook.com/groups/programmerzamannow',
                            label: 'Facebook Group',
                        }
                    ]
                },
                {
                    position: 'right',
                    label: 'Social Media',
                    items: [
                        {
                            href: 'https://youtube.com/c/ProgrammerZamanNow',
                            label: 'Youtube',
                        },
                        {
                            href: 'https://instagram.com/ProgrammerZamanNow',
                            label: 'Instagram',
                        },
                        {
                            href: 'https://facebook.com/ProgrammerZamanNow',
                            label: 'Facebook',
                        },
                        {
                            href: 'https://t.me/ProgrammerZamanNow',
                            label: 'Telegram',
                        }
                    ]
                },
                {
                    href: 'https://github.com/ProgrammerZamanNow/programmerzamannow.github.io',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Social Media',
                    items: [
                        {
                            label: 'Youtube',
                            href: 'https://youtube.com/c/ProgrammerZamanNow',
                        },
                        {
                            label: 'Instagram',
                            href: 'https://instagram.com/ProgrammerZamanNow',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://facebook.com/ProgrammerZamanNow',
                        },
                        {
                            label: 'Telegram',
                            href: 'https://t.me/ProgrammerZamanNow',
                        },
                    ],
                },
                {
                    title: 'Komunitas',
                    items: [
                        // {
                        //     label: 'Discord',
                        //     href: 'https://discordapp.com/invite/docusaurus',
                        // },
                        {
                            label: 'Facebook Group',
                            href: 'https://www.facebook.com/groups/526962685085680',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: '/blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ProgrammerZamanNow/programmerzamannow.github.io',
                        },
                    ],
                },
            ],
            copyright: `Built with Love by Programmer Zaman Now.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: [
                "java", "php", "go", "css", "javascript", "c", "cpp", "csharp", "csv", "json",
                "dart", "gradle", "nginx", "sass", "sql", "swift", "typescript", "rust", "yaml"
            ]
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
