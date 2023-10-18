import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useState } from "react";

const MyCart = () => {
  const loadedCarts = useLoaderData();
  const [carts, setCarts] = useState(loadedCarts);
  return (
    <div>
      <div>My Cart page</div>
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
