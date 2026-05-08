import data from "./mock.json"

export const getTokenByAuth = (email,password) => {
    return new Promise((resolve, reject) => {

        console.log(password)

        setTimeout(() => {
            const user = data.find((u) => u.email === email && u.password === password)

            if (user) resolve({
                token:"token123",
                userId: user.id
            })
            else reject("User not found")
        }, 500)
    })
}
export const getGlobalInfos = async () => {

    const [userInfos, runningData] = await Promise.all([
        getUserInfos(),
        getRunningData()
    ]);

    return {
        userInfos,
        runningData
    };
}
export const getUserInfos = () => {
    //const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = data.find((u) => u.id === userId);

            if (user) resolve({
                firstName: user.userInfos.firstName,
                lastName: user.userInfos.lastName,
                createdAt: user.userInfos.createdAt,
                profilePicture: user.userInfos.profilePicture,
                totaleDistance: user.statistics.totalDistance
            })
            else reject("User not found")
        }, 500)
    })
}

export const getRunningData = () => {

    const userId = localStorage.getItem("userId");
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = data.find((u) => u.id === userId);

            if (user) resolve( user.runningData)
            else reject("User not found")
        }, 500)
    })

}
export const getWeeklyGoal = () => {

    const userId = localStorage.getItem("userId");
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = data.find((u) => u.id === userId);

            if (user) resolve( user.weeklyGoal)
            else reject("User not found")
        }, 500)
    })

}
export const getProfileData = () => {

    const userId = localStorage.getItem("userId");
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = data.find((u) => u.id === userId);

            if (user) resolve({
                    age: user.userInfos.age,
                    gender: user.userInfos.gender,
                    height: user.userInfos.height,
                    weight: user.userInfos.weight,
            })
            else reject("User not found")
        }, 500)
    })

}