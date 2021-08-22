import React from 'react';
import clsx from 'clsx';
import styles from './OnlineCourses.module.css';
import Link from '@docusaurus/Link';

const CourseList = [
    {
        title: 'Go-Lang',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Powered by React',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    }
];

function Course({Svg, title, description}) {
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

export default function OnlineCourses() {
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
