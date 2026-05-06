
import "../../../css/style.css"
import "../../../css/dashboard/dashboardstats.css"
import DashboardGraph from "../DashboardGraph.jsx";
const DashboardStats = ({runningData}) => {

    return (
        <section className="dashboard-stats flex-col">
            <h4 className="black"> Vos dernières performances</h4>
            <DashboardGraph runningData={runningData} />
        </section>
    )
}
export default DashboardStats