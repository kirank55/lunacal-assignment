import "./App.css";
import TabsContainer from "./components/TabsContainer/TabsContainer";
import GallaryCarousel from "./components/GallaryCarousel/GallaryCarousel";

function App() {
  return (
    <div className="app">
      <div className="container mx-auto">
        <div className="content">
          <div className="empty-space"></div>
          {/* Assignment Content Starts from here */}
          <div className="assignment-content">
            <TabsContainer />
            <GallaryCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
