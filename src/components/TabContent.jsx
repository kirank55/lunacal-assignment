import { TAB_CONTENT } from '../constants';

const TabContent = ({ activeTab }) => {
  const content = TAB_CONTENT[activeTab];
  
  if (!content) return null;

  return (
    <div className="tabs-content-area">
      {content.content.map((paragraph, index) => (
        <p 
          key={index} 
          className={"mb-8"}
          >
            {/* className={index === 0 ? "mb-8" : ""} */}
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default TabContent;