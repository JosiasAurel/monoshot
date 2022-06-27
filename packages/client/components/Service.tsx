
import React from "react";
import Image from "next/image";
import Button from "./Button";
import styles from "../styles/components.module.css";

type Props = {
    title: string
    description: string
    price: string
    photo?: string
};

const Service: React.FC<Props> = ({ title, description, price, photo }): JSX.Element => {
    return (
        <div className={styles.serviceCard}>
            {photo ?
                <Image loading="lazy" src={photo} width="150%" height="80%" />
                :
                <Image src="/none.svg" width="100%" height="80%" />
            }
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: "80%"
            }}>
                <h3 style={{ fontWeight: "bold" }}> {title} </h3>
                <p style={{ wordWrap: "break-word", maxWidth: "80%" }}>
                    {description}
                </p>
                <span style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}>
                    <h3> {price} </h3>
                    <Button>
                        Contact
                    </Button>
                </span>
            </div>
        </div>
    )
}

export default Service;