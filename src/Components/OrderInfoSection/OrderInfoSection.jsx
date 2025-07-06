import OrderSummary from "./OrderSummary";
import FilterIcon from "../../Icons/FilterIcon";
import OrderReports from "./OrderReports";
import { useState } from "react";

const OrderInfoSection = ({ orders, setOrders }) => {
  const [filterStatus, setFilterStatus] = useState("All");

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

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredOrders = orders.filter((order) => {
    if (filterStatus === "All") return true;
    return order.status === filterStatus.toLowerCase(); // match "pending" or "delivered"
  });

  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <OrderSummary orders={orders} />
      </div>

      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>

          <div className="flex gap-4 items-center">
            <FilterIcon />
            <select
              value={filterStatus}
              onChange={handleFilterChange}
              className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="reports-container">
            <OrderReports
              handleDeleteOrder={handleDeleteOrder}
              handleDeliverOrder={handleDeliverOrder}
              orders={filteredOrders}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoSection;
