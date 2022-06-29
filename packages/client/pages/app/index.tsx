
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Service from "../../components/Service";
import Button from "../../components/Button";
import styles from "../../styles/app.module.css";
import { getHaircuts } from "../../utils/fetcher";

type Service = {
    title: string
    description: string
    price: string
    photo?: string
};

const AppPage: React.FC = (): JSX.Element => {

    const [haircuts, setHaircuts] = useState<any[]>([]);

    useEffect(() => {

        getHaircuts()
            .then(results => {
                console.log(results);
                setHaircuts(results);
            })

    }, []);
    const user = useUser();

    return (
        <div>
            <header style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "teal"
            }}>
                <Link href="/">
                    <h2 style={{ margin: "0.5em", fontWeight: "bolder", color: "white" }}>CutShot</h2>
                </Link>
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
                        {haircuts.map(service => (
                            <Service
                                title={service.name}
                                description={service.description}
                                price={service.price}
                                photo={service.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AppPage;