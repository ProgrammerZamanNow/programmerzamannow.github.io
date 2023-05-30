const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Programmer Zaman Now',
    tagline: 'Tempat Belajar untuk Menjadi Software Development Expert yang Zaman Now Banget!',
    url: 'https://www.programmerzamannow.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/pzn.png',
    organizationName: 'ProgrammerZamanNow',
    projectName: 'programmerzamannow.github.io',
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
                    to: '/promo',
                    label: 'Promo Kelas Udemy',
                },
                {
                    position: 'left',
                    to: 'https://kelas.programmerzamannow.com/',
                    label: 'Kelas Online',
                },
                // {
                //     position: 'left',
                //     label: 'Promo',
                //     items: [
                //         {
                //             to: 'https://kelas.programmerzamannow.com/',
                //             label: 'Promo Kelas Online',
                //         },
                //         {
                //             to: '/promo',
                //             label: 'Promo Kelas Online di Udemy',
                //         },
                //         {
                //             to: 'https://codepolitan.com/mentor/khannedy/',
                //             label: 'Promo Kelas Online di Codepolitan',
                //         }
                //     ]
                // },
                // {
                //     to: '/blog',
                //     label: 'Blog',
                //     position: 'left'
                // },
                // {
                //     position: 'left',
                //     label: 'Dasar',
                //     items: [
                //         {
                //             to: '/dasar/algoritma/intro',
                //             label: 'Algoritma',
                //         },
                //         {
                //             to: '/dasar/struktur-data/intro',
                //             label: 'Struktur Data',
                //         },
                //         {
                //             to: '/dasar/basis-data/intro',
                //             label: 'Basis Data',
                //         },
                //     ]
                // },
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
                // {
                //     position: 'left',
                //     label: 'Web',
                //     items: [
                //         {
                //             to: '/web/http/intro',
                //             label: 'HTTP',
                //         },
                //         {
                //             to: '/web/html/intro',
                //             label: 'HTML',
                //         },
                //         {
                //             to: '/web/css/intro',
                //             label: 'CSS',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'Database',
                //     items: [
                //         {
                //             to: '/database/mysql/intro',
                //             label: 'MySQL',
                //         },
                //         {
                //             to: '/database/postgresql/intro',
                //             label: 'PostgreSQL',
                //         },
                //         {
                //             to: '/database/mongodb/intro',
                //             label: 'MongoDB',
                //         },
                //         {
                //             to: '/database/redis/intro',
                //             label: 'Redis',
                //         },
                //         {
                //             to: '/database/elasticsearch/intro',
                //             label: 'ElasticSearch',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'Framework',
                //     items: [
                //         {
                //             to: '/framework/spring-boot/intro',
                //             label: 'Spring Boot',
                //         },
                //         {
                //             to: '/framework/laravel/intro',
                //             label: 'Laravel',
                //         },
                //         {
                //             to: '/framework/nodejs/intro',
                //             label: 'NodeJS',
                //         },
                //         {
                //             to: '/framework/reactjs/intro',
                //             label: 'ReactJS',
                //         },
                //         {
                //             to: '/framework/vuejs/intro',
                //             label: 'VueJS',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'Mobile',
                //     items: [
                //         {
                //             to: '/mobile/android/intro',
                //             label: 'Android',
                //         },
                //         {
                //             to: '/mobile/flutter/intro',
                //             label: 'Flutter',
                //         },
                //         {
                //             to: '/mobile/ios/intro',
                //             label: 'iOS',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'Message Broker',
                //     items: [
                //         {
                //             to: '/message-broker/apache-kafka/intro',
                //             label: 'Apache Kafka',
                //         },
                //         {
                //             to: '/message-broker/rabbitmq/intro',
                //             label: 'RabbitMQ',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'Code Design',
                //     items: [
                //         {
                //             to: '/code-design/clean-code/intro',
                //             label: 'Clean Code',
                //         },
                //         {
                //             to: '/code-design/design-patterns/intro',
                //             label: 'Design Patterns',
                //         },
                //         {
                //             to: '/code-design/refactoring/intro',
                //             label: 'Refactoring',
                //         },
                //         {
                //             to: '/code-design/solid/intro',
                //             label: 'SOLID Principles',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'Software Design',
                //     items: [
                //         {
                //             to: '/software-design/clean-architecture/intro',
                //             label: 'Clean Architecture',
                //         },
                //         {
                //             to: '/software-design/domain-driven-design/intro',
                //             label: 'Domain Driven Design',
                //         },
                //         {
                //             to: '/software-design/microservices/intro',
                //             label: 'Microservices',
                //         },
                //         {
                //             to: '/software-design/enterprise-integration-patterns/intro',
                //             label: 'Enterprise Integration Patterns',
                //         },
                //         {
                //             to: '/software-design/event-driven-architecture/intro',
                //             label: 'Event Driven Architecture',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'QA',
                //     items: [
                //         {
                //             to: '/qa/api-automation-test/intro',
                //             label: 'API Automation Test',
                //         },
                //         {
                //             to: '/qa/web-automation-test/intro',
                //             label: 'Web Automation Test',
                //         },
                //         {
                //             to: '/qa/mobile-automation-test/intro',
                //             label: 'Mobile Automation Test',
                //         },
                //         {
                //             to: '/qa/performance-test/intro',
                //             label: 'Performance Test',
                //         },
                //     ]
                // },
                // {
                //     position: 'left',
                //     label: 'DevOps',
                //     items: [
                //         {
                //             to: '/devops/git/intro',
                //             label: 'Git',
                //         },
                //         {
                //             to: '/devops/docker/intro',
                //             label: 'Docker',
                //         },
                //         {
                //             to: '/devops/kubernetes/intro',
                //             label: 'Kubernetes',
                //         },
                //         {
                //             to: '/devops/consul/intro',
                //             label: 'Consul',
                //         },
                //         {
                //             to: '/devops/vault/intro',
                //             label: 'Vault',
                //         },
                //         {
                //             to: '/devops/terraform/intro',
                //             label: 'Terraform',
                //         },
                //     ]
                // },
                // {
                //     to: '/blog',
                //     label: 'Blog',
                //     position: 'left'
                // },
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
            additionalLanguages: ['java', 'php', 'kotlin', 'dart'],
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
                googleAnalytics: {
                    trackingID: 'G-EL58ST4JHS',
                    anonymizeIP: true,
                },
                gtag: {
                    trackingID: 'G-EL58ST4JHS',
                    anonymizeIP: true,
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
                id: 'code-design-clean-code',
                path: 'articles/code-design/clean-code',
                routeBasePath: 'code-design/clean-code',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'code-design-design-patterns',
                path: 'articles/code-design/design-patterns',
                routeBasePath: 'code-design/design-patterns',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'code-design-refactoring',
                path: 'articles/code-design/refactoring',
                routeBasePath: 'code-design/refactoring',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'code-design-solid',
                path: 'articles/code-design/solid',
                routeBasePath: 'code-design/solid',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'corporate-corporate-training',
                path: 'articles/corporate/corporate-training',
                routeBasePath: 'corporate/corporate-training',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'corporate-it-consultation',
                path: 'articles/corporate/it-consultation',
                routeBasePath: 'corporate/it-consultation',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'corporate-software-development',
                path: 'articles/corporate/software-development',
                routeBasePath: 'corporate/software-development',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'dasar-algoritma',
                path: 'articles/dasar/algoritma',
                routeBasePath: 'dasar/algoritma',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'dasar-basis-data',
                path: 'articles/dasar/basis-data',
                routeBasePath: 'dasar/basis-data',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'dasar-struktur-data',
                path: 'articles/dasar/struktur-data',
                routeBasePath: 'dasar/struktur-data',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'database-elasticsearch',
                path: 'articles/database/elasticsearch',
                routeBasePath: 'database/elasticsearch',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'database-mongodb',
                path: 'articles/database/mongodb',
                routeBasePath: 'database/mongodb',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'database-mysql',
                path: 'articles/database/mysql',
                routeBasePath: 'database/mysql',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'database-postgresql',
                path: 'articles/database/postgresql',
                routeBasePath: 'database/postgresql',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'database-redis',
                path: 'articles/database/redis',
                routeBasePath: 'database/redis',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devops-consul',
                path: 'articles/devops/consul',
                routeBasePath: 'devops/consul',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devops-docker',
                path: 'articles/devops/docker',
                routeBasePath: 'devops/docker',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devops-git',
                path: 'articles/devops/git',
                routeBasePath: 'devops/git',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devops-jenkins',
                path: 'articles/devops/jenkins',
                routeBasePath: 'devops/jenkins',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devops-kubernetes',
                path: 'articles/devops/kubernetes',
                routeBasePath: 'devops/kubernetes',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devops-terraform',
                path: 'articles/devops/terraform',
                routeBasePath: 'devops/terraform',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'devops-vault',
                path: 'articles/devops/vault',
                routeBasePath: 'devops/vault',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'framework-laravel',
                path: 'articles/framework/laravel',
                routeBasePath: 'framework/laravel',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'framework-nodejs',
                path: 'articles/framework/nodejs',
                routeBasePath: 'framework/nodejs',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'framework-reactjs',
                path: 'articles/framework/reactjs',
                routeBasePath: 'framework/reactjs',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'framework-spring-boot',
                path: 'articles/framework/spring-boot',
                routeBasePath: 'framework/spring-boot',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'framework-vuejs',
                path: 'articles/framework/vuejs',
                routeBasePath: 'framework/vuejs',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'message-broker-apache-kafka',
                path: 'articles/message-broker/apache-kafka',
                routeBasePath: 'message-broker/apache-kafka',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'message-broker-rabbitmq',
                path: 'articles/message-broker/rabbitmq',
                routeBasePath: 'message-broker/rabbitmq',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'mobile-android',
                path: 'articles/mobile/android',
                routeBasePath: 'mobile/android',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'mobile-flutter',
                path: 'articles/mobile/flutter',
                routeBasePath: 'mobile/flutter',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'mobile-ios',
                path: 'articles/mobile/ios',
                routeBasePath: 'mobile/ios',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-dart',
                path: 'articles/pemrograman/dart',
                routeBasePath: 'pemrograman/dart',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-golang',
                path: 'articles/pemrograman/golang',
                routeBasePath: 'pemrograman/golang',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-java',
                path: 'articles/pemrograman/java',
                routeBasePath: 'pemrograman/java',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-javascript',
                path: 'articles/pemrograman/javascript',
                routeBasePath: 'pemrograman/javascript',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-kotlin',
                path: 'articles/pemrograman/kotlin',
                routeBasePath: 'pemrograman/kotlin',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-php',
                path: 'articles/pemrograman/php',
                routeBasePath: 'pemrograman/php',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-swift',
                path: 'articles/pemrograman/swift',
                routeBasePath: 'pemrograman/swift',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'pemrograman-typescript',
                path: 'articles/pemrograman/typescript',
                routeBasePath: 'pemrograman/typescript',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'qa-api-automation-test',
                path: 'articles/qa/api-automation-test',
                routeBasePath: 'qa/api-automation-test',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'qa-performance-test',
                path: 'articles/qa/performance-test',
                routeBasePath: 'qa/performance-test',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'qa-mobile-automation-test',
                path: 'articles/qa/mobile-automation-test',
                routeBasePath: 'qa/mobile-automation-test',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'qa-web-automation-test',
                path: 'articles/qa/web-automation-test',
                routeBasePath: 'qa/web-automation-test',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'software-design-clean-architecture',
                path: 'articles/software-design/clean-architecture',
                routeBasePath: 'software-design/clean-architecture',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'software-design-domain-driven-design',
                path: 'articles/software-design/domain-driven-design',
                routeBasePath: 'software-design/domain-driven-design',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'software-design-enterprise-integration-patterns',
                path: 'articles/software-design/enterprise-integration-patterns',
                routeBasePath: 'software-design/enterprise-integration-patterns',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'software-design-event-driven-architecture',
                path: 'articles/software-design/event-driven-architecture',
                routeBasePath: 'software-design/event-driven-architecture',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'software-design-microservices',
                path: 'articles/software-design/microservices',
                routeBasePath: 'software-design/microservices',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'web-http',
                path: 'articles/web/http',
                routeBasePath: 'web/http',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'web-css',
                path: 'articles/web/css',
                routeBasePath: 'web/css',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'web-html',
                path: 'articles/web/html',
                routeBasePath: 'web/html',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ]
    ],
};
