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