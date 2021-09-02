import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './kelas-online.module.css';

const CourseList = [
    {
        title: 'Kelas Online Go-Lang',
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
        title: 'Kelas Online Java',
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
        title: 'Kelas Online JavaScript',
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
        title: 'Kelas Online PHP',
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
        title: 'Kelas Online Kotlin',
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
        title: 'Kelas Online MySQL',
        image: require('../../static/img/kelas-online/mysql.jpg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
        link: "/kelas-online/mysql"
    },
    {
        title: 'Kelas Online Git',
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
        title: 'Kelas Online HTTP',
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
        title: 'Kelas Online OpenAPI',
        image: require('../../static/img/kelas-online/openapi.jpg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
        link: "/kelas-online/openapi"
    }
];

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
                    Yuk gabung!
                </Link>
            </div>
            <br/>
        </div>
    );
}

function OnlineCourses() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {CourseList.map((props, idx) => (
                        <Course key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function OnlineCoursesHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Kelas Online</h1>
                <p className="hero__subtitle">Yuk gabung dengan ribuan member yang sudah bergabung kelas Programmer
                    ZamanNow.
                    <br/> Bayar sekali, akses kelasnya SELAMANYA, GRATIS update materi!</p>
                {/*<div className={styles.buttons}>*/}
                {/*    <Link*/}
                {/*        className="button button--secondary button--lg"*/}
                {/*        to="/docs/intro">*/}
                {/*        Yuk gabung!*/}
                {/*    </Link>*/}
                {/*</div>*/}
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
            <main>
                <OnlineCourses/>
            </main>
        </Layout>
    );
}
