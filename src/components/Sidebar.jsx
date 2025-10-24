import questionMarkIcon from '../assets/questionMark.svg';
import sixBoxesIcon from '../assets/6boxes.svg';

const Sidebar = () => {
  return (
    <div className="icons">
      <img 
        src={questionMarkIcon} 
        alt="Question Mark" 
        className="question-mark-icon" 
      />
      <img 
        src={sixBoxesIcon} 
        alt="Six Boxes" 
        className="six-boxes-icon" 
      />
    </div>
  );
};

export default Sidebar;