import { useState } from "react"
import "../css/style.css"

const ConnectionForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() // empêche le refresh de page
        console.log(email, password)
    }
    return (
        <form className="conform" onSubmit={handleSubmit}>
            <h3>Transformez
                vos stats en résultats</h3>
            <h4>Se connecter</h4>

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