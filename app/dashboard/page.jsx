import Card from "../ui/Dashboard/card/card.jsx";
import Chart from "../ui/Dashboard/chart/chart.jsx";
import styles from "../ui/Dashboard/dashboard.module.css";
import Rightbar from "../ui/Dashboard/rigthbar/rightbar.jsx";
import Transactions from "../ui/Dashboard/Transactions/transactions.jsx";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
        
            <Card   />
            <Card   />
            <Card   />

        
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;