import { useState, useEffect } from "react";
import { getUserInfos } from "../data/MockService";
import { UserContext } from "./UserContext";
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(localStorage.getItem("token")) {
            const fetchUser = async () => {
                try {
                    const data = await getUserInfos();
                    setUser(data);
                } catch (err) {
                    console.error("Erreur fetch user:", err);
                }
            };

            fetchUser();
        }
    }, []); // ← IMPORTANT : une seule fois

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};