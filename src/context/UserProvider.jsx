import { useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = ({ children }) => {

  const [user, setuser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
