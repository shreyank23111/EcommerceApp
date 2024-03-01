import  {BrowserRouter, Routes, Route} from "react-router-dom";
import { Suspense, lazy } from "react";
import { Header } from "./Components/Header/Header";

const Contact = lazy(()=> import("./Components/Main/Contact"))
const Home = lazy(()=> import("./Components/Main/Home"))
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/contact" element={<Suspense fallback={"contact..."}><Contact/></Suspense>}/>
      <Route path="/home" element={<Suspense fallback={"home..."}><Home/></Suspense>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
