import Note from './components/Note';

function App({notes}) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes?.map(item => <Note key={item} note={item}/>)
        }
      </ul>
    </div>
  );
}

export default App;
