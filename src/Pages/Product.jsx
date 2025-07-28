import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Drawer } from "@material-tailwind/react";
import { ShoppingBagIcon, X } from "lucide-react";

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

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      setNewProduct((prevProduct) => ({ ...prevProduct, imageFile: file }));
    }
  };

  const addProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.imageFile
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const imageUrl = URL.createObjectURL(newProduct.imageFile);
    const newProductWithImage = {
      id: crypto.randomUUID(),
      ...newProduct,
      image: imageUrl,
    };
    setProducts((prevProducts) => [...prevProducts, newProductWithImage]);
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
    <div className="bg-white p-4 rounded shadow max-w-xs">
      <img
        src={product.image}
        alt="Product"
        onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <div className="flex justify-between items-center gap-5">
        <p className="text-lg font-semibold text-blue-600">${product.price}</p>
        <button className="text-sm text-white hover:opacity-90 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-300 py-1.5 px-4 rounded">
          Purchase
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-end p-4">
        <Button onClick={openDrawer} className="flex items-center gap-2">
          <ShoppingBagIcon /> View Cart
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 ? (
        <div className="flex justify-center items-center py-12">
          <p className="font-semibold text-xl text-gray-500 text-center">
            🛒 Store is empty. Add some products to get started!
          </p>
        </div>
      ) : (
        <div className="text-sm text-gray-700 font-medium mb-4 flex justify-center">
          ✅ Added <span className="font-bold">{products.length}</span> product
          {products.length !== 1 ? "s" : ""}
        </div>
      )}

      <div className="fixed top-4 left-4">
        <Button onClick={() => setIsOpen(true)}>Add Product</Button>
      </div>

      <Dialog
        open={isOpen}
        size="xs"
        handler={() => setIsOpen(false)}
        className="p-4"
      >
        <Card className="mx-auto w-full max-w-2xl">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h4" color="blue-gray">
                Add New Product
              </Typography>
              <Button
                variant="text"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="rounded-full"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <Input
                label="Product Name"
                name="name"
                size="lg"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />

              <Textarea
                label="Description"
                name="description"
                rows={4}
                value={newProduct.description}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Price"
                name="price"
                type="number"
                size="lg"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />

              <div className="space-y-1">
                <Typography variant="small" color="blue-gray">
                  Product Image *
                </Typography>
                <label
                  htmlFor="prod-img"
                  className="flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors hidden"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, JPEG (MAX. 5MB)
                    </p>
                  </div>
                </label>
                <input
                  id="prod-img"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className=""
                  required
                />
              </div>

              {imagePreviewUrl && (
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src={imagePreviewUrl}
                    alt="Preview"
                    className="w-full h-48 object-contain bg-gray-50"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <Button
                variant="outlined"
                size="md"
                onClick={() => setIsOpen(false)}
                className="rounded-lg"
              >
                Cancel
              </Button>
              <Button
                size="md"
                onClick={addProduct}
                className="rounded-lg bg-blue-500 hover:bg-blue-600"
              >
                Add Product
              </Button>
            </div>
          </CardBody>
        </Card>
      </Dialog>

      <Drawer open={showDrawer} onClose={closeDrawer} className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h5" color="blue-gray">
            Your Cart
          </Typography>
          <Button variant="text" onClick={closeDrawer}>
            <X />
          </Button>
        </div>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 w-full max-h-[75vh] overflow-y-auto pr-2 space-y-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <div className="flex gap-2 mt-4">
              <Button
                size="sm"
                variant="outlined"
                onClick={() => setProducts([])}
              >
                Clear Cart
              </Button>
              <Button size="sm">Checkout</Button>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default ProductManager;
