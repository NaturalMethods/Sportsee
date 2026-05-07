import Arrow from "../../../assets/RightArrow.svg"
import {useEffect, useState} from "react";
import {buildWeeklyHeartRateData, formatDateShort, getAverageBpmForRange, getWeekRange} from "../../../utils/utils.jsx";
import {addDays} from "../../../utils/date.jsx";
import HeartStatsGraph from "../../graphs/HeartStatsGraph.jsx";

const BPMCard = ({runningData}) => {

    const [currentData, setCurrentData] = useState([]);
    const [ date, setDate] = useState(new Date());
    const [start, setStartWeekRange] = useState(new Date());
    const [end, setEndWeekRange] = useState(new Date());

    const [bpmData, setBpmData] = useState([]);
    const [averageBPMForRange, setAverageBPMForRange] = useState();

    function nextWeekRange() {
        setDate(prev => addDays(prev, +7));
    }

    function prevWeekRange() {
        setDate(prev => addDays(prev, -7));
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

    useEffect(() => {
        setCurrentData(runningData);
    }, [runningData]);

    // Update
    useEffect(() => {

        const range = getWeekRange(date)

        // Update start and end range
        setStartWeekRange(range.monday);
        setEndWeekRange(range.sunday);

        setBpmData(buildWeeklyHeartRateData(range.monday,currentData));
        setAverageBPMForRange(getAverageBpmForRange(range.monday,range.sunday,currentData));

    },[date, currentData]);

    return (
        <div className="heart-graph">
            <div className="heart-graph-title flex-col">
                <div className="heart-title-container flex-row">
                    <h4 className="red">{averageBPMForRange} BPM</h4>
                    <div className="heart-graph-selector flex-row ">
                        <div onClick={prevWeekRange} className="arrow-container-selector flip flex-col">
                            <img src={Arrow} alt="flèche de gauche" />
                        </div>
                        <p className="body-small">{formatDateShort(start)} - {formatDateShort(end)}</p>
                        <div onClick={nextWeekRange} className="arrow-container-selector flex-col">
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