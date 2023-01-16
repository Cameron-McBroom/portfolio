import React from 'react';
import styles from './SkillsChart.module.css'

type SkillLevel = {
    name: string
    monthsExperience: number
}

type SkillChartProps = {
    skills: Array<SkillLevel>
}

function SkillsChart({skills} : SkillChartProps) {

    const highest = Math.max(...skills.map((skill) => skill.monthsExperience))

    const calculateHeightPercentage = (height: number) =>  (height / highest * 100).toString();

    return (
        <div className={styles.container}>
            { skills.map((skill) =>
                <div style={{
                    height: `${calculateHeightPercentage(skill.monthsExperience)}%`,
                    width: `${(99/skills.length).toString()}%`
                }} className={styles.bar}>

                </div>)
            }
        </div>
    );
}

export default SkillsChart;