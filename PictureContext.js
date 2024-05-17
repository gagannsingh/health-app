// ProfilePictureContext.js
import React, { createContext, useState } from "react";

const ProfilePictureContext = createContext();

export const ProfilePictureProvider = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  return (
    <ProfilePictureContext.Provider
      value={{ profilePicture, setProfilePicture }}
    >
      {children}
    </ProfilePictureContext.Provider>
  );
};

export default ProfilePictureContext;
