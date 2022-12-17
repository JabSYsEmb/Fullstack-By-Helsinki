import BlogContainer from './components/BlogContainer.js';

const listOfBlogs = [
  {
    title: "Blog container",
    img:   "/logo192.png",
    content: "sdfhsldkfjsldkjflksjdf lksj test",
  },
  {
    title: "Blog container",
    img:   "/logo192.png",
    content: "sdsdffhsldkfjsldkjflksjdf lksj test",
  },
  {
    title: "Blog container",
    img:   "/logo192.png",
    content: "sdfsdfhsldkfjsldkjflksjdf lksj test",
  },
  {
    title: "Blog container",
    img:   "/logo192.png",
    content: "sdfhsldkfjsldkjflksjdf sdflksj test",
  },
]

function App() {
  return (
    <div className="App">
      <BlogContainer listOfBlogs={listOfBlogs}/>
      <header className="App-header">Hello world!</header>
    </div>
  );
}

export default App;
