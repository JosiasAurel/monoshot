import React from "react";

type Props = {
    days: Day[]
    scope: "user" | "barber"
};

const Calendar: React.FC<Props> = ({ days, scope }): JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: "solid 1px grey",
            borderRadius: "10px",
            padding: "1em",
            boxShadow: "0 0 2px 2px whitesmoke"
        }}>
            <div style={{ margin: "0 0.8em" }}>
                <h3> Day </h3>
                <span>
                    <p> Start Time </p>
                    <p> Stop Time </p>
                </span>
            </div>
            {days.map(day => {
                return (
                    <div style={{ margin: "0 0.5em" }}>
                        {scope === "barber"
                            ?
                            <input type="checkbox" name="isAvailable" />
                            :
                            ""
                        }
                        <h3> {day.name} </h3>
                        <span>
                            <p style={{ color: "grey" }}> {day.startTime} </p>
                            <p>-</p>
                            <p style={{ color: "grey" }}> {day.endTime} </p>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Calendar;