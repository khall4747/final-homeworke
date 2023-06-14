import './App.css'
import { Routes, Route } from "react-router-dom";
import Signup from './componet/signup';
import Profile from './componet/profile';
import Update from './componet/Update';
import Allphoto from './componet/allphoto';
import Onephoto from './componet/onephoto';
import Navbar from './componet/navbar';
import Footer from './componet/footer';
function App() {


  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/allphoto" element={<Allphoto/>}/>
      <Route path="/onephoto" element={<Onephoto/>}/>
      </Routes> 
      <Footer/> 
    </>
  )
}

export default App
