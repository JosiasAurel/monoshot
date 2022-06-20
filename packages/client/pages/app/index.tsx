
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Service from "../../components/Service";

type Service = {
    title: string
    description: string
    price: string
    photo?: string
};

const AppPage: React.FC = (): JSX.Element => {
    const sampleServices: Service[] = [
        {
            title: "Hair Cut",
            description: "I will cut your hair till your skull cries out loud.",
            price: "$100"
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
                alignItems: "center"
            }}>
                <h2>MonoShot</h2>
                <UserButton />
            </header>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr"
            }}>
                {sampleServices.map(service => (
                    <Service {...service} />
                ))}
            </div>
        </div>
    )
}

export default AppPage;