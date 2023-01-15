import React from 'react';
import styles from './Section.module.css'
import './Section.module.css'

export enum SectionWidth {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE",
}

type SectionProps = {
    heading?: string
    width?: SectionWidth
    children: JSX.Element
}

function Section({heading, width = SectionWidth.Medium, children}: SectionProps) {
    const sectionClass = `section${width?.charAt(0) + width?.toLowerCase().slice(1)}`

    return (
        <div className={styles[sectionClass]}>
            { heading && <h2 className={styles.sectionHeading}> { heading } </h2> }
            { children }
        </div>
    );
}

export default Section;