import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // 🔹 Fetch existing product
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
      });
  }, [id]);

  // 🔹 Submit updated product
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      title,
      price,
      description,
    };

    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/products");
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ProductEdit;