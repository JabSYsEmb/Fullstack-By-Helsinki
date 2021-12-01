import { useState } from 'react';
import './App.css';

const Statistics  = ({data})    =>  Object.entries(data)
                                        .map(item => < StatisticsLine value={item[1]} msg={item[0]} className={item[0]} />)
                                        
const StatisticsLine  = ({value,msg,className})    => <p className={className}>{msg} : {value}</p>

const Header          = ({header,className})       => <h1 className={className}>{header}</h1>
const Button          = ({onClick,text,className}) => <button onClick={onClick} className={className}>{text}</button>

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
  
  const [data, updateFeedbacks] = useState({
    good    : 0,
    neutral : 0,
    bad     : 0
  });
  
  const giveGood    = () => updateFeedbacks({...data, good    : data.good + 1   } )
  const giveNeutral = () => updateFeedbacks({...data, neutral : data.neutral + 1} )
  const giveBad     = () => updateFeedbacks({...data, bad     : data.bad + 1    } )

  // console.log(Object.entries(feedbacks).map(item => item[0]+ " : " +item[1]))
  return (
    <div className="App">
      <header className="hello-world">
        < Header header={feedback_header}   className="main-color" />
        < Button onClick={giveGood}    text="Good"    className="good"    />
        < Button onClick={giveNeutral} text="Neutral" className="neutral" />
        < Button onClick={giveBad}     text="Bad"     className="bad"     />
        < Header header={statistics_header} className="main-color" />
        < Statistics data={data}/>
        < StatisticsLine value={sumOfFeedbacks(data)} msg="All" className="main-color" />
        < StatisticsLine value={findAverageOfFeedbacks(data)} msg="Average" className="main-color" />
        < StatisticsLine value={findPositiveRatioInFeedbacks(data)} msg="Postive" className="main-color" />
      </header>
    </div>
  );
}

export default App;
