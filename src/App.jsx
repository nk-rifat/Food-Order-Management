import { useState } from "react";
import "./App.css";
import CreateOrder from "./Components/CreateOrder/CreateOrder";
import Navbar from "./Components/Navbar/Navbar";
import OrderInfoSection from "./Components/OrderInfoSection/OrderInfoSection";

function App() {
  const [orders, setOrders] = useState([]);

  function handlePlaceOrder(currentOrder) {
    setOrders((prevOrders) => [currentOrder, ...prevOrders]);
  }

  function handleDeleteOrder(id) {
    const remainOrders = orders.filter((order) => order.id !== id);
    setOrders(remainOrders);
  }

  function handleDeliverOrder(id) {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "delivered" } : order
    );

    setOrders(updatedOrders);
  }

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrder handlePlaceOrder={handlePlaceOrder}></CreateOrder>
        <OrderInfoSection
          orders={orders}
          handleDeleteOrder={handleDeleteOrder}
          handleDeliverOrder={handleDeliverOrder}
        ></OrderInfoSection>
      </div>
    </div>
  );
}

export default App;
