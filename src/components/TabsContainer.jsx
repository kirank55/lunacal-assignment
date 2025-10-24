import { useState } from 'react';
import { TABS } from '../constants';
import AnimatedTabs from './AnimatedTabs';
import TabContent from './TabContent';
import Sidebar from './Sidebar';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <div className="animated-tabs-container">
      <Sidebar />
      <div className="animated-tabs-section">
        <div className="tabs-wrapper">
          <AnimatedTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TabsContainer;