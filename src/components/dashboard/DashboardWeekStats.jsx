
import "../../css/style.css"
import "../../css/dashboard/dashboardweekstats.css"
const DashboardWeekStats = () => {
    return (

        <section className="flex-col dashboard-week-stats">
            <div className="flex-col flex-start">
                <h4 className="black"> Cette semaine</h4>
                <label className="body lightgrey">Du 23/06/2025 au 30/06/2025</label>
            </div>

            <div className="week-graph-number flex-row">
                <div className="piechart">

                    <div className=" piechart-title flex-col">
                        <div className="objectif-piechart-number flex-row flex-center">
                            <h3 className="blue">x4</h3><label className="body-large lightblue"> sur objectif de 6</label>
                        </div>
                        <label className="body lightgrey">Courses hebdomadaire réalisées</label>
                    </div>

                </div>

                <div className="week-stats-number flex-col">
                    <div className="activity-duration flex-col">
                        <label className="body lightgrey">Durée d'activité</label>
                        <div className="activity-duration-number flex-row">
                            <h4 className="blue">140 </h4><label className="body-large lightblue"> minutes</label>
                        </div>
                    </div>
                    <div className="distance flex-col">
                        <label className="body lightgrey">Distance</label>
                        <div className="activity-duration-number flex-row">
                            <h4 className="red">21.7 </h4><label className="body-large lightred"> kilomètres</label>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default DashboardWeekStats