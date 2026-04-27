
import "../css/style.css"
import "../css/dashboardheaderprofile.css"
import profilepic from "../assets/profile.jpg";
import outline from "../assets/outline.svg";
const DashboardHeaderProfile = () => {
    return (
        <section className="headerprofile flex-row">

            <div className="flex-row profile-infos">
                <img className="profilepic" src={profilepic} alt="profile picture" />
                <div >
                    <h4 className="black">Clara Dupont</h4>
                    <label className="body lightgrey">Membre depuis le 14 juin 2023</label>
                </div>
            </div>
            <div className="flex-row distance">
                <label className="body lightgrey">Distance parcourue totale</label>
                <div className="distance-rectangle flex-row">
                    <img className="outline" src={outline} alt="flag icon" />
                    <h4 className="white">312 KM</h4>
                </div>

            </div>
        </section>
    )
}
export default DashboardHeaderProfile