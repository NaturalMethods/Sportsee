
import "../css/style.css"
import "../css/dashboardstats.css"
import DashboardGraph from "./DashboardGraph.jsx";
const DashboardStats = () => {
    return (
        <section className="dashboard-stats flex-col">
            <h4 className="black"> Vos dernières performances</h4>
            <DashboardGraph />
        </section>
    )
}
export default DashboardStats