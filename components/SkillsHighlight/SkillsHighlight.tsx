import React from 'react';
import styles from './SkillsHighlight.module.css'

type SkillsHighlightProps = {
    skills: Array<string>
}

function SkillsHighlight({skills} : SkillsHighlightProps) {
    return (
        <ul className={styles.skillsList}>
            { skills.map(skill => <li className={styles.skillItem}> 💎 {skill} </li>) }
        </ul>
    );
}

export default SkillsHighlight;