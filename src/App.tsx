import Navbar from "@/scenes/navbar"
import { useState, useEffect } from "react"
import { SelectedPage } from "@/shared/types";
import Benefits from "@/scenes/benefits";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"


//go to shared/type.ts

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {//if you are top of page then its equal to 0
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) { setIsTopOfPage(false) }// when you are not at top
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);// we need to remove when we go to otherpage otherwise memoryleek and other ...

  }, [])


  return (
    <div className="app bg-gray-20 " >

      {/*Navbar is in scenes / novbar / index.tsx */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />

      {/*home is in scenes / home / index.tsx */}
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>

  )
}

export default App
