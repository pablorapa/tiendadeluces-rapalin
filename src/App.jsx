import './App.css';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import ItemListContainer from './components/item/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/common/NotFound';
import Contact from './components/common/Contact';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import { CustomContext } from './context/CustomContext';
import Footer from './components/footer/Footer';

function App() {
  const user = {
    name: 'Maria'
  };
  return (
    <CustomContext>
      <BrowserRouter>
        <div className="bg-red-50 min-h-screen">
          <NavBar/>
            <Routes>
              <Route path="/" element={ <ItemListContainer greeting={user}/> }/>
              <Route path="/category/:id" element={ <ItemListContainer/> } />
              <Route path="/item/:id" element={ <ItemDetailContainer/> }/>
              <Route path="/contact" element={ <Contact/> }/>
              <Route path="/cart" element={ <Cart/> }/>
              <Route path="/checkout" element={ <Checkout/> }/>
              <Route path="*" element={ <NotFound/>}/>
            </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CustomContext>
  );
}

export default App;
