import React, { useState } from "react";

// ✅ Product Data
const productsData = [
  { id: 1, title: "Nike Shoes", owner: "Philip H. Knight", price: 50, image: "../nike.png" },
  {
    id: 2,
    title: "Adidas Sneakers",
    owner: "Bjorn Gulden",
    price: 70,
    image: "../addidas.png",
  },
  {
    id: 3,
    title: "Puma Sandals",
    owner: "Rudolf Dassler",
    price: 40,
    image: "../puma.png",
  },
  {
    id: 4,
    title: "Reebok Runners",
    owner: "Joe Foster",
    price: 90,
    image: "../reebok.png",
  },
  {
    id: 5,
    title: "Stylo Shoes",
    owner: "Mazhar Hussain Siddiqui",
    price: 55,
    image: "../stylo.png",
  },
  {
    id: 6,
    title: "Service Shoes",
    owner: "Arif Saeed",
    price: 45,
    image: "../service.png",
  },
];

// ✅ Product Card Component
const ProductCard = ({ product }) => (
  <div className="bg-gray-200 shadow-md rounded-2xl p-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 text-center">
    <img
      src={product.image}
      alt={product.title}
      className="rounded-lg mb-3 w-full h-40 object-cover"
    />
    <h3 className="text-lg font-semibold">{product.title}</h3>
    <p className="text-sm text-gray-500">Owner: {product.owner}</p>
    <p className="text-blue-600 font-bold">${product.price}</p>
  </div>
);

// ✅ Product List Component
const ProductList = () => {
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  // Apply filter logic
  const filteredProducts =
    filter === "all" ? productsData : productsData.filter((p) => p.price < 60);

  const currentProduct = filteredProducts[index];

  const nextProduct = () => {
    setIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevProduct = () => {
    setIndex(
      (prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Product Listing</h1>

      {/* Filter Dropdown */}
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border rounded-lg shadow-sm"
      >
        <option value="all">All Products</option>
        <option value="under60">Price under $60</option>
      </select>

      {/* Product Display */}
      {filteredProducts.length > 0 ? (
        <ProductCard product={currentProduct} />
      ) : (
        <p className="text-red-500">No products match this filter.</p>
      )}

      {/* Navigation Buttons */}
      {filteredProducts.length > 0 && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevProduct}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            ⬅ Previous
          </button>
          <button
            onClick={nextProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
