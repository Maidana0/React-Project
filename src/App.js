import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componentes/jsx/nav-foot/Header'

import Home from './componentes/jsx/home/Home'
import { ItemList } from './componentes/jsx/cart/ItemList';

import { ItemDetails } from './componentes/jsx/products-details/ProdDetails';

import Sanji from './componentes/jsx/pages-products/Sanji';
import Zoro from './componentes/jsx/pages-products/Zoro';
import Usopp from './componentes/jsx/pages-products/Usopp';


import { ToastContain } from './componentes/jsx/products/components/Toast';
import Footer from './componentes/jsx/nav-foot/Footer'

import CartContext from './componentes/jsx/cart/CartContext';

function App() {
  const cart = JSON.parse(localStorage.getItem ('carrito'))?
              JSON.parse(localStorage.getItem ('carrito'))
              : []
  return (
    <CartContext.Provider value={cart}>

      <Router>
        <Header />

        <div className="App">
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route exact path='/home' element={<Home />} />

            <Route exact path='/sanji' element={<Sanji />} />

            <Route exact path='/zoro' element={<Zoro />} />

            <Route exact path='/usopp' element={<Usopp />} />


            <Route exact path='/:category/product/:id' element={<ItemDetails />} />


            <Route exact path='/cart' element={<ItemList />} />

          </Routes>
        </div>

        <Footer />
        <ToastContain />
      </Router>

    </CartContext.Provider >

  )
}


export default App;
