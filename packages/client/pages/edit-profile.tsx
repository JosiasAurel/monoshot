
import React from "react";
import { UserProfile } from "@clerk/nextjs";
import { Form, Button } from "react-bootstrap";

const EditProfilePage: React.FC = (): JSX.Element => {
    return (
        <div>
            <h2>Edit Your Profile Here</h2>
            <UserProfile />

            <Form>
                <textarea placeholder="Enter your bio here..." name="" id="" cols={30} rows={10}></textarea>
                <Button>
                    Save Changes
                </Button>
            </Form>
        </div>
    )
}

export default EditProfilePage;