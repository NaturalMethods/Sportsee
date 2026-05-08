import { useState, useEffect } from "react";
import {getGlobalInfos, getUserInfos} from "../data/MockService";
import { UserContext } from "./UserContext";
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [runningData, setRunningData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (localStorage.getItem("token")) {

            const fetchGlobalInfos = async () => {

                try {
                    const data = await getGlobalInfos();

                    setUser(data.userInfos);
                    setRunningData(data.runningData);

                } catch (err) {

                    console.error("Erreur fetch global infos:", err);

                } finally {

                    setLoading(false);
                }
            };

            fetchGlobalInfos();
        }

    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,

                runningData,
                setRunningData,

                loading
            }}
        >
            {children}
        </UserContext.Provider>
    );
};