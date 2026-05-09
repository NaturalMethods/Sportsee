
import "../../css/style.css"
import "../../css/dashboard/Section/LastPerformanceCharts.css"
import DistanceCard from "./ChartsCard/DistanceCard.jsx";
import BPMCard from "./ChartsCard/BPMCard.jsx";

/**
 * Return a container with the cards of the km charts and heart rate charts
 * @param param0
 * @param param0.runningData
 * @returns {React.JSX.Element}
 * @constructor
 */
const LastPerformanceCharts = ({runningData}) => {

    return (
        <section className="dashboard-stats flex-col">
            <h4 className="black"> Vos dernières performances</h4>
            <section className="dashboard-graph flex-row">
                <DistanceCard runningData={runningData} />
                <BPMCard runningData={runningData} />
            </section>
        </section>
    )
}
export default LastPerformanceCharts