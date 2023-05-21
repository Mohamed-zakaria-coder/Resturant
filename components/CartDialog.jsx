import { addToCart } from "../helpers";
import { getItems } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const CartDialog = ({ product, setDialogOpened }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = Object.fromEntries(new FormData(e.target));
    const res = await addToCart(formData.product_id, Number(formData.quantity));
    if ((res.message = "Successfully Added")) {
      setDialogOpened(false);
      dispatch(getItems(res.cart_items));
    }
  };
  return (
    <div className="fixed w-screen h-screen bg-gray-300/50 flex items-center justify-center top-0 left-0 z-50">
      <div className="w-64 rounded-lg bg-white p-4 shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h4 className="capitalize font-semibold">{product.title}</h4>
          <span
            onClick={() => setDialogOpened(false)}
            className="cursor-pointer text-lg font-semibold"
          >
            ×
          </span>
        </div>

        <hr />
        <br />
        <form onSubmit={handleSubmit} className="flex flex-col justify-between">
          <label htmlFor="quantity">How many pieces?</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            min={1}
            className="border border-gray-100 rounded p-2"
            defaultValue={1}
          />
          <input
            type="hidden"
            name="product_id"
            id="product_id"
            value={product._id}
          />
          <br />
          <button className="bg-green-400 text-white rounded p-2 px-4 mt-2 justify-self-end">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartDialog;
