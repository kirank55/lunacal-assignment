import './App.css';
import Layout from './components/Layout';
import TabsContainer from './components/TabsContainer';
import Gallery from './components/Gallery';

function App() {
  return (
    <Layout>
      <TabsContainer />
      <div className="animated-carousel-section">
        <Gallery />
      </div>
    </Layout>
  );
}

export default App;