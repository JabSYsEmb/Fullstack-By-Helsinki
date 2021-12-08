import logo from './logo.svg';
import './App.css';

function App({notes}) {
  console.log(notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes?.map(item => {
            console.log("I've entered the lop");
            return (
              <li key={item.id}>{item.content }</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
