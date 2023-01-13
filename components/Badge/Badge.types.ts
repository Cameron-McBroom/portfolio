export enum BadgeVariant {
    Success,
    Primary
}

export type BadgeProps = {
    type: BadgeVariant
    children: JSX.Element
}

export type SimpleBadgeProps = {
    type: BadgeVariant
    text: String
}