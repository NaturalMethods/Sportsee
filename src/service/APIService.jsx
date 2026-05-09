import {format4DigitDate} from "../utils/date.jsx";

/**
 * File containing fetchs for the API
 */

const API_URL = "http://localhost:8000/api/";

/**
 * Fetch the token from the backend
 * @param email
 * @param password
 * @returns {Promise<any>}
 */
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

/**
 * Format a response with the response of the fetchs
 * @returns {Promise<{profile: *|false, statistics: *|{totalDistance}, runningData: any}>}
 */
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

/**
 * Fetch user infos with the token in localstorage from the backend
 * @returns {Promise<any>}
 */
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

/**
 * Fetch running data with the token in localstorage from the backend
 * @param param0
 * @param param0.startWeek
 * @param param0.endWeek
 * @returns {Promise<any>}
 */
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

/**
 * Fetch the goal (which don't exist in the backend ???)
 * @returns {Promise<any>}
 */
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

/**
 * Fetch all the data to be displayed in profile page from the backend
 * @returns {Promise<{age: *, gender: *, height: *, weight: *}>}
 */
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