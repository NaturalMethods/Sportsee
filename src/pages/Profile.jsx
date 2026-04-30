import "../css/profile.css"
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import profilepic from "../assets/profile.jpg";
const Profile = () => {

    const {user} = useContext(UserContext);

    const formatCreatedAt = user?.createdAt
        ? new Intl.DateTimeFormat("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date(user.createdAt))
        : null;

    return (
        <section className="profile-container flex-row">
            <div className="profile-section flex-col">
                <section className="user-section flex-row">

                    <div className="flex-row profile-infos">
                        <img className="profilepic" src={profilepic} alt="profile picture" />
                        <div className="profile-info flex-col" >
                            <h4 className="black">{user?.firstName} {user?.lastName}</h4>
                            <p className="body lightgrey">Membre depuis le {formatCreatedAt} </p>
                        </div>
                    </div>

                </section>
                <section className="profile-infos-section flex-col">

                    <div className="profile-infos-title"><h4>Votre profil</h4></div>
                    <div className="profile-infos-number flex-col">
                        <p className="body-large lightgrey">Âge: </p>
                        <p className="body-large lightgrey">Genre: </p>
                        <p className="body-large lightgrey">Taille: </p>
                        <p className="body-large lightgrey">Poids: </p>
                    </div>

                </section>
            </div>
            <div className="profile-statistics-section flex-col">
                <div className="profile-statistics-title">
                    <h4>Vos statistiques</h4>
                    <label className="body lightgrey">depuis le {formatCreatedAt}</label>
                </div>
                <div className="profile-statistics-number flex-col">

                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Temps total couru</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">27h</h4>
                            <p className="body-large lightblue">15min</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Calories brûlées</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">25000</h4>
                            <p className="body-large lightblue">cal</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Distance totale parcourue</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">{user?.totaleDistance}</h4>
                            <p className="body-large lightblue">km</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Nombre de jour de repos</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">9</h4>
                            <p className="body-large lightblue">jours</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Nombre de sessions</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">41</h4>
                            <p className="body-large lightblue">sessions</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Profile