import "../../css/style.css"
import "../../css/dashboard/dashboardgraph.css"
import HeartStatsGraph from "../graphs/HeartStatsGraph.jsx";
import DistanceCard from "./Graphs/DistanceCard.jsx";
import Arrow from "../../assets/RightArrow.svg"

const DashboardGraph = ({runningData}) => {

    return (
        <section className="dashboard-graph flex-row">
            <DistanceCard runningData={runningData} />
            <div className="heart-graph">
                <div className="heart-graph-title flex-col">
                    <div className="heart-title-container flex-row">
                        <h4 className="red">163 BPM</h4>
                        <div className="heart-graph-selector flex-row ">
                            <div className="arrow-container-selector flip flex-col">
                                <img src={Arrow} alt="flèche de gauche" />
                            </div>
                            <p className="body-small">28 mai - 4 juin</p>
                            <div className="arrow-container-selector flex-col">
                                <img src={Arrow} alt="flèche de droite" />
                            </div>

                        </div>
                    </div>
                    <p className="body-small lightgrey">Fréquence cardiaque moyenne</p>
                </div>
                <div className="flex-col heart-graph-container">
                    {/*<HeartStatsGraph  />*/}
                </div>

            </div>
        </section>
    )
}
export default DashboardGraph