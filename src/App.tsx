import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Sope";
import Laoute from "./components/Laoute";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartCantext";
import { useLoginCantext } from "./context/LoginCantext";
import Private from "./pages/Private";
import Login from "./pages/Login";

function App() {
  const { isLogin } = useLoginCantext();

  return (
    <CartProvider>
      <Laoute>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/login"
            element={isLogin ? <Navigate to="/" /> : <Login />}
          />

          <Route element={<Private />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Laoute>
    </CartProvider>
  );
}

export default App;
