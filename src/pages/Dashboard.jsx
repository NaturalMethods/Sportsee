import "../css/dashboard.css"
import DashboardHeaderProfile from "../components/DashboardHeaderProfile.jsx";
import DashboardStats from "../components/DashboardStats.jsx";

const Dashboard = () => {
    return (
        <section className="flex-col dashboard-section">
            <DashboardHeaderProfile />
            <DashboardStats />
        </section>
    )
}
export default Dashboard