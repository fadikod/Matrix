import { Routes, Route } from "react-router-dom";
import ProductsList from "./pages/productList";
import ProductShow from "./pages/productShow";
import ProductCreate from "./pages/productCreate";
import ProductEdit from "./pages/productEdit";

function App() {
  return (
    <div>
      <h1>React Challenge</h1>

      <Routes>
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/show/:id" element={<ProductShow />} />
        <Route path="/products/new" element={<ProductCreate />} />
        <Route path="/products/edit/:id" element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

export default App;