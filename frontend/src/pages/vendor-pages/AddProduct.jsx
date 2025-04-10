import { useState } from 'react';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    warranty: '',
    returnPolicy: 'No',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData to send image file
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('warranty', productData.warranty);
    formData.append('returnPolicy', productData.returnPolicy);
    formData.append('image', productData.image);

    try {
      const res = await fetch('http://localhost:8000/api/vendor/add-product', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      console.log(result);
      alert('Product added successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to add product');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md mt-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          rows="3"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="text"
          name="warranty"
          placeholder="Warranty (e.g., 1 year)"
          value={productData.warranty}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <select
          name="returnPolicy"
          value={productData.returnPolicy}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="Yes">Return Policy: Yes</option>
          <option value="No">Return Policy: No</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-700 text-blue-900 py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
