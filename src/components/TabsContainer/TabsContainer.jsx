import { useState } from "react";
import { TABS, TAB_CONTENT } from "../../constants";
import AnimatedTabs from "./AnimatedTabs";
import Sidebar from "../Sidebar";

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  // Get content for the active tab
  const content = TAB_CONTENT[activeTab];

  return (
    <div className="animated-tabs-container">
      <Sidebar />
      <div className="animated-tabs-section">
        <div className="tabs-wrapper">
          <AnimatedTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {/* Tab content area - displays paragraphs for the active tab */}
        {content && (
          <div className="tabs-content-area">
            {content.content.map((paragraph, index) => (
              <p key={index} className={"mb-8"}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsContainer;
