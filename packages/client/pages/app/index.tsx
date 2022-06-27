
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Service from "../../components/Service";
import { Form, Button } from "react-bootstrap";

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
                backgroundColor: "blueviolet"
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
                    <Form style={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Form.Control type="text" placeholder="Search something..." />
                        <Button style={{ margin: "0.5em" }}>
                            Find 🔍
                        </Button>
                    </Form>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr"
                }}>
                    {sampleServices.map(service => (
                        <Service {...service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AppPage;