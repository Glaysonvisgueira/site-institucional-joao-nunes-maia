'use client';

import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { IoIosArrowUp } from "react-icons/io";

export default function ButtonGoToTop() {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;

        setScrollPercent(scrolled);
        setIsVisible(scrollTop > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const radius = 24;
    const stroke = 4;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = isNaN(circumference - (scrollPercent / 100) * circumference)
        ? circumference
        : circumference - (scrollPercent / 100) * circumference;

    return (
        <button
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="#e2e8f0"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    className={styles.progressRing}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>

            <IoIosArrowUp className={styles.icon} />
        </button>
    );
}
