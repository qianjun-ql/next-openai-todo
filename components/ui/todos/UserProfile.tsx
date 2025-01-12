import { useSession } from "next-auth/react";
import React from "react";

const UserProfile = () => {
const session = useSession()

  return (
    <div>
      <img src={session?.data?.user?.image ?? "/default-profile.png" } width={24} height={24} alt="user profile pic" className="rounded-full"/>
    </div>
  );
};

export default UserProfile;
