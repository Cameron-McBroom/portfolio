import React from 'react';
import styles from "./Badge.module.css"
import {BadgeProps, BadgeVariant} from "./Badge.types";


function Badge({ type, children }: BadgeProps) {
    switch (type) {
        case BadgeVariant.Success: return <div className={styles.success}>{children}</div>
        case BadgeVariant.Primary: return  <div className={styles.primary}>{children}</div>
    }
}``

export default Badge;