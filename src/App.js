import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import InfoModal from "./components/InfoModal";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [open,setOpen]=useState(false);
  const handleClose=()=>{
    setOpen(false);
  }
  useEffect(()=>{
    if(!localStorage.getItem('showed'))
    {
      setTimeout(()=>{setOpen(true);localStorage.setItem('showed',true)},2000)
    }
  },[])
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
     <InfoModal handleClose={handleClose} open={open}/>
    </>
  );
}

export default App;
