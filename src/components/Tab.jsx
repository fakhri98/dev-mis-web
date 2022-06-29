import { useState } from "react";
import Button from "./Button";

const Tab = ({ active }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { name: "Identitas Markas", id: 1 },
    { name: "Domisili Markas", id: 2 },
    { name: "Admistrasi Markas", id: 3 },
  ];

  return (
    <div className="d-flex flex flex-row m-2 space-x-2">
      {tabs.map((tab) => (
        <div className="w-1/6">
          <Button
            variant={tab.id == activeTab ? "primary" : "inactive"}
            textVariant={tab.id == activeTab ? "secondary" : "primary"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Tab;
