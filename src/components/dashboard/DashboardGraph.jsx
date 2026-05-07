import "../../css/style.css"
import "../../css/dashboard/dashboardgraph.css"
import HeartStatsGraph from "../graphs/HeartStatsGraph.jsx";
import DistanceCard from "./Graphs/DistanceCard.jsx";
import Arrow from "../../assets/RightArrow.svg"
import BPMCard from "./Graphs/BPMCard.jsx";

const DashboardGraph = ({runningData}) => {

    return (
        <section className="dashboard-graph flex-row">
            <DistanceCard runningData={runningData} />
            <BPMCard runningData={runningData} />
        </section>
    )
}
export default DashboardGraph