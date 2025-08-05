'use client';

import styles from "./index.module.scss";

interface TitleSectionProps {
    title: string;
    subtitle: string
}

export default function TitleSection({ title, subtitle }: TitleSectionProps) {
    return (
        <div className={styles.titleContainer}>
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
        </div>
    );
}
