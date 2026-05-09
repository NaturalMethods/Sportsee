import { useState, useEffect } from "react";
import DataService from "../service/DataService";
import { UserContext } from "./UserContext";

/**
 * Provide the userContext containing multiples userinfos and totaleDistance and user running data
 * @param param0
 * @param param0.children
 * @returns {React.JSX.Element}
 * @constructor
 */
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [runningData, setRunningData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchGlobalInfos = async () => {

            try {

                const data = await DataService.getGlobalInfos();

                const profile = {
                    firstName: data.profile.firstName,
                    lastName: data.profile.lastName,
                    createdAt: data.profile.createdAt,
                    profilePicture: data.profile.profilePicture,
                    totalDistance: Math.floor(data.statistics.totalDistance),
                };

                setUser(profile);
                setRunningData(data.runningData);

            } catch (err) {

                console.error("Erreur fetch global infos:", err);

            } finally {

                setLoading(false);
            }
        };

        // ⚠️ toujours gérer le cas sans token
        const token = localStorage.getItem("token");

        if (token) {
            fetchGlobalInfos();
        } else {
            setLoading(false);
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