import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
  Drawer,
} from "@material-tailwind/react";
import { CheckCircle2, ShoppingBagIcon, X } from "lucide-react";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageFile: null,
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      setNewProduct((prev) => ({ ...prev, imageFile: file }));
    }
  };

  const addProduct = () => {
    const { name, description, price, imageFile } = newProduct;
    if (!name || !description || !price || !imageFile) {
      alert("Please fill in all fields.");
      return;
    }

    const newProductWithImage = {
      id: crypto.randomUUID(),
      name,
      description,
      price,
      image: URL.createObjectURL(imageFile),
    };

    setProducts((prev) => [...prev, newProductWithImage]);
    setNewProduct({ name: "", description: "", price: "", imageFile: null });
    setImagePreviewUrl(null);
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  const ProductCard = ({ product }) => (
    <div className="bg-white p-4 rounded-xl  hover:shadow-2xl transition w-full max-w-xs mx-auto shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
        onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
      />
      <h2 className="text-lg font-bold mt-3">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-blue-600 font-semibold text-lg">
          ${product.price}
        </span>
        <Button size="sm" className="rounded bg-blue-500 hover:bg-blue-600">
          Purchase
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-400 py-20 px-4 md:px-12">
      <div className="flex justify-between mb-6">
        <Button onClick={() => setIsOpen(true)}>+ Add Product</Button>
        <Button
          onClick={() => setShowDrawer(true)}
          className="flex items-center gap-2"
        >
          <ShoppingBagIcon size={20} /> View Cart
        </Button>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-xl py-20 px-5 rounded-xl">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-800  text-3xl rounded-xl shadow-lg py-40 font-bold">
          <p className="mx-auto w-20">
            <CheckCircle2 size={45} />
          </p>
          <br />
          🛒 Store is empty. Add some products to get started!
        </div>
      )}

      <Dialog
        open={isOpen}
        size="md"
        handler={() => setIsOpen(false)}
        className="p-4"
      >
        <Card className="w-full">
          <CardBody>
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h5">Add New Product</Typography>
              <Button variant="text" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </Button>
            </div>

            <div className="space-y-4">
              <Input
                label="Product Name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
              <Textarea
                label="Description"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
              <Input
                label="Price"
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
              <div>
                <label className="text-sm font-medium block mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreviewUrl && (
                <img
                  src={imagePreviewUrl}
                  alt="Preview"
                  className="w-full h-48 object-contain border rounded mt-2"
                />
              )}
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <Button variant="outlined" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={addProduct}>Add Product</Button>
            </div>
          </CardBody>
        </Card>
      </Dialog>

      <Drawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        className="p-4 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6">Your Cart</Typography>
          <Button variant="text" onClick={() => setShowDrawer(false)}>
            <X />
          </Button>
        </div>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-between mt-6 gap-4">
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setProducts([])}
              >
                Clear Cart
              </Button>
              <Button fullWidth color="green">
                Checkout
              </Button>
            </div>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default ProductManager;
