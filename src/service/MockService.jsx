import data from "./mock.json"

/**
 * Simulate getting token (from the API) with mock datas
 * @param email
 * @param password
 * @returns {Promise<unknown>}
 */
export const getTokenByAuth = (email,password) => {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            const user = data.find((u) => u.username === email && u.password === password)

            if (user) resolve({
                token:"token123",
                userId: user.id
            })
            else reject("User not found")
        }, 500)
    })
}

/**
 * Return a formatted datas from the mock datas (user and running datas)
 * @returns {Promise<{profile: *, statistics: {totalDistance}|*, runningData: unknown extends (object & {then(onfulfilled: infer F, ...args: infer _): any}) ? (F extends ((value: infer V, ...args: infer _) => any) ? Awaited<V> : never) : unknown}>}
 */
export const getGlobalInfos = async () => {

    const [userInfos, runningData] = await Promise.all([
        getUserInfos(),
        getRunningData()
    ]);

    return {
        profile: userInfos.profile,
        statistics: userInfos.statistics,
        runningData
    };
};

/**
 * Return userInfos to be saved in the context
 * @returns {Promise<unknown>}
 */
export const getUserInfos = () => {
    const userId = localStorage.getItem("userId");
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = data.find((u) => u.id === userId);

            if (user) resolve({
                profile: {
                    firstName: user.userInfos.firstName,
                    lastName: user.userInfos.lastName,
                    createdAt: user.userInfos.createdAt,
                    profilePicture: user.userInfos.profilePicture,
                },

                statistics: {
                    totalDistance: user.statistics?.totalDistance ?? 0
                }})
            else reject("User not found")
        }, 500)
    })
}

/**
 * Return user running data
 * @returns {Promise<unknown>}
 */
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

/**
 * Return weekly goal of the user
 * @returns {Promise<unknown>}
 */
export const getWeeklyGoal = () => {

    const userId = localStorage.getItem("userId");
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = data.find((u) => u.id === userId);

            if (user) resolve( user.goal)
            else reject("User not found")
        }, 500)
    })

}

/**
 * Return datas from the mock datas to be displayed on the profile page
 * @returns {Promise<unknown>}
 */
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