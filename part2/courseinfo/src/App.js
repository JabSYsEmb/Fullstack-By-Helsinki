const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200){
    console.log("done")
    JSON.parse(xhttp.responseText).map(
      item => {
        let elment = document.createElement('li')
        elment.appendChild(document.createTextNode(item.content))
        document.getElementsByClassName("div-content")[0].appendChild(elment)
    })
  }
}

xhttp.open('GET', 'http://localhost:3003/notes', true)
xhttp.send()

const App = () => {

  return (
    <>
    <h1>Data</h1>
    <ul className="div-content"></ul>
    </>
    )
}

export default App;
