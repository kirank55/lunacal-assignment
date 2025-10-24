import './App.css'
import AnimatedTabs from './components/AnimatedTabs'
import questionMarkIcon from './assets/questionMark.svg'
import sixBoxesIcon from './assets/6boxes.svg'

function App() {
  return (
    <div className='app'>

      <div className="container mx-auto">
        <div className="content">
          <div className="empty-space">

          </div>
          <div className="assignment-content">
            <div className="animated-tabs-container">

              <div className="icons">
                <img src={questionMarkIcon} alt="Question Mark" className="question-mark-icon" />
                <img src={sixBoxesIcon} alt="Six Boxes" className="six-boxes-icon" />
              </div>

              <div className="animated-tabs-section">
                <div className="tabs-wrapper">
                  <AnimatedTabs />
                </div>
                <div className="tabs-content-area">
                  <p className="mb-8" >Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>

                  <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
                </div>
              </div>

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