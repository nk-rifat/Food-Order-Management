const OrderReports = ({ orders, handleDeleteOrder, handleDeliverOrder }) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="text-left text-sm">
          <th className="pb-3 font-medium">ID</th>
          <th className="pb-3 font-medium">Customer Name</th>
          <th className="pb-3 font-medium">Items</th>
          <th className="pb-3 font-medium">Amount</th>
          <th className="pb-3 font-medium">Status</th>
          <th className="pb-3 font-medium">Action</th>
        </tr>
      </thead>
      {orders.map((order) => {
        const totalPrice = order.products.reduce(
          (sum, product) => sum + product.price,
          0
        );
        return (
          <tbody key={order.id}>
            <tr className="border-t border-gray-700">
              <td className="py-3">{order.id}</td>
              <td className="py-3">{order.name}</td>
              <td className="py-3">{order.products.length}</td>
              <td className="py-3">{totalPrice}</td>
              <td className="py-3">
                <span
                  className={
                    order.status === "pending"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {order.status.toUpperCase()}
                </span>
              </td>
              <td className="py-3">
                <button
                  onClick={() => handleDeleteOrder(order.id)}
                  className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                >
                  Delete
                </button>
                {order.status === "pending" && (
                  <button
                    onClick={() => handleDeliverOrder(order.id)}
                    className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full"
                  >
                    DELIVER
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default OrderReports;
