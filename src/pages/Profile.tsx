import React from "react";
import CardList from "../components/CardList";
import ProfileNav from "../components/ProfileNav";

const Profile: React.FC = () => {
  return (
    <>
      <ProfileNav />
      <CardList />
    </>
  );
};

export default Profile;