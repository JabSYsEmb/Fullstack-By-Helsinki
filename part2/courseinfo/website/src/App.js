import React, {useEffect, useState} from 'react';


const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <>
      <p>You clicked {count} times no this button.</p>
      <button onClick={()=>setCount(count+1)}>click me</button>
    </>
    )
}

export default App;
