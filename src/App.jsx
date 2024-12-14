import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"
function App() {
  const entryElements = data.map((item)=>{
    return  <Entry  key={item.id}
    image={item.img}
    title={item.title}
    country={item.country}
    googleMapsLink={item.googleMapsLink}
    dates={item.dates}
    details={item.details}/>
  })
  return (
    <>
      <Header/>
      <h1 class="sub-title">Recent Tours</h1>
      {entryElements}

      </>
  )
}

export default App
