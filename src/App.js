import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componentes/jsx/nav-foot/Header'

import Home from './componentes/jsx/home/Home'
import { ItemList } from './componentes/jsx/cart/ItemList';

import { ItemDetails } from './componentes/jsx/products-details/ProdDetails';

import CategoryList from './componentes/jsx/pages-products/CategoryList';


import { ToastContain, FavToastContainer } from './componentes/jsx/products/components/Toast';
import Footer from './componentes/jsx/nav-foot/Footer'
import {CartProvider} from './componentes/jsx/cart/components/CartContext';
import Account from './firebase/log/Account';
import FavList from './componentes/jsx/FavList/FavList';

import SeguirOrden from './componentes/jsx/SeguirOrden';


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
            
            <Route exact path='/products/favList' element={<FavList />} />


            <Route exact path='/:category/product/:id' element={<ItemDetails />} />


            <Route exact path='/cart' element={<ItemList />} />


            <Route exact path='/account/:action' element={<Account />}/>

            {/*EN PROCESO fail <Route exact path='/order' element={<SeguirOrden />}/> */}
            
          </Routes>
        </main>

        <Footer />
        <ToastContain />
        <FavToastContainer />
      </Router>
    </CartProvider>

  )
}


export default App;
