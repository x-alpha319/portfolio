import {
  CheckCircle2,
  ShoppingBagIcon,
  ShoppingCart,
  Upload,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Input,
  Option,
  Drawer,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageFile: null, // Changed to store the actual file
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleForm = () => {
    setOpen(!open);

    if (open && imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate image type
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrl(previewUrl);

    setNewProduct((prev) => ({
      ...prev,
      imageFile: file,
    }));
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.imageFile) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const imageUrl = URL.createObjectURL(newProduct.imageFile);

    setProducts((prev) => [
      ...prev,
      {
        ...newProduct,
        id: Date.now() + Math.random(),
        image: imageUrl,
      },
    ]);

    //   // Reset form
    // setNewProduct({
    //   name: "",
    //   description: "",
    //   price: "",
    //   imageFile: null,
    // });

    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
    }
    setImagePreviewUrl(null);
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      products.forEach((product) => {
        if (product.image) {
          URL.revokeObjectURL(product.image);
        }
      });
    };
  }, [imagePreviewUrl, products]);

  const [show, setShow] = React.useState(false);

  const openDrawer = () => setShow(true);
  const closeDrawer = () => setShow(false);

  return (
    <>
      <React.Fragment>
        <Button onClick={openDrawer}>
          <ShoppingBagIcon />
        </Button>
        <Drawer open={show} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between max-h-12 overflow-hidden">
            <Typography variant="h5" color="blue-gray">
              Material Tailwind
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Typography color="gray" className="mb-8 font-normal">
            <div>
              <p className="text-gray-900 mt-2 font-bold">
                {products.length === 0
                  ? "No products available. Add your first product!"
                  : `Added ${products.length} product${
                      products.length !== 1 ? "s" : ""
                    }`}
              </p>
            </div>
            {products.length > 0 && (
              <div className="w-full max-h-[75vh] overflow-y-auto pr-2 space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100"
                  >
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[200px] h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder-image.png";
                        }}
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2 min-h-[40px]">
                        {product.description}
                      </p>
                      <div className="flex gap-5 justify-between items-center mt-3">
                        <p className="font-semibold text-green-700">
                          ${parseFloat(product.price).toFixed(2)}
                        </p>
                        <button className="text-sm text-white hover:opacity-90 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-300 py-1.5 px-4 rounded">
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Typography>

          <div className="flex gap-2">
            <Button size="sm" variant="outlined">
              Clear Cart
            </Button>
            <Button size="sm">Checkout</Button>
          </div>
        </Drawer>
      </React.Fragment>

      <button
        onClick={toggleForm}
        className="mb-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition flex items-center gap-2 mx-auto my-12"
      >
        {open ? (
          <>
            <span>Hide Form</span>
          </>
        ) : (
          <>
            <ShoppingCart size={18} />
            <span>Add Product</span>
          </>
        )}
      </button>
      <Dialog size="sm" open={open} handler={toggleForm} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Manage Item
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Keep your records up-to-date and organized.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={toggleForm}
          ></IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          {" "}
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <ShoppingCart size={20} /> Add New Product{" "}
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {" "}
            <div>
              {" "}
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name:{" "}
              </label>{" "}
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price:
              </label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description:
              </label>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Product details..."
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-col items-center">
              <img
                src={imagePreviewUrl || "/placeholder-image.png"}
                alt="Product preview"
                className="w-full max-w-[300px] h-40 object-contain mx-auto border rounded-md bg-gray-100"
              />

              <label
                htmlFor="product-img"
                className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-md border border-blue-200 hover:bg-blue-100 cursor-pointer transition"
              >
                <Upload size={18} />
                <span>{imagePreviewUrl ? "Change Image" : "Upload Image"}</span>
              </label>
              <input
                type="file"
                name="image"
                id="product-img"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <p className="text-xs text-gray-500 mt-2">JPEG, PNG (Max 2MB)</p>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            onClick={addProduct}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center gap-2"
          >
            <CheckCircle2 size={18} />
            Add Product
          </button>
        </DialogFooter>
      </Dialog>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <CheckCircle2 size={80} className="text-gray-300 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Product Catalog
          </h2>
          <p className="text-gray-600 mt-2">
            {products.length === 0
              ? "No products available. Add your first product!"
              : `Showing ${products.length} product${
                  products.length !== 1 ? "s" : ""
                }`}
          </p>
        </div>

        {products.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[200px] h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder-image.png";
                    }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2 min-h-[40px]">
                    {product.description}
                  </p>
                  <div className="flex  gap-5 justify-between items-center mt-3">
                    <p className="font-semibold text-green-700">
                      ${parseFloat(product.price).toFixed(2)}
                    </p>
                    <button
                      onClick={addProduct}
                      className="text-sm text-white hover:opacity-90 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-300 py-1.5 px-4 rounded"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductManagement;
