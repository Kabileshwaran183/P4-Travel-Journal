import Header from "./components/Header"
import Entry from "./components/Entry"
import image from "./assets/Japan.jpeg"
function App() {

  return (
    <>
      <Header/>
      <Entry img={image}
              city="Japan"
              name="Mount Fuji"
              date="12 Jan,2021 - 24 Jan,2021"
              details="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
    <Entry img={image}
              city="Japan"
              name="Mount Fuji"
              date="12 Jan,2021 - 24 Jan,2021"
              details="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
    <Entry img={image}
              city="Japan"
              name="Mount Fuji"
              date="12 Jan,2021 - 24 Jan,2021"
              details="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
    <Entry img={image}
              city="Japan"
              name="Mount Fuji"
              date="12 Jan,2021 - 24 Jan,2021"
              details="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
    
      </>
  )
}

export default App
