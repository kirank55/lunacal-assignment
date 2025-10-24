import { motion as Motion } from "framer-motion";
import { TABS } from "../../constants";
import "./animatedTabs.css";

/**
 * AnimatedTabs functional component
 * @param {Object} props - Component props
 * @param {number} props.activeTab - The ID of the currently active tab
 * @param {Function} props.setActiveTab - Function to update the active tab
 */
function AnimatedTabs({ activeTab, setActiveTab }) {
  return (
    <div className="AnimatedTabs">
      <div
        className="animated-buttons flex space-x-0.5 sm:space-x-1"
        style={{ position: "relative" }}
      >
        {/* Map through to render tab button */}
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            // Dynamic classes: apply 'activeTab' style when selected, otherwise show hover effect
            className={`${
              activeTab === tab.id ? "activeTab" : "hover:text-white/60"
            } relative rounded-full px-2 sm:px-3 py-1.5 text-xs sm:text-sm/8 font-medium text-white outline-sky-400 transition focus-visible:outline-2 h-8 sm:h-9 lg:h-10 w-24 sm:w-32 lg:w-44 xl:w-48`}
          >
            {/* Animated bubble background - only renders for active tab */}
            {activeTab === tab.id && (
              <Motion.span
                layoutId="bubble" // Shared layout ID enables smooth transition between tabs
                className="absolute inset-0 z-10 bubble rounded-2xl"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                transition={{
                  type: "spring", // Spring physics for natural movement
                  bounce: 0.2,
                  duration: 0.6,
                }}
                layout={false}
              ></Motion.span>
            )}

            {/* Hover animation container - handles left-to-right slide effect */}
            <Motion.div
              className="absolute z-20 overflow-hidden flex items-center justify-center rounded-2xl"
              style={{
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
              }}
              initial="initial"
              // Only apply hover effect if tab is not active
              whileHover={activeTab !== tab.id ? "hover" : "initial"}
              variants={{
                initial: {},
                hover: {},
              }}
            >
              {/* Sliding background overlay for hover effect */}
              <Motion.div
                className="absolute inset-0 bg-gray-600/30 rounded-2xl"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                variants={{
                  initial: { x: "-100%" }, // Start off-screen to the left
                  hover: { x: "0%" }, // Slide in from left on hover
                }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
              />
              {/* Tab label text - positioned above all animations */}
              <span className="relative z-10">{tab.label}</span>
            </Motion.div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTabs;
