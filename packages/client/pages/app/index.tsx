
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Service from "../../components/Service";
import Button from "../../components/Button";
import styles from "../../styles/app.module.css";

type Service = {
    title: string
    description: string
    price: string
    photo?: string
};

const AppPage: React.FC = (): JSX.Element => {

    const user = useUser();
    const sampleServices: Service[] = [
        {
            title: "Hair Cut",
            description: "I will cut your hair till your skull cries out loud.",
            price: "$100",
            photo: "/hair1.webp"
        },
        {
            title: "Hair Cut",
            description: "I will cut your hair till your skull cries out loud.",
            price: "$100",
            photo: "/hair2.jpg"
        },
        {
            title: "Hair Cut",
            description: "I will cut your hair till your skull cries out loud.",
            price: "$100"
        },
        {
            title: "Hair Cut",
            description: "I will cut your hair till your skull cries out loud.",
            price: "$100"
        }
    ];
    return (
        <div>
            <header style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "teal"
            }}>
                <h2 style={{ margin: "0.5em", fontWeight: "bolder", color: "white" }}>CutShot</h2>
                {user.isSignedIn ? <UserButton /> : ""}
            </header>
            <div style={{ margin: "2em 0" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%"
                }}>
                    <form className={styles.searchForm}>
                        <input type="text" placeholder="Search for something e.g punk hair cut" />
                        <Button type="submit">
                            Find
                        </Button>
                    </form>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                }}>

                    <div style={{
                        margin: "1em 0.5em",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        width: "90%"
                    }}>
                        {sampleServices.map(service => (
                            <Service {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AppPage;