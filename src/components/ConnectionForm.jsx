import {useState} from "react"
import "../css/style.css"
import {getTokenByAuth} from "../data/MockService.jsx";
import { useNavigate } from "react-router-dom"

const ConnectionForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault() // empêche le refresh de page
        console.log(email, password)

        try {
            console.log("eheh",email)
            // Récupérer à partir des données mockées
            const token = await getTokenByAuth(email, password);
            console.log(token)
            localStorage.setItem("token", token.token)
            localStorage.setItem("userId", token.userId)

            navigate("/dashboard")

            // Récupérer à partir de l'API
            /* const response = await fetch("http://localhost:8000/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });
             const data = await response.json();

             localStorage.setItem("token", data.token);
             */



        } catch (err) {
            console.error(err)
        }


    }
    return (
        <form className="conform" onSubmit={handleSubmit}>
            <h3>Transformez
                vos stats en résultats</h3>
            <h4 className="black">Se connecter</h4>

            <div className="input-section flex-col">
                <label className="body lightgrey left-align">Adresse email</label>
                <input className="input-form" type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-section flex-col">
                <label className="body lightgrey left-align">Mot de passe</label>
                <input className="input-form" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="connect-button" type="submit">Se connecter</button>

            <label>Mot de passe oublié ?</label>
        </form>

    )
}
export default ConnectionForm