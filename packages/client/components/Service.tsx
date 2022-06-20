
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button>
                    Contact
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Service;