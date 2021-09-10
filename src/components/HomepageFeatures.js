import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
    {
        title: 'Roadmap Jelas',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Di sini, semua diajarkan dari awal sampai akhir. Setiap kelas sudah di susun sesuai
                dengan Roadmap nya. Sehingga peserta tidak akan tersesat ketika belajar, cukup ikuti kelas yang diinginkan.
            </>
        ),
    },
    {
        title: 'Materi Kekinian',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Materi di sini selalu <i>up to date</i> sesuai dengan perkembangan teknologi saat ini. Sehingga peserta
                akan mendapatkan materi yang pasti selalu terbaru. Selain itu semua materi akan selalu di update secara
                berkala.
            </>
        ),
    },
    {
        title: 'Instruktur Berpengalaman',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Di sini, instruktur belajar nya adalah praktisi yang sangat berpengalaman di dunia industri. Sehingga
                peserta tidak hanya bisa belajar teknologi saja, namun bisa belajar best practice dan pengalaman dari instrukturnya.
            </>
        ),
    }
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
