import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/common/notFound/NotFound';
import Contact from './components/common/contact/Contact';
import Cart from './components/cart/Cart';
import { Checkout } from './components/cart/checkout/Checkout';
import { CartProvider } from './context/CartProvider';
import Footer from './components/footer/Footer';
import ErrorPage from './components/common/errorPage/ErrorPage';
import { ErrorProvider } from './context/ErrorProvider';
import ItemDetailContainer from './components/products/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/products/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';

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
