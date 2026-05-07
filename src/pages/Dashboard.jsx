import "../css/dashboard/dashboard.css"
import DashboardHeaderProfile from "../components/dashboard/DashboardHeaderProfile.jsx";
import DashboardStats from "../components/dashboard/Graphs/DashboardStats.jsx";
import DashboardWeekStats from "../components/dashboard/WeekStatistics/DashboardWeekStats.jsx";
import {getRunningData} from "../data/MockService.jsx";
import {useEffect, useState} from "react";

const Dashboard = () => {

    const [runningData, setRunningData] = useState([]);

    useEffect(() =>{

        const fetchData = async () => {

            setRunningData(await getRunningData());

        }
        fetchData();
    }, []);

    return (
        <section className="flex-col dashboard-section">
            <DashboardHeaderProfile />
            <DashboardStats runningData={runningData} />
            <DashboardWeekStats runningData={runningData} />
        </section>
    )
}
export default Dashboard