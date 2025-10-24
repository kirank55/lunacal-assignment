import './App.css';
import Layout from './components/Layout';
import TabsContainer from './components/TabsContainer';

function App() {
  return (
    <Layout>
      <TabsContainer />
      <div className="animated-carousel-section">
        {/* Future carousel component will go here */}
      </div>
    </Layout>
  );
}

export default App;