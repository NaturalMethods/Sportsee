import "../css/dashboard.css"
import DashboardHeaderProfile from "../components/DashboardHeaderProfile.jsx";
import DashboardStats from "../components/DashboardStats.jsx";
import DashboardWeekStats from "../components/DashboardWeekStats.jsx";

const Dashboard = () => {
    return (
        <section className="flex-col dashboard-section">
            <DashboardHeaderProfile />
            <DashboardStats />
            <DashboardWeekStats />
        </section>
    )
}
export default Dashboard