import "../../css/style.css"
import "../../css/dashboard/dashboardgraph.css"
import KmStatsGraph from "../graphs/KmStatsGraph.jsx";

const DashboardGraph = () => {
    return (
        <section className="dashboard-graph flex-row">
            <div className="distance-graph">
                <div className="km-graph-title flex-col">
                    <div className="flex-row">
                        <h4 className="blue">18km en moyenne</h4>
                        <div className="km-graph-selector flex-row">

                            <p className="body-small">28 mai - 25 juin</p>

                        </div>
                    </div>
                    <p className="body-small lightgrey">Total des kilomètres 4 dernières semaines</p>
                </div>
                <div className="flex-col km-graph">
                    <KmStatsGraph />
                </div>
            </div>
            <div className="heart-graph"></div>
        </section>
    )
}
export default DashboardGraph