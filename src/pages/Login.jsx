import Conform from "../components/ConnectionForm"

import "../css/style.css"
import login from "../assets/login.jpg"

import logo from "../assets/logo.svg"

const Login = () => {
    return (

        <section className="consection splitintwo">
            <div className="loginform">

                <div className="conlogo">
                    <img src={logo} alt="logo" />
                </div>
                <Conform />
            </div>
            <div className="imgsplit">
                <img className="runnerimg" src={login} alt="runners"/>
            </div>
        </section>
    )
}
export default Login