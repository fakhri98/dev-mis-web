import react from 'react';
import Header from "./BaseLayout/Header";
import Card from "./BaseLayout/Card";
// import "../components/ButtonSidebar/ButtonSidebar.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="p-2">
        <div className="grid grid-cols-4 gap-5">
          {/* <ButtonSidebar/> */}
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;