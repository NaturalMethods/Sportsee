import "../css/dashboard/dashboard.css"
import ProfileSummary from "../components/Dashboard/ProfileSummary.jsx";
import LastPerformanceCharts from "../components/Dashboard/LastPerformanceCharts.jsx";
import WeeklyOverview from "../components/Dashboard/WeeklyOverview.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Context/UserContext.jsx";

const Dashboard = () => {
    const {runningData } = useContext(UserContext);

    const [runData, setRunningData] = useState([]);

    useEffect(() =>{
            setRunningData(runningData);

    }, [runningData]);

    return (
        <section className="flex-col dashboard-section">
            <ProfileSummary />
            <LastPerformanceCharts runningData={runData} />
            <WeeklyOverview runningData={runData} />
        </section>
    )
}
export default Dashboard