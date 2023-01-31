import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componentes/jsx/nav-foot/Header'

import Home from './componentes/jsx/home/Home'
import { ItemList } from './componentes/jsx/cart/ItemList';

import { ItemDetails } from './componentes/jsx/products-details/ProdDetails';

import CategoryList from './componentes/jsx/pages-products/CategoryList';


import { ToastContain } from './componentes/jsx/products/components/Toast';
import Footer from './componentes/jsx/nav-foot/Footer'
import {CartProvider} from './componentes/jsx/cart/components/CartContext';
import Account from './firebase/log/Account';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />

        <main className="App">
          <Routes>
          <Route path='/*' element={<Home />} /> 

            <Route exact path='/home' element={<Home />} />

            <Route exact path='/category/:category' element={<CategoryList />} />


            <Route exact path='/:category/product/:id' element={<ItemDetails />} />


            <Route exact path='/cart' element={<ItemList />} />


            <Route exact path='/account/:action' element={<Account />}/>


          </Routes>
        </main>

        <Footer />
        <ToastContain />
      </Router>
    </CartProvider>

  )
}


export default App;
