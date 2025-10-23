import './App.css'
import AnimatedTabs from './components/AnimatedTabs'

function App() {
  return (
    <div className='app'>

        <div className="container">
          <div className="content">
            <div className="empty-space">

            </div>
            <div className="assignment-content">

              <div className="animated-tabs-section">
                <AnimatedTabs />
              </div>

              <div className="animated-carousel-section">
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default App
