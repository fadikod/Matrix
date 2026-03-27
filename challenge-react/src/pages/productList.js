import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProducts(products.filter((p) => p.id !== id));
      });
  };

  return (
    <div>
      <h2>All Products</h2>

      {/* Create button */}
      <Link to="/products/new">
        <button>Create New Product</button>
      </Link>

      {/* Products list */}
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>${product.price}</p>

          <Link to={`/products/show/${product.id}`}>
            <button>Show</button>
          </Link>

          <Link to={`/products/edit/${product.id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={() => handleDelete(product.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;