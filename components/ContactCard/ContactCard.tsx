import React from 'react';
import SimpleBadge from "../Badge/SimpleBadge";
import {BadgeVariant} from "../Badge/Badge.types";
import styles from './ContactCard.module.css'

type ContactCardProps = {
    name: String
    greeting: String
    phone: String
    email: String
    location: String
    githubUrl: String
    avatarUrl?: String
}

const ContactCard = (props: ContactCardProps) => {
    return (
        <div className={styles.container}>
            <p> {props.greeting} </p>
            <h1 className={'title'}> {props.name} </h1>
            <div className={styles.links}>
                <SimpleBadge type={BadgeVariant.Primary} text={`📞 ${props.phone}`}/>
                <SimpleBadge type={BadgeVariant.Primary} text={`📍 ${props.location}`}/>
                <SimpleBadge type={BadgeVariant.Primary} text={`📩 ${props.email}`}/>
                <SimpleBadge type={BadgeVariant.Primary} text={`🔗 ${props.githubUrl}`}/>
            </div>
        </div>
    );
};

export default ContactCard;