import React from "react";
import { UserProfile } from "@clerk/nextjs";

const ProfilePage: React.FC = (): JSX.Element => {
    return (
        <div>
            <UserProfile />

        </div>
    )
}

export default ProfilePage;