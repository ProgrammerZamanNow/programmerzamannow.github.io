import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './kelas-online.module.css';

export const CourseList = [
    {
        name: 'Kelas Online Pemrograman',
        description: '',
        courses: [
            {
                title: 'Kelas Go-Lang',
                image: require('../../static/img/kelas-online/golang.jpg').default,
                description: (
                    <>
                        Membahas pemrograman Go-Lang secara tuntas, dari Go-Lang Dasar, Modules,
                        Database, sampai membuat RESTful API
                    </>
                ),
                link: "/kelas-online/golang"
            },
            {
                title: 'Kelas Java',
                image: require('../../static/img/kelas-online/java.jpg').default,
                description: (
                    <>
                        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                        ahead and move your docs into the <code>docs</code> directory.
                    </>
                ),
                link: "/kelas-online/java"
            },
            {
                title: 'Kelas JavaScript',
                image: require('../../static/img/kelas-online/javascript.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/javascript"
            },
            {
                title: 'Kelas PHP',
                image: require('../../static/img/kelas-online/php.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/php"
            },
            {
                title: 'Kelas Kotlin',
                image: require('../../static/img/kelas-online/kotlin.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/kotlin"
            },
            {
                title: 'Kelas Dart',
                image: require('../../static/img/kelas-online/kotlin.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/dart"
            },
        ]
    },
    {
        name: 'Kelas Online Database',
        description: '',
        courses: [
            {
                title: 'Kelas MySQL',
                image: require('../../static/img/kelas-online/mysql.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/mysql"
            },
        ]
    },
    {
        name: 'Kelas Online Code Design',
        description: '',
        courses: [
            {
                title: 'Kelas Spring Design Patterns',
                image: require('../../static/img/kelas-online/git.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/spring-boot-design-patterns"
            },
        ]
    },
    {
        name: 'Kelas Online Lainnya',
        description: '',
        courses: [
            {
                title: 'Kelas Git',
                image: require('../../static/img/kelas-online/git.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/git"
            },
            {
                title: 'Kelas HTTP',
                image: require('../../static/img/kelas-online/http.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/http"
            },
            {
                title: 'Kelas OpenAPI',
                image: require('../../static/img/kelas-online/openapi.jpg').default,
                description: (
                    <>
                        Extend or customize your website layout by reusing React. Docusaurus can
                        be extended while reusing the same header and footer.
                    </>
                ),
                link: "/kelas-online/openapi"
            }
        ]
    }
]

function Course({image, title, description, link}) {
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
                    Gabung {title}!
                </Link>
            </div>
            <br/>
        </div>
    );
}

function OnlineCoursesHeaderWithTitle({name, description}) {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{name}</h1>
                <p className="hero__subtitle">{description}</p>
            </div>
        </header>
    );
}

function OnlineCourses() {
    return (
        <main>
            {CourseList.map((group, idx) => (
                <>
                    <OnlineCoursesHeaderWithTitle {...group} />
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {group.courses.map((props, idx) => (
                                    <Course key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            ))}
        </main>
    );
}

function OnlineCoursesHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--dark', styles.heroBanner)}>
            <div className="container">
                {/*<h1 className="hero__title">Kelas Online</h1>*/}
                <p className="hero__subtitle">Yuk gabung dengan RIBUAN peserta yang sudah bergabung kelas Programmer
                    Zaman Now. Bayar sekali, akses kelasnya SELAMANYA. Dan GRATIS jika ada update materi baru!</p>
            </div>
        </header>
    );
}

export default function OnlineCoursesPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Kelas Online"
            description="Tutorial Pemrograman, Backend, Frontend, Website, Mobile dan Devops Terlengkap di Indonesia<head />">
            <OnlineCoursesHeader/>
            <OnlineCourses/>
        </Layout>
    );
}
