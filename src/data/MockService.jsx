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