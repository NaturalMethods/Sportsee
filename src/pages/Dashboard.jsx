import "../css/dashboard/dashboard.css"
import DashboardHeaderProfile from "../components/dashboard/DashboardHeaderProfile.jsx";
import DashboardStats from "../components/dashboard/DashboardStats.jsx";
import DashboardWeekStats from "../components/dashboard/DashboardWeekStats.jsx";

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