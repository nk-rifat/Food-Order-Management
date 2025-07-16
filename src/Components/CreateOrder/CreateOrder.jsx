import { useState } from "react";
import Products from "./Products";

const CreateOrder = ({ handlePlaceOrder }) => {
  const [currentOrder, setCurrentOrder] = useState({
    name: "",
    products: [],
  });

  function handleInputValue(e) {
    setCurrentOrder({ ...currentOrder, name: e.target.value });
  }

  function handleAddOrRemoveProduct(product) {
    const isAlreadyAdd = currentOrder.products.find((p) => p.id === product.id);

    // remove order
    if (isAlreadyAdd) {
      setCurrentOrder({
        ...currentOrder,
        products: currentOrder.products.filter((p) => p.id !== product.id),
      });
    }
    // add order
    else {
      const updatedProducts = [...currentOrder.products, product];
      setCurrentOrder({
        ...currentOrder,
        products: updatedProducts,
      });
    }
  }

  function handleAddOrder() {
    handlePlaceOrder(currentOrder);

    setCurrentOrder({
      name: "",
      products: [],
    });
  }
  // calculate total price
  const totalPrice = currentOrder.products.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer currentOrder based on a precise
        understanding of their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          value={currentOrder.name}
          onChange={handleInputValue}
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          <Products
            handleAddOrRemoveProduct={handleAddOrRemoveProduct}
            currentOrder={currentOrder}
          />
        </div>
      </div>

      <button
        onClick={handleAddOrder}
        disabled={!currentOrder.name || currentOrder.products.length === 0}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order {totalPrice}
      </button>
    </div>
  );
};

export default CreateOrder;
