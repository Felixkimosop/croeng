import './App.css';
import { Routes, Route } from "react-router";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Faqs from './Components/Faqs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      < Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/contactus' element={<Contact />} />

      </Routes>
      <hr></hr>
      <Footer />
     
    </div>
  );
}

export default App;
