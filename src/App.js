import Header from './componentes/jsx/nav-foot/Header'

import Home from './componentes/jsx/home/Home'
import {ItemList} from './componentes/jsx/cart/itemList';

import { ItemDetails } from './componentes/jsx/products-details/ProdDetails';


import Productos from './componentes/jsx/products/item';

import Footer from './componentes/jsx/nav-foot/Footer'

function App() {
  return (<>
    <Header />
    <div className="App">
      <main>
      {/* <Home /> */}

      {/* <Productos /> */}
      
      {/* <ItemDetails /> */}
      <ItemList />
      </main>
    </div>
    <Footer />
</>);
}

export default App;
