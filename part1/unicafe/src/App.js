import { useState } from 'react';
import './App.css';

const Header          = ({header,className})       => <h1 className={className}>{header}</h1>
const Button          = ({onClick,text,className}) => <button onClick={onClick} className={className}>{text}</button>
const StatisticsLine  = ({value,msg,className})    => <p className={className}>{msg} : {value}</p>

const sumOfFeedbacks  = (feedbacks)                => Object.entries(feedbacks).reduce((result,item) => (result+item[1]),0);
const fixFloat        = (float_num,step)           => float_num.toFixed(step)
const isSumZero       = (feedbacks)                => (sumOfFeedbacks(feedbacks) === 0 )

const findAverageOfFeedbacks       = (feedbacks) => (
  isSumZero(feedbacks) ?
  "No feedbacks given":fixFloat((feedbacks.good+feedbacks.bad)/sumOfFeedbacks(feedbacks),4)
  )

const findPositiveRatioInFeedbacks = (feedbacks) => (
  isSumZero(feedbacks) ?
  "No feedbacks given":fixFloat(feedbacks.good/sumOfFeedbacks(feedbacks),2) * 100 + " %"
  )

function App() {
  const feedback_header   = "Give feedback";
  const statistics_header = "Statistics";
  
  const [feedbacks, updateFeedbacks] = useState({
    good    : 0,
    neutral : 0,
    bad     : 0
  });
  const giveGood    = () => updateFeedbacks({...feedbacks, good    : feedbacks.good + 1   } )
  const giveNeutral = () => updateFeedbacks({...feedbacks, neutral : feedbacks.neutral + 1} )
  const giveBad     = () => updateFeedbacks({...feedbacks, bad     : feedbacks.bad + 1    } )
  // console.log(Object.entries(feedbacks).map(item => item[0]+ " : " +item[1]))
  return (
    <div className="App">
      <header className="hello-world">
        < Header header={feedback_header}   className="main-color" />
        < Button onClick={giveGood}    text="Good"    className="good"    />
        < Button onClick={giveNeutral} text="Neutral" className="neutral" />
        < Button onClick={giveBad}     text="Bad"     className="bad"     />
        < Header header={statistics_header} className="main-color" />
        < StatisticsLine value={feedbacks.good}    msg="Good"    className="good"    />
        < StatisticsLine value={feedbacks.neutral} msg="Neutral" className="neutral" />
        < StatisticsLine value={feedbacks.bad}     msg="Bad"     className="bad"     />
        < StatisticsLine value={sumOfFeedbacks(feedbacks)} msg="All" className="main-color" />
        < StatisticsLine value={findAverageOfFeedbacks(feedbacks)} msg="Average" className="main-color" />
        < StatisticsLine value={findPositiveRatioInFeedbacks(feedbacks)} msg="Postive" className="main-color" />
      </header>
    </div>
  );
}

export default App;
