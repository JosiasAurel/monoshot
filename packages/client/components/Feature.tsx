import React from "react";
import styles from "../styles/components.module.css";

type Props = {
    icon: string
    title: string
    description: string
}

const Feature: React.FC<Props> = ({ icon, title, description }): JSX.Element => {
    return (
        <div className={styles.featureCard}>
            <span style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
            }}>
                <h1> {icon} </h1>
                <h3> {title} </h3>
            </span>

            <p> {description} </p>
        </div>
    )
}

export default Feature;