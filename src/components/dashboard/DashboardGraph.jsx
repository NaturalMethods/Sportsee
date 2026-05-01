import "../../css/style.css"
import "../../css/dashboard/dashboardgraph.css"
import KmStatsGraph from "../graphs/KmStatsGraph.jsx";
import Arrow from "../../assets/RightArrow.svg"
import HeartStatsGraph from "../graphs/HeartStatsGraph.jsx";

const DashboardGraph = () => {
    return (
        <section className="dashboard-graph flex-row">
            <div className="distance-graph">
                <div className="km-graph-title flex-col">
                    <div className="km-title-container flex-row">
                        <h4 className="blue">18km en moyenne</h4>
                        <div className="km-graph-selector flex-row ">
                            <div className="arrow-container-selector flip flex-col">
                                <img src={Arrow} alt="flèche de gauche" />
                            </div>
                            <p className="body-small">28 mai - 25 juin</p>
                            <div className="arrow-container-selector flex-col">
                                <img src={Arrow} alt="flèche de droite" />
                            </div>

                        </div>
                    </div>
                    <p className="body-small lightgrey">Total des kilomètres 4 dernières semaines</p>
                </div>
                <div className="flex-col km-graph">
                    <KmStatsGraph />
                </div>
            </div>
            <div className="heart-graph">
                <div className="heart-graph-title flex-col">
                    <div className="heart-title-container flex-row">
                        <h4 className="red">163 BPM</h4>
                        <div className="heart-graph-selector flex-row ">
                            <div className="arrow-container-selector flip flex-col">
                                <img src={Arrow} alt="flèche de gauche" />
                            </div>
                            <p className="body-small">28 mai - 25 juin</p>
                            <div className="arrow-container-selector flex-col">
                                <img src={Arrow} alt="flèche de droite" />
                            </div>

                        </div>
                    </div>
                    <p className="body-small lightgrey">Fréquence cardiaque moyenne</p>
                </div>
                <div className="flex-col heart-graph-container">
                    <HeartStatsGraph />
                </div>

            </div>
        </section>
    )
}
export default DashboardGraph