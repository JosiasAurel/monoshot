import React from "react";
import Calendar from "../components/Calendar";

const days: Day[] = [
    {
        name: "Monday",
        startTime: "10:00",
        endTime: "17:45"
    },
    {
        name: "Tuesday",
        startTime: "10:00",
        endTime: "17:45"
    },
    {
        name: "Wednesday",
        startTime: "10:00",
        endTime: "17:45"
    },
    {
        name: "Thursday",
        startTime: "10:00",
        endTime: "17:45"
    },
    {
        name: "Friday",
        startTime: "10:00",
        endTime: "17:45"
    },
    {
        name: "Saturday",
        startTime: "10:00",
        endTime: "17:45"
    },
    {
        name: "Sunday",
        startTime: "10:00",
        endTime: "17:45"
    }
].map(day => ({ startTime: day.startTime, endTime: day.endTime, name: day.name.slice(0, 3) }));
const KitchenSink: React.FC = (): JSX.Element => {
    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <h2>Hello World</h2>
                <Calendar scope="user" days={days} />
            </div>
        </div>
    )
}

export default KitchenSink;