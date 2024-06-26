import Nav from "./components/Nav"
import SectionOne from "./components/SectionOne"
import AboutUs from "./components/AboutUs"
import Section3 from "./components/section3"
import Waitlist from "./components/Waitlist"
import Footer from "./components/Footer"


function App() {
 

  return (
    <div className=" text-text bg-[]">
      <div className="bg-yellow p-2 text-center font-bold"><h2>200 days to launch! <span className=" pl-3 text-[1.2rem]">Support us</span></h2></div>
      <Nav/>
      <SectionOne/>
      <AboutUs/>
      <Section3/>
      <Waitlist/>
      <Footer/>
    </div>
  )
}

export default App
