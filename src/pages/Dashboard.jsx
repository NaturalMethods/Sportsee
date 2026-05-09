import "../css/dashboard/dashboard.css"
import ProfileSummary from "../components/Dashboard/ProfileSummary.jsx";
import LastPerformanceCharts from "../components/Dashboard/LastPerformanceCharts.jsx";
import WeeklyOverview from "../components/Dashboard/WeeklyOverview.jsx";
import {useContext} from "react";
import {UserContext} from "../Context/UserContext.jsx";
import Loader from "../components/Loader.jsx";

const Dashboard = () => {
    const {runningData, loading } = useContext(UserContext);

    if (loading) {
        return <Loader />;
    }

    return (
        <section className="flex-col dashboard-section">
            <ProfileSummary runningData={runningData} />
            <LastPerformanceCharts runningData={runningData} />
            <WeeklyOverview runningData={runningData} />
        </section>
    )
}
export default Dashboard