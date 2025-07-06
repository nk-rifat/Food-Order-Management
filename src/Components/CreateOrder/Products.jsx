import productList from "../../Data/data";
import PlusIcon from "../../Icons/PlusIcon";
import MinusIcon from "../../Icons/MinusIcon";

const Products = ({ currentOrder, handleAddOrRemoveProduct }) => {
  return (
    <>
      {productList.map((product) => {
        const isInCart = currentOrder.products.find(
          (p) => p.id === product.id
        );

        return (
          <div
            key={product.id}
            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center mr-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-xs text-gray-400">BDT {product.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleAddOrRemoveProduct(product)}
              className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
            >
              {isInCart ? <MinusIcon /> : <PlusIcon />}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
