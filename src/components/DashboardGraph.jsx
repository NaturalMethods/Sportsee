import "../css/style.css"
import "../css/dashboardgraph.css"
const DashboardGraph = () => {
    return (
        <section className="dashboard-graph flex-row">
            <div className="distance-graph"></div>
            <div className="heart-graph"></div>
        </section>
    )
}
export default DashboardGraph