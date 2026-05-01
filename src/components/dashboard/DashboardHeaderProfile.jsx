import {useContext} from "react";
import { UserContext } from "../../context/UserContext.jsx";

import "../../css/style.css"
import "../../css/dashboard/dashboardheaderprofile.css"
import profilepic from "../../assets/profile.jpg";
import outline from "../../assets/OUTLINE.svg";

const DashboardHeaderProfile = () => {
    const { user} = useContext(UserContext);

    const formatCreatedAt = user?.createdAt
        ? new Intl.DateTimeFormat("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date(user.createdAt))
        : null;

    return (

        <section className="headerprofile flex-row">

            <div className="flex-row profile-infos">
                <img className="profilepic" src={profilepic} alt="profile picture" />
                <div className="profile-info flex-col" >
                    <h4 className="black">{user?.firstName} {user?.lastName}</h4>
                    <p className="body lightgrey">Membre depuis le {formatCreatedAt}</p>
                </div>
            </div>
            <div className="flex-row header-distance">
                <label className="body lightgrey distance-label">Distance parcourue totale</label>
                <div className="distance-rectangle flex-row">
                    <img className="outline" src={outline} alt="flag icon" />
                    <h4 className="white totale-distance">{user?.totaleDistance} km</h4>
                </div>

            </div>
        </section>
    )
}
export default DashboardHeaderProfile