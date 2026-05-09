import "../css/profile.css"
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Context/UserContext.jsx";
import DataService from "../service/DataService";
import {getCaloriesBurnt, getDuration, getNbrOfSessions, getRestDays} from "../utils/utils.jsx";
import Loader from "../components/Loader.jsx";
const Profile = () => {

    const {runningData } = useContext(UserContext);

    const [loading, setLoading] = useState(true);

    const [profileData, setProfileData] = useState([]);
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [duration, setDuration] = useState([]);
    const [calories, setCalories] = useState();
    const [nbrOfSessions, setNbrOfSessions] = useState();
    const [restDays, setRestDays] = useState();

    const MIN_LOADING_TIME = 350; // ms

    const {user} = useContext(UserContext);

    const formatCreatedAt = user?.createdAt
        ? new Intl.DateTimeFormat("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date(user.createdAt))
        : null;

    useEffect(() => {

        const fetchData = async () => {

            const startTime = Date.now();

            try {

                setLoading(true);

                const data = await DataService.getProfileData();
                setProfileData(data);

            } catch (e) {
                console.error(e);
            } finally {

                const elapsed = Date.now() - startTime;
                const remaining = MIN_LOADING_TIME - elapsed;

                if (remaining > 0) {
                    setTimeout(() => setLoading(false), remaining);
                } else {
                    setLoading(false);
                }
            }
        };

        fetchData();

    }, []);

    useEffect(() =>{

        setDuration(getDuration(runningData));
        setCalories(getCaloriesBurnt(runningData));
        setNbrOfSessions(getNbrOfSessions(runningData));
        setRestDays(getRestDays(runningData));

    }, [runningData]);
    useEffect(() =>{

        setHeight(`${Math.floor(profileData.height / 100)}m${profileData.height % 100}`);

        if(profileData.gender==="male"){
            setGender("Homme");
        } else if(profileData.gender==="female"){
            setGender("Femme");
        }
    },[profileData]);

    if (
        loading ||
        !user ||
        !runningData
    ) {
        return <Loader />;
    }

    return (
        <section className="profile-container flex-row">
            <div className="profile-section flex-col">
                <section className="user-section flex-row">

                    <div className="flex-row profile-infos">
                        <img className="profilepic" src={user?.profilePicture} alt="profile picture" />
                        <div className="profile-info flex-col" >
                            <h4 className="black">{user?.firstName} {user?.lastName}</h4>
                            <p className="body lightgrey">Membre depuis le {formatCreatedAt} </p>
                        </div>
                    </div>

                </section>
                <section className="profile-infos-section flex-col">

                    <div className="profile-infos-title"><h4>Votre profil</h4></div>
                    <div className="profile-infos-number flex-col">
                        <p className="body-large lightgrey">Âge: {profileData.age} </p>
                        <p className="body-large lightgrey">Genre: {gender}</p>
                        <p className="body-large lightgrey">Taille: {height}</p>
                        <p className="body-large lightgrey">Poids: {profileData.weight}kg</p>
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
                            <h4 className="white">{duration.hours}</h4>
                            <p className="body-large lightblue">{duration.minutes}</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Calories brûlées</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">{calories}</h4>
                            <p className="body-large lightblue">cal</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Distance totale parcourue</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">{user?.totalDistance}</h4>
                            <p className="body-large lightblue">km</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Nombre de jour de repos</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">{restDays}</h4>
                            <p className="body-large lightblue">jours</p>
                        </div>
                    </div>
                    <div className="profile-statistics-card flex-col">
                        <p className="body white">Nombre de sessions</p>
                        <div className="profile-stats flex-row">
                            <h4 className="white">{nbrOfSessions}</h4>
                            <p className="body-large lightblue">sessions</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Profile