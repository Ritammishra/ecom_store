
import './App.css';
import Menu from './components/Menubar';
import Products from './components/Products';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Heroproducts from './components/Heroproducts';
import Eletronic from './categories/Electronics';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Menu/><Hero/><Heroproducts/></>}/>
      <Route path='/electronics' element={<><Menu/><Eletronic/></>}/>
      <Route path='/products' element={<><Menu/><Products/></>}/>
      <Route path='/categories' element={<><Menu/><Categories/></>}/>
      <Route path='/cart' element={<><Menu/><Cart/></>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
