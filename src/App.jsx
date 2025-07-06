import { useState } from "react";
import "./App.css";
import CreateOrder from "./Components/CreateOrder/CreateOrder";
import Navbar from "./Components/Navbar/Navbar";
import OrderInfoSection from "./Components/OrderInfoSection/OrderInfoSection";

function App() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrder setOrders={setOrders}></CreateOrder>
        <OrderInfoSection
          orders={orders}
          setOrders={setOrders}
        ></OrderInfoSection>
      </div>
    </div>
  );
}

export default App;
