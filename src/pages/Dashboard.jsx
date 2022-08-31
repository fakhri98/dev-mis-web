import react from 'react';
import Header from "./BaseLayout/Header";
import Card from "./BaseLayout/Card";
// import "../components/ButtonSidebar/ButtonSidebar.css";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {/* <ButtonSidebar/> */}
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;