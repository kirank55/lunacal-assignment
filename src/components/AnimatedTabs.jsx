import { motion } from "framer-motion";
import { useState } from "react";

import "./animatedTabs.css";

let tabs = [
  { id: 1, label: "About Me" },
  { id: 2, label: "Experiences" },
  { id: 3, label: "Recomended" },
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="AnimatedTabs">
      <div className="animated-buttons flex space-x-0.5 sm:space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "activeTab" : "hover:text-white/60"
            } relative rounded-full px-2 sm:px-3 py-1.5 text-xs sm:text-sm/8 font-medium text-white outline-sky-400 transition focus-visible:outline-2 h-8 sm:h-9 lg:h-10 w-24 sm:w-32 lg:w-44 xl:w-48`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bubble rounded-2xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
              </motion.span>
            )}
            <motion.div 
              className="absolute z-20 overflow-hidden flex items-center justify-center rounded-2xl"
              style={{ 
                height: '100%',
                width: '100%',
                top: 0,
                left: 0
              }}
              initial="initial"
              whileHover={activeTab !== tab.id ? "hover" : "initial"}
              variants={{
                initial: {},
                hover: {}
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-600/30 rounded-2xl"
                style={{ 
                  height: '100%',
                  width: '100%'
                }}
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "0%" }
                }}
                transition={{ 
                  type: "spring", 
                  bounce: 0.2, 
                  duration: 0.6 
                }}
              />
              <span className="relative z-10">{tab.label}</span>
            </motion.div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTabs;
