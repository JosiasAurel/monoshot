
import React from "react";
import { Card, Button } from "react-bootstrap";

type Props = {
    title: string
    description: string
    price: string
    photo?: string
};

const Service: React.FC<Props> = ({ title, description, price, photo }): JSX.Element => {
    return (
        <Card style={{
            margin: "1em"
        }}>
            <Card.Img variant="top" src={photo ? photo : "./none.svg"} />
            <Card.Body style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <span style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <h3> {price} </h3>
                    <Button>
                        Contact
                    </Button>
                </span>
            </Card.Body>
        </Card>
    )
}

export default Service;