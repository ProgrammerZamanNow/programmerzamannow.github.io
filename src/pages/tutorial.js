import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './tutorial.module.css';

const TutorialCategories = [
    {
        title: "Tutorial Web",
        description: "Tutorial web",
        items: [
            {
                title: 'Tutorial HTML',
                image: require('../../static/img/kelas-online/kong.png').default,
                description: (
                    <>
                        Membahas pemrograman Go-Lang secara tuntas, dari Go-Lang Dasar, Modules,
                        Database, sampai membuat RESTful API
                    </>
                ),
            },
            {
                title: 'Tutorial CSS',
                image: require('../../static/img/kelas-online/ksqldb.png').default,
                description: (
                    <>
                        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                        ahead and move your docs into the <code>docs</code> directory.
                    </>
                ),
            },
            {
                title: 'Tutorial Bootstrap',
                image: require('../../static/img/kelas-online/kubernetes.png').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: 'https://youtube.com/c/ProgrammerZamanNow'
            }
        ]
    },
    {
        title: "Tutorial Pemrograman",
        description: "Tutorial pemrograman terlengkap dan disusun dengan kurikulum yang baik",
        items: [
            {
                title: 'Kelas Online Go-Lang',
                image: require('../../static/img/kelas-online/kong.png').default,
                description: (
                    <>
                        Membahas pemrograman Go-Lang secara tuntas, dari Go-Lang Dasar, Modules,
                        Database, sampai membuat RESTful API
                    </>
                ),
            },
            {
                title: 'Kelas Online Java',
                image: require('../../static/img/kelas-online/ksqldb.png').default,
                description: (
                    <>
                        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                        ahead and move your docs into the <code>docs</code> directory.
                    </>
                ),
            },
            {
                title: 'Kelas Online JavaScript',
                image: require('../../static/img/kelas-online/kubernetes.png').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: 'https://youtube.com/c/ProgrammerZamanNow'
            }
        ]
    },
    {
        title: "Tutorial Database",
        description: "Tutorial membahas database SQL dan NoSQL",
        items: [
            {
                title: 'Kelas Online Go-Lang',
                image: require('../../static/img/kelas-online/kong.png').default,
                description: (
                    <>
                        Membahas pemrograman Go-Lang secara tuntas, dari Go-Lang Dasar, Modules,
                        Database, sampai membuat RESTful API
                    </>
                ),
            },
            {
                title: 'Kelas Online Java',
                image: require('../../static/img/kelas-online/ksqldb.png').default,
                description: (
                    <>
                        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                        ahead and move your docs into the <code>docs</code> directory.
                    </>
                ),
            },
            {
                title: 'Kelas Online JavaScript',
                image: require('../../static/img/kelas-online/kubernetes.png').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: 'https://youtube.com/c/ProgrammerZamanNow'
            }
        ]
    },
    {
        title: "Tutorial Framework",
        description: "Tutorial membahas framework-framework yang populer",
        items: [
            {
                title: 'Kelas Online Go-Lang',
                image: require('../../static/img/kelas-online/kong.png').default,
                description: (
                    <>
                        Membahas pemrograman Go-Lang secara tuntas, dari Go-Lang Dasar, Modules,
                        Database, sampai membuat RESTful API
                    </>
                ),
            },
            {
                title: 'Kelas Online Java',
                image: require('../../static/img/kelas-online/ksqldb.png').default,
                description: (
                    <>
                        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                        ahead and move your docs into the <code>docs</code> directory.
                    </>
                ),
            },
            {
                title: 'Kelas Online JavaScript',
                image: require('../../static/img/kelas-online/kubernetes.png').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: 'https://youtube.com/c/ProgrammerZamanNow'
            }
        ]
    },
    {
        title: "Tutorial DevOps",
        description: "Tutorial DevOps",
        items: [
            {
                title: 'Kelas Online Go-Lang',
                image: require('../../static/img/kelas-online/kong.png').default,
                description: (
                    <>
                        Membahas pemrograman Go-Lang secara tuntas, dari Go-Lang Dasar, Modules,
                        Database, sampai membuat RESTful API
                    </>
                ),
            },
            {
                title: 'Kelas Online Java',
                image: require('../../static/img/kelas-online/ksqldb.png').default,
                description: (
                    <>
                        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                        ahead and move your docs into the <code>docs</code> directory.
                    </>
                ),
            },
            {
                title: 'Kelas Online JavaScript',
                image: require('../../static/img/kelas-online/kubernetes.png').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: 'https://youtube.com/c/ProgrammerZamanNow'
            }
        ]
    }
]

function TutorialItem({image, title, description, link}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image} alt={title} className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to={link}>
                    Yuk gabung!
                </Link>
            </div>
        </div>
    );
}

function Tutorial() {
    return (
        <main>
            {TutorialCategories.map((props, idx) => (
                <>
                    <header className={clsx('hero hero--primary', styles.heroBanner)}>
                        <div className="container">
                            <h1 className="hero__title">{props.title}</h1>
                            <p className="hero__subtitle">{props.description}</p>
                        </div>
                    </header>
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {props.items.map((props, idx) => (
                                    <TutorialItem key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            ))}
        </main>
    );
}

export default function TutorialPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Tutorial"
            description="Tutorial Pemrograman, Backend, Frontend, Website, Mobile dan Devops Terlengkap di Indonesia<head />">
            <Tutorial/>
        </Layout>
    );
}
