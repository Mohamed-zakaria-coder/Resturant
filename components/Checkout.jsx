import { useState } from "react";
import { getItems } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { placeOrder } from "../helpers";

const Checkout = ({ closeCart, openNotification }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formData = Object.fromEntries(new FormData(e.target));
    const res = await placeOrder(formData);
    if ((res.message = "Successfully Placed Order")) {
      openNotification();
      dispatch(getItems([]));
      closeCart();
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Checkout</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            className="p-2 border rounded w-1/2 focus:outline mt-3 mr-3"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            className="p-2 border rounded w-1/2 focus:outline mt-3"
            required
          />
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="p-2 border rounded w-1/2 focus:outline mt-3 mr-3"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="p-2 border rounded w-1/2 focus:outline mt-3"
            required
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="p-2 border rounded w-full focus:outline mt-3 mr-3"
          required
        />
        <textarea
          type="text"
          name="address"
          placeholder="Address"
          className="p-2 border rounded w-full focus:outline mt-3 mb-1"
          required
        ></textarea>

        <button
          className="text-lg w-full bg-black text-white pt-4 pb-4 text-center "
          data-variant="flat"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
