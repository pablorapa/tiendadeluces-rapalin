import ItemDetailContainer from './components/products/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/common/NotFound/NotFound';
import Contact from './components/common/Contact/Contact';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout/Checkout';
import { CartProvider } from './context/CartProvider';
import Footer from './components/footer/Footer';
import ErrorPage from './components/common/ErrorPage/ErrorPage';
import { ErrorProvider } from './context/ErrorProvider';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <ErrorProvider>
          <div className="bg-red-50">
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </ErrorProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
