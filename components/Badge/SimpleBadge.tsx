import React from 'react';
import Badge from "./Badge";
import {SimpleBadgeProps} from "./Badge.types";



function SimpleBadge({text, type}: SimpleBadgeProps) {
    return (
        <Badge type={type}>
            <>{text}</>
        </Badge>

    );
}

export default SimpleBadge;