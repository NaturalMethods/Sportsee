import KmStatsGraph from "../../Charts/CustomCharts/KmStatsGraph.jsx";
import Arrow from "../../../assets/RightArrow.svg"
import {useEffect, useState} from "react";
import {buildWeeklyKmData, formatDateShort, getAverageKmForRange} from "../../../utils/utils.jsx";
import {addDays} from "../../../utils/date.jsx";
import "../../../css/dashboard/ChartsCard/distanceCard.css"

// Return monday date 4 weeks before and sunday date of current week
function get4WeekRange(referenceDate = new Date()) {
    const date = new Date(referenceDate);

    // Trouver le lundi de la semaine courante
    const day = date.getDay(); // 0 = dimanche ... 6 = samedi
    const diffToMonday = (day === 0 ? -6 : 1 - day);

    const currentMonday = new Date(date);
    currentMonday.setDate(date.getDate() + diffToMonday);

    // Dimanche de la semaine courante
    const currentSunday = new Date(currentMonday);
    currentSunday.setDate(currentMonday.getDate() + 6);

    // Lister les 4 semaines
    const weeks = [];

    for (let i = 3; i >= 0; i--) {
        const monday = new Date(currentMonday);
        monday.setDate(currentMonday.getDate() - i * 7);

        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);

        weeks.push({
            start: monday,
            end: sunday,
        });
    }

    return {
        start: weeks[0].start,
        end: weeks[weeks.length - 1].end,
        weeks
    };
}

const DistanceCard = ({runningData}) => {

    const [currentData, setCurrentData] = useState([]);
    const [ date, setDate] = useState(new Date());
    const [start, setStart4WeekRange] = useState(new Date());
    const [end, setEnd4WeekRange] = useState(new Date());

    const [averageKmForRange, setAverageKmForRange] = useState();
    const [weeks, setWeeks] = useState([]);
    const [kmData, setKmData] = useState([]);

    function next4WeekRange() {
        setDate(prev => addDays(prev, 28));
    }
    function prev4WeekRange() {
        setDate(prev => addDays(prev, -28));
    }

    // Init
    useEffect(() => {

        setCurrentData(runningData);

        setDate(new Date());

        const fourWeekRange = get4WeekRange();

        setStart4WeekRange(fourWeekRange.start);
        setEnd4WeekRange(fourWeekRange.end);
        setWeeks(fourWeekRange.weeks);
        setKmData(buildWeeklyKmData(weeks,currentData))

    },[]);

    useEffect(() => {
        setCurrentData(runningData);
    }, [runningData]);


    // Update
    useEffect(() => {

        const range = get4WeekRange(date)

        // Update start and end range
        setStart4WeekRange(range.start);
        setEnd4WeekRange(range.end);

        setWeeks(range.weeks);
        setKmData(buildWeeklyKmData(range.weeks,currentData))

        setAverageKmForRange(getAverageKmForRange(range.start,range.end,currentData));

    },[date, currentData]);

    return (
        <div className="distance-graph">
            <div className="km-graph-title flex-col">
                <div className="km-title-container flex-row">
                    <h4 className="blue">{averageKmForRange}km en moyenne</h4>
                    <div className="km-graph-selector flex-row ">
                        <div onClick={prev4WeekRange} className="arrow-container-selector flip flex-col">
                            <img src={Arrow} alt="flèche de gauche" />
                        </div>
                        <p className="body-small">{formatDateShort(start)} - {formatDateShort(end)}</p>
                        <div onClick={next4WeekRange} className="arrow-container-selector flex-col">
                            <img src={Arrow} alt="flèche de droite" />
                        </div>

                    </div>
                </div>
                <p className="body-small lightgrey">Total des kilomètres 4 dernières semaines</p>
            </div>
            <div className="flex-col km-graph">
                <KmStatsGraph  data={kmData} />
            </div>
        </div>

    )}
export default DistanceCard