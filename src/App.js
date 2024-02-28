
import './App.css';
import Menu from './components/Menubar';
import Products from './components/Products';
import Categories from './components/Categories';
import Hero from './components/Hero';

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Menu/><Hero/><Products/></>}/>
      <Route path='/products' element={<><Menu/><Products/></>}/>
      <Route path='/categories' element={<><Menu/><Categories/></>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
