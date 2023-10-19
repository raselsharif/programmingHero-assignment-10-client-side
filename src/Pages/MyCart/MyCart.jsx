import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useState } from "react";

const MyCart = () => {
  const loadedCarts = useLoaderData();
  const [carts, setCarts] = useState(loadedCarts);
  return (
    <div className="my-12">
      <h2 className="text-center bg-green-500 py-3 font-semibold text-2xl text-white mb-5">
        All Carts
      </h2>
      <div>
        {carts.map((cart) => (
          <CartCard
            key={cart._id}
            cart={cart}
            carts={carts}
            setCarts={setCarts}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
