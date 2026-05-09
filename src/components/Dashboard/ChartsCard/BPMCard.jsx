import Arrow from "../../../assets/RightArrow.svg"
import {useContext, useEffect, useState} from "react";
import {buildWeeklyHeartRateData, formatDateShort, getAverageBpmForRange, getWeekRange} from "../../../utils/utils.jsx";
import {addDays} from "../../../utils/date.jsx";
import HeartStatsGraph from "../../Charts/CustomCharts/HeartStatsGraph.jsx";
import "../../../css/dashboard/ChartsCard/BPMCard.css"
import {UserContext} from "../../../Context/UserContext.jsx";

const BPMCard = ({runningData}) => {

    const [currentData, setCurrentData] = useState([]);
    const [ date, setDate] = useState(new Date());
    const [start, setStartWeekRange] = useState(new Date());
    const [end, setEndWeekRange] = useState(new Date());

    const [bpmData, setBpmData] = useState([]);
    const [averageBPMForRange, setAverageBPMForRange] = useState();

    const {user} = useContext(UserContext);

    function nextWeekRange(minDate, maxDate) {

        setDate(prev => {

            const nextDate = addDays(prev, 7);

            if (nextDate < minDate || nextDate > maxDate) {
                return prev;
            }

            return nextDate;
        });
    }

    function prevWeekRange(minDate, maxDate) {

        setDate(prev => {

            const prevDate = addDays(prev, -7);

            if (prevDate < minDate || prevDate > maxDate) {
                return prev;
            }

            return prevDate;
        });
    }

    //Init
    useEffect(() => {

      setCurrentData(runningData);
      setDate(new Date());

      const weekRange = getWeekRange();

      setStartWeekRange(weekRange.monday);
      setEndWeekRange(weekRange.sunday);

      setBpmData(buildWeeklyHeartRateData(weekRange.monday,currentData));

      setAverageBPMForRange(getAverageBpmForRange(weekRange.monday,weekRange.sunday,currentData));

    },[])

    // Update
    useEffect(() => {

        const range = getWeekRange(date)

        // Update start and end range
        setStartWeekRange(range.monday);
        setEndWeekRange(range.sunday);

        setBpmData(buildWeeklyHeartRateData(range.monday,currentData));
        setAverageBPMForRange(getAverageBpmForRange(range.monday,range.sunday,currentData));

    },[date, currentData]);
    useEffect(() => {
        setCurrentData(runningData);
    }, [runningData]);

    return (
        <div className="heart-graph">
            <div className="heart-graph-title flex-col">
                <div className="heart-title-container flex-row">
                    <h4 className="red">{averageBPMForRange} BPM</h4>
                    <div className="heart-graph-selector flex-row ">
                        <div onClick={() => prevWeekRange(new Date(user.createdAt), new Date())} className="arrow-container-selector flip flex-col">
                            <img src={Arrow} alt="flèche de gauche" />
                        </div>
                        <p className="body-small">{formatDateShort(start)} - {formatDateShort(end)}</p>
                        <div onClick={() => nextWeekRange(new Date(user.createdAt), new Date())} className="arrow-container-selector flex-col">
                            <img src={Arrow} alt="flèche de droite" />
                        </div>

                    </div>
                </div>
                <p className="body-small lightgrey">Fréquence cardiaque moyenne</p>
            </div>
            <div className="flex-col heart-graph-container">
                <HeartStatsGraph data={bpmData} />
            </div>

        </div>

    )}
export default BPMCard