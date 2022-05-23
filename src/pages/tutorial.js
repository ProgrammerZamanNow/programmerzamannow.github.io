import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './kelas-online.module.css';

export const TutorialDetailList = [
    {
        name: 'Tutorial Dasar',
        description: 'Tutorial dasar-dasar pemrograman terlengkap di Indonesia',
        TutorialDetails: [
            {
                title: 'Algoritma',
                image: require('../../static/img/kelas-online/small/java.jpg').default,
                description: (
                    <>
                        Membahas tentang algoritma dan pemrograman, dasar yang wajib dikuasai oleh semua programmer
                    </>
                ),
                link: "/kelas-online/java"
            },
            {
                title: 'Struktur Data',
                image: require('../../static/img/kelas-online/small/java.jpg').default,
                description: (
                    <>
                        Membahas tentang struktur data, dan bagaimana implementasinya
                    </>
                ),
                link: "/kelas-online/java"
            },
        ]
    },
    {
        name: 'Tutorial Web',
        description: 'Tutorial web terlengkap di Indonesia',
        TutorialDetails: [
            {
                title: 'HTTP',
                image: require('../../static/img/kelas-online/small/http.jpg').default,
                description: (
                    <>
                        Membahas tentang HTTP, dan bagaimana cara kerja HTTP
                    </>
                ),
                link: "/kelas-online/java"
            },
            {
                title: 'HTML',
                image: require('../../static/img/kelas-online/small/html.jpg').default,
                description: (
                    <>
                        Membahas tentang HTML, dari mulai dasar-dasar HTML, table, form, dan lain-lain
                    </>
                ),
                link: "/kelas-online/java"
            },
            {
                title: 'CSS',
                image: require('../../static/img/kelas-online/small/css.jpg').default,
                description: (
                    <>
                        Membahas tentang CSS, dari mulai dasar-dasar CSS, sampai membuat layout web menggunakan CSS
                    </>
                ),
                link: "/kelas-online/java"
            },
            {
                title: 'JavaScript',
                image: require('../../static/img/kelas-online/small/javascript.jpg').default,
                description: (
                    <>
                        Membahas pemrograman JavaScript secara tuntas, dari JavaScript Dasar, OOP,
                        Modules, DOM, sampai membuat Async
                    </>
                ),
                link: "/kelas-online/java"
            },
        ]
    },
    {
        name: 'Tutorial Pemrograman',
        description: 'Tutorial pemrograman terlengkap di Indonesia',
        TutorialDetails: [
            {
                title: 'Pemrograman Java',
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
                title: 'Pemrograman JavaScript',
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
                title: 'Pemrograman Go-Lang',
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
                title: 'Pemrograman PHP',
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
                title: 'Pemrograman Dart',
                image: require('../../static/img/kelas-online/small/dart.jpg').default,
                description: (
                    <>
                        Membahas pemrograman Dart secara tuntas, dari Dart Dasar, OOP,
                        Packages, sampai membuat Async
                    </>
                ),
                link: "/kelas-online/dart"
            },
            {
                title: 'Pemrograman Kotlin',
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
                title: 'Pemrograman TypeScript',
                image: require('../../static/img/kelas-online/small/typescript.jpg').default,
                description: (
                    <>
                        Membahas pemrograman TypeScript secara tuntas, dari TypeScript Dasar, OOP, dan lain-lain
                    </>
                ),
                link: "/kelas-online/kotlin"
            },
        ]
    },
    {
        name: 'Tutorial Database',
        description: 'Tutorial database terlengkap, membahas relational database dan nosql database',
        TutorialDetails: [
            {
                title: 'Tutorial MySQL',
                image: require('../../static/img/kelas-online/small/mysql.jpg').default,
                description: (
                    <>
                        Membahas database MySQL secara tuntas, dari MySQL Dasar, sampai membuat Studi Kasus MySQL
                    </>
                ),
                link: "/kelas-online/mysql"
            },
            {
                title: 'Tutorial MySQL',
                image: require('../../static/img/kelas-online/small/postgre.jpg').default,
                description: (
                    <>
                        Membahas database PostgreSQL secara tuntas, dari PostgreSQL Dasar, sampai membuat Studi Kasus PostgreSQL
                    </>
                ),
                link: "/kelas-online/mysql"
            },
            {
                title: 'Tutorial MongoDB',
                image: require('../../static/img/kelas-online/small/mongodb.jpg').default,
                description: (
                    <>
                        Membahas database MongoDB secara tuntas, dari MongoDB Dasar, sampai membuat Studi Kasus MongoDB
                    </>
                ),
                link: "/kelas-online/mysql"
            },
            {
                title: 'Tutorial Elasticsearch',
                image: require('../../static/img/kelas-online/small/elasticsearch.jpg').default,
                description: (
                    <>
                        Membahas database Elasticsearch secara tuntas, dari Elasticsearch Dasar, Elasticsearch Mapping,
                        Elasticsearch Aggregation, sampai membuat Studi Kasus Elasticsearch
                    </>
                ),
                link: "/kelas-online/mysql"
            },
            {
                title: 'Tutorial Cassandra',
                image: require('../../static/img/kelas-online/small/cassandra.jpg').default,
                description: (
                    <>
                        Membahas database Cassandra secara tuntas, dari Cassandra Dasar, sampai membuat Studi Kasus Cassandra
                    </>
                ),
                link: "/kelas-online/mysql"
            },
        ]
    },
    {
        name: 'Tutorial Framework',
        description: 'Tutorial framework terlengkap di Indonesia',
        TutorialDetails: [
            {
                title: 'Tutorial Spring Boot',
                image: require('../../static/img/kelas-online/small/spring.jpg').default,
                description: (
                    <>
                        Membahas Spring Framework dan Spring Boot secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/spring-boot"
            },
            {
                title: 'Tutorial NodeJS',
                image: require('../../static/img/kelas-online/small/nodejs.jpg').default,
                description: (
                    <>
                        Membahas NodeJS secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/nodejs"
            },
            {
                title: 'Tutorial Laravel',
                image: require('../../static/img/kelas-online/small/laravel.jpg').default,
                description: (
                    <>
                        Membahas Laravel secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/nodejs"
            },
        ]
    },
    {
        name: 'Tutorial Mobile',
        description: 'Tutorial mobile terlengkap di Indonesia',
        TutorialDetails: [
            {
                title: 'Tutorial Android',
                image: require('../../static/img/kelas-online/small/android.jpg').default,
                description: (
                    <>
                        Membahas Android secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/android"
            },
            {
                title: 'Tutorial Flutter',
                image: require('../../static/img/kelas-online/small/flutter.jpg').default,
                description: (
                    <>
                        Membahas Flutter secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/android"
            }
        ]
    },
    {
        name: 'Tutorial Message Broker',
        description: 'Tutorial message broker terlengkap di Indonesia',
        TutorialDetails: [
            {
                title: 'Tutorial RabbitMQ',
                image: require('../../static/img/kelas-online/small/rabbitmq.jpg').default,
                description: (
                    <>
                        Membahas RabbitMQ secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/android"
            },
            {
                title: 'Tutorial Kafka',
                image: require('../../static/img/kelas-online/small/kafka.jpg').default,
                description: (
                    <>
                        Membahas Kafka secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/android"
            }
        ]
    },
    {
        name: 'Tutorial Devops',
        description: 'Tutorial devops terlengkap di Indonesia',
        TutorialDetails: [
            {
                title: 'Kelas Git',
                image: require('../../static/img/kelas-online/small/git.jpg').default,
                description: (
                    <>
                        Membahas Git secara tuntas, dari Git dasar, Git branching, sampai Git remote.
                    </>
                ),
                link: "/kelas-online/docker"
            },
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
            {
                title: 'Kelas Jenkins',
                image: require('../../static/img/kelas-online/small/jenkins.jpg').default,
                description: (
                    <>
                        Membahas Jenkins secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/docker"
            },
            {
                title: 'Kelas Kubernetes',
                image: require('../../static/img/kelas-online/small/kubernetes.jpg').default,
                description: (
                    <>
                        Membahas Kubernetes secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/docker"
            },
            {
                title: 'Kelas Consul',
                image: require('../../static/img/kelas-online/small/consul.jpg').default,
                description: (
                    <>
                        Membahas Consul secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/docker"
            },
            {
                title: 'Kelas Vault',
                image: require('../../static/img/kelas-online/small/vault.jpg').default,
                description: (
                    <>
                        Membahas Vault secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/docker"
            },
            {
                title: 'Kelas Prometheus',
                image: require('../../static/img/kelas-online/small/prometheus.jpg').default,
                description: (
                    <>
                        Membahas Prometheus secara tuntas, dari dasar sampai mahir, disertau studi kasus.
                    </>
                ),
                link: "/kelas-online/docker"
            },
        ]
    },
    {
        name: 'Kelas Online Lainnya',
        description: '',
        TutorialDetails: [
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

function TutorialDetail({image, title, description, link}) {
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
                    Belajar {title}!
                </Link>
            </div>
            <br/>
        </div>
    );
}

function TutorialHeaderWithTitle({name, description}) {
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

function Tutorial() {
    return (
        <main>
            {TutorialDetailList.map((group, idx) => (
                <>
                    <TutorialHeaderWithTitle {...group} />
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {group.TutorialDetails.map((props, idx) => (
                                    <TutorialDetail key={idx} {...props} />
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
