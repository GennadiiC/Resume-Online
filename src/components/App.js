import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Nothing from './Nothing';

export default function App() {

  return (  
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<Nothing />} />
        </Routes>
    </BrowserRouter> 
  );
}
