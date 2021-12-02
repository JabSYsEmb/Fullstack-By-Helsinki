import { useState } from 'react';
import './App.css';

const Statistics  = ({data}) =>  {
  return isSumZero(data) ? 
    dataNotFound() : getStatistics(data);
}    

const getStatistics            = (data) => (
  <>
  {Object.entries(data).map((item) => 
        < StatisticsLine key={item[0]} value={item[1]} msg={item[0]} />)}
  {Object.entries(getRemainingStatistics(data)).map((item) => 
        < StatisticsLine key={item[0]} value={item[1]} msg={item[0]} />)}
  </>
)
const FeedbackButtons = ({data}) => Object.entries(data).map((item) =>
  <Button key={item[0]} onClick={item[1]} text={item[0]} />
);

const getRemainingStatistics   = (data) => {
  const metrics = {
    sum     : sumOfFeedbacks(data),
    average : findAverageOfFeedbacks(data),
    postive : findPositiveRatioInFeedbacks(data)
  }
  return metrics;
}

const findAverageOfFeedbacks       = (feedbacks) => (
  isSumZero(feedbacks) ?
  dataNotFound() : fixFloat((feedbacks.good+feedbacks.bad)/sumOfFeedbacks(feedbacks),4)
)

const findPositiveRatioInFeedbacks = (feedbacks) => (
  isSumZero(feedbacks) ?
  dataNotFound() : fixFloat(feedbacks.good/sumOfFeedbacks(feedbacks),3) * 100 + " %"
)

const StatisticsLine  = ({value,msg})    => <p >{msg} : {value}</p>
const dataNotFound    = ()               => <p>No feedbacks given</p>

const sumOfFeedbacks  = (feedbacks)      => Object.entries(feedbacks).reduce((result,item) => (result+item[1]),0);
const fixFloat        = (float_num,step) => float_num.toFixed(step)
const isSumZero       = (feedbacks)      => (sumOfFeedbacks(feedbacks) === 0 )

const Header          = ({header})       => <h1 >{header}</h1>
const Button          = ({onClick,text}) => <button onClick={onClick} >{text}</button>


function App() {
  const feedback_header   = "Give feedback";
  const statistics_header = "Statistics";
  
  const [data, updateData] = useState({
    good    : 0,
    neutral : 0,
    bad     : 0
  });

  const dataUpdaters = {
    good    : () => updateData({...data, good    : data.good + 1   } ),
    neutral : () => updateData({...data, neutral : data.neutral + 1} ),
    bad     : () => updateData({...data, bad     : data.bad + 1    } )
  }


  // console.log(Object.entries(feedbacks).map(item => item[0]+ " : " +item[1]))
  return (
    <div className="App">
      <header className="hello-world">
        < Header header={feedback_header}   />
        < FeedbackButtons data={dataUpdaters} />
        < Header header={statistics_header} />
        < Statistics data={data}/>
      </header>
    </div>
  );
}

export default App;
