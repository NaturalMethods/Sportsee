import {format4DigitDate} from "../utils/date.jsx";

const API_URL = "http://localhost:8000/api/";

export async function getTokenByAuth(email, password) {

    const response = await fetch(`${API_URL}login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: email,
            password: password,
        })
    });

    if (!response.ok) {
        throw new Error("User Not Found");
    }

    return await response.json();
}
export const getGlobalInfos = async () => {

    const userInfos = await getUserInfos();

    const profile = userInfos.profile;
    const statistics = userInfos.statistics;

    const startWeek = format4DigitDate(userInfos.profile.createdAt).replace("/", "-");
    const endWeek = format4DigitDate(new Date()).replace("/", "-");

    const runningData = await getRunningData({
        startWeek,
        endWeek,
    });

    return {
        profile,
        statistics,
        runningData
    };
};
export async function getUserInfos(){
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}user-info`, {

        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        throw new Error("Erreur de connexion");
    }

    return await response.json();
}

export async function getRunningData({startWeek, endWeek}) {

    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}user-activity?startWeek=${startWeek}&endWeek=${endWeek}`, {

        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        throw new Error("Erreur de connexion");
    }

    return await response.json();

}

export async function getWeeklyGoal(){

    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}weeklygoal`, {

        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        throw new Error("Erreur de connexion");
    }

    return await response.json();

}
export async function getProfileData(){

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}user-info`, {

        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        throw new Error("Erreur de connexion");
    }

    const respJSON = await response.json();

    return {
        age: respJSON.profile.age,
        gender: respJSON.profile.gender,
        height: respJSON.profile.height,
        weight: respJSON.profile.weight,
    };



}