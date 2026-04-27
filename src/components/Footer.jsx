import "../css/style.css"
import "../css/footer.css"
import reducelogo from "../assets/footer/reducelogo.png";
const Footer = () => {
    return (
        <footer className="flex-row footer-container">
            <label className="body black">©Sportsee Tous droits réservés</label>
            <div className="footer-right flex-row">
                <label className="body black">Conditions Générales</label>
                <label className="body black">Contact</label>
                <img src={reducelogo} alt="logo réduit" />
            </div>
        </footer>
    )
}

export default Footer