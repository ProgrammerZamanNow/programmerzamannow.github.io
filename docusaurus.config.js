const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Programmer Zaman Now',
    tagline: 'Menjadi Software Development Expert yang Zaman Now Banget!',
    url: 'https://tutorial.programmerzamannow.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/pzn.png',
    organizationName: 'ProgrammerZamanNow', // Usually your GitHub org/user name.
    projectName: 'website', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Programmer Zaman Now',
            logo: {
                alt: 'Programmer Zaman Now',
                src: 'img/pzn.png',
            },
            items: [
                // {
                //     type: 'doc',
                //     docId: 'intro',
                //     position: 'left',
                //     label: 'Docs',
                // },
                {
                    position: 'left',
                    to: '/kelas-online',
                    label: 'Kelas Online',
                },
                {
                    position: 'left',
                    to: '/tutorial',
                    label: 'Tutorial',
                },
                {
                    position: 'left',
                    label: 'Tutorial',
                    items: [
                        {
                            to: '/tutorial-golang/intro',
                            label: 'Go-Lang',
                        },
                        {
                            to: '/tutorial-java/intro',
                            label: 'Java',
                        },
                        {
                            to: '/tutorial-javascript/intro',
                            label: 'JavaScript',
                        },
                        {
                            to: '/tutorial-kotlin/intro',
                            label: 'Kotlin',
                        },
                        {
                            to: '/tutorial-php/intro',
                            label: 'PHP',
                        },
                    ]
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    position: 'right',
                    label: 'Komunitas',
                    items: [
                        {
                            href: 'https://discord.com',
                            label: 'Discord',
                        },
                        {
                            href: 'https://www.facebook.com/groups/526962685085680',
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
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Facebook Group',
                            href: 'https://www.facebook.com/groups/526962685085680',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
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
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/ProgrammerZamanNow/programmerzamannow.github.io',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/ProgrammerZamanNow/programmerzamannow.github.io/blog',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tutorial-golang',
                path: 'tutorial/golang',
                routeBasePath: 'tutorial-golang',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tutorial-java',
                path: 'tutorial/java',
                routeBasePath: 'tutorial-java',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tutorial-javascript',
                path: 'tutorial/javascript',
                routeBasePath: 'tutorial-javascript',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tutorial-kotlin',
                path: 'tutorial/kotlin',
                routeBasePath: 'tutorial-kotlin',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tutorial-php',
                path: 'tutorial/php',
                routeBasePath: 'tutorial-php',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
    ],
};
