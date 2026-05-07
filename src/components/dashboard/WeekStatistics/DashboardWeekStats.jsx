
import "../../../css/style.css"
import "../../../css/dashboard/dashboardweekstats.css"
import HebdoRunPieChart from "../../graphs/HebdoRunPieChart.jsx";
import {useEffect, useState} from "react";
import {getKmForWeek, getWeekDuration, getWeekNbrOfRun, getWeekRange} from "../../../utils/utils.jsx";
import { format4DigitDate} from "../../../utils/date.jsx";
const DashboardWeekStats = ({runningData}) => {

    const [start, setStartWeekRange] = useState(new Date());
    const [end, setEndWeekRange] = useState(new Date());

    const [nbrOfRun, setNbrOfRun] = useState();
    const [duration, setDuration] = useState();
    const [distance, setDistance] = useState();

    useEffect(() => {

        const weekRange = getWeekRange();

        setStartWeekRange(weekRange.monday);
        setEndWeekRange(weekRange.sunday);

        setNbrOfRun(getWeekNbrOfRun(weekRange.monday, weekRange.sunday,runningData));

        setDuration(getWeekDuration(weekRange.monday,weekRange.sunday,runningData));
        setDistance(getKmForWeek(weekRange.monday,weekRange.sunday,runningData));

    },[runningData]);



    return (

        <section className="flex-col dashboard-week-stats">
            <div className="flex-col flex-start">
                <h4 className="black"> Cette semaine</h4>
                <label className="body lightgrey">Du {format4DigitDate(start)} au {format4DigitDate(end)}</label>
            </div>

            <div className="week-graph-number flex-row">
                <div className="piechart flex-col">

                    <div className=" piechart-title flex-col">
                        <div className="objectif-piechart-number flex-row flex-center">
                            <h3 className="blue">x{nbrOfRun}</h3><label className="body-large lightblue"> sur objectif de 6</label>
                        </div>
                        <label className="body lightgrey">Courses hebdomadaire réalisées</label>
                    </div>
                    <div className="hebdo-run-piechart flex-col">
                        <HebdoRunPieChart nbrOfRun={nbrOfRun} />
                    </div>
                </div>

                <div className="week-stats-number flex-col">
                    <div className="activity-duration flex-col">
                        <label className="body lightgrey">Durée d'activité</label>
                        <div className="activity-duration-number flex-row">
                            <h4 className="blue">{duration} </h4><label className="body-large lightblue"> minutes</label>
                        </div>
                    </div>
                    <div className="distance flex-col">
                        <label className="body lightgrey">Distance</label>
                        <div className="activity-duration-number flex-row">
                            <h4 className="red">{distance}</h4><label className="body-large lightred"> kilomètres</label>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default DashboardWeekStats