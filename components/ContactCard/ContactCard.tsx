import React from 'react';
import SimpleBadge from "../Badge/SimpleBadge";
import {BadgeVariant} from "../Badge/Badge.types";
import styles from './ContactCard.module.css';
import Image, {StaticImageData} from "next/image";


type ContactCardProps = {
    name: string
    greeting: string
    phone: string
    email: string
    location: string
    githubUrl: string
    avatarUrl?: string | StaticImageData
}

const ContactCard = (props: ContactCardProps) => {
    return (
        <div className={styles.container}>
            {props.avatarUrl && <Image src={props.avatarUrl} alt={"profile image"} className={styles.avatar} height={150} width={150}/>}
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