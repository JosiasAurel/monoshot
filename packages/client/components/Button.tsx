
import React, { HTMLAttributes } from "react";
import styles from "../styles/components.module.css";

type Props = {
    children: string;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({ children, type }): JSX.Element => {
    return (
        <button type={type ? type : "button"} className={styles.button}>
            {children}
        </button>
    )
}

export default Button;