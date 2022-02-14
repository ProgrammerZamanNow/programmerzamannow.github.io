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
                image: require('../../static/img/kelas-online/small/golang.jpg').default,
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
                image: require('../../static/img/kelas-online/small/java.jpg').default,
                description: (
                    <>
                        Membahas pemrograman Java secara tuntas, dari Java Dasar, OOP,
                        Database, Web, sampai membuat RESTful API
                    </>
                ),
                link: "/kelas-online/java"
            },
            {
                title: 'Kelas JavaScript',
                image: require('../../static/img/kelas-online/small/javascript.jpg').default,
                description: (
                    <>
                        Membahas pemrograman JavaScript secara tuntas, dari JavaScript Dasar, OOP,
                        Modules, DOM, sampai membuat Async
                    </>
                ),
                link: "/kelas-online/javascript"
            },
            {
                title: 'Kelas PHP',
                image: require('../../static/img/kelas-online/small/php.jpg').default,
                description: (
                    <>
                        Membahas pemrograman PHP secara tuntas, dari PHP Dasar, OOP, Database,
                        Web, Unit Test, Composer, MVC, sampai membuat RESTful API
                    </>
                ),
                link: "/kelas-online/php"
            },
            {
                title: 'Kelas Kotlin',
                image: require('../../static/img/kelas-online/small/kotlin.jpg').default,
                description: (
                    <>
                        Membahas pemrograman Kotlin secara tuntas, dari Kotlin Dasar, OOP,
                        Generic, Collection, sampai membuat Coroutine
                    </>
                ),
                link: "/kelas-online/kotlin"
            },
            {
                title: 'Kelas Dart',
                image: require('../../static/img/kelas-online/small/dart.jpg').default,
                description: (
                    <>
                        Membahas pemrograman Dart secara tuntas, dari Dart Dasar, OOP,
                        Packages, sampai membuat Async
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
                image: require('../../static/img/kelas-online/small/mysql.jpg').default,
                description: (
                    <>
                        Membahas database MySQL secara tuntas, dari MySQL Dasar, sampai membuat Studi Kasus MySQL
                    </>
                ),
                link: "/kelas-online/mysql"
            },
        ]
    },
    {
        name: 'Kelas Online Framework',
        description: '',
        courses: [
            {
                title: 'Kelas Spring Boot',
                image: require('../../static/img/kelas-online/small/spring.jpg').default,
                description: (
                    <>
                        Membahas Spring Framework dan Spring Boot secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/spring-boot"
            },
            {
                title: 'Kelas NodeJS',
                image: require('../../static/img/kelas-online/small/nodejs.jpg').default,
                description: (
                    <>
                        Membahas NodeJS secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/nodejs"
            },
        ]
    },
    {
        name: 'Kelas Online Mobile',
        description: '',
        courses: [
            {
                title: 'Kelas Android',
                image: require('../../static/img/kelas-online/small/android.jpg').default,
                description: (
                    <>
                        Membahas Android secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/anroid"
            }
        ]
    },
    {
        name: 'Kelas Online Devops',
        description: '',
        courses: [
            {
                title: 'Kelas Docker',
                image: require('../../static/img/kelas-online/small/docker.jpg').default,
                description: (
                    <>
                        Membahas Docker secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/docker"
            },
        ]
    },
    {
        name: 'Kelas Online Code Design',
        description: '',
        courses: [
            {
                title: 'Kelas Spring Design Patterns',
                image: require('../../static/img/kelas-online/small/spring.jpg').default,
                description: (
                    <>
                        Membahas Spring Design Patterns secara tuntas, dari Creational Patterns,
                        Structural Patterns dan Behavioral Patterns
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
                image: require('../../static/img/kelas-online/small/git.jpg').default,
                description: (
                    <>
                        Membahas Git secara tuntas, dari Git Dasar, Git Branching sampai Git Remote
                    </>
                ),
                link: "/kelas-online/git"
            },
            {
                title: 'Kelas HTTP',
                image: require('../../static/img/kelas-online/small/http.jpg').default,
                description: (
                    <>
                        Membahas HTTP secara tuntas, dari Pengenalan HTTP, HTTP Request,
                        HTTP Response sampai Header dan Caching
                    </>
                ),
                link: "/kelas-online/http"
            },
            {
                title: 'Kelas RESTful API',
                image: require('../../static/img/kelas-online/small/restfulapi.jpg').default,
                description: (
                    <>
                        Membahas RESTful API secara tuntas, dari Pengenalan API,
                        Resource Naming sampai HATEOAS
                    </>
                ),
                link: "/kelas-online/restful-api"
            },
            {
                title: 'Kelas OpenAPI',
                image: require('../../static/img/kelas-online/small/openapi.jpg').default,
                description: (
                    <>
                        Membahas OpenAPI secara tuntas, dari Pengenanaln OpenAPI, Tipe Data, Schema
                        Sampai Code Generator
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
                    Zaman Now. <br/>Bayar sekali, akses kelasnya SELAMANYA. Dan GRATIS jika ada update materi baru!</p>
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
