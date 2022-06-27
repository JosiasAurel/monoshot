
import React from "react";
import styles from "../styles/components.module.css";

type Props = {
    children: string;
}

const Button: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

export default Button;