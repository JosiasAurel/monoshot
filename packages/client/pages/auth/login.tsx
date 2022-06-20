
import React from "react";
import { Form, Card, Button } from "react-bootstrap";

const LoginPage: React.FC = (): JSX.Element => {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Card style={{
                backgroundColor: "white",
                padding: "2em",
                textAlign: "center"
            }}>
                <h2>MonoShot</h2>
                <Form style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <Form.Control style={{ margin: "1em 0" }} type="text" placeholder="UserName" />
                    <Form.Control style={{ margin: "1em 0" }} type="email" placeholder="Email" />
                    <Form.Control style={{ margin: "1em 0" }} type="text" placeholder="UserName" />

                    <Button style={{ backgroundColor: "blue" }}>
                        Log In
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default LoginPage;