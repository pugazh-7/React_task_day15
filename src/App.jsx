import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";



const App =()=>{
  return(
    <>
    <header>
    <Navbar/>
    </header>
   
   
   <main>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="Abuot" element={<About/>}></Route>
      </Routes>

   </main>
    </>
  )
}
export default App;