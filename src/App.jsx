import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"
function App() {
  const entryElements = data.map((item)=>{
    return  <Entry  key={item.id}
    img={item.img}
    title={item.title}
    country={item.country}
    googleMapsLink={item.googleMapsLink}
    dates={item.dates}
    details={item.details}/>
  })
  return (
    <>
      <Header/>
      {entryElements}
      </>
  )
}

export default App
