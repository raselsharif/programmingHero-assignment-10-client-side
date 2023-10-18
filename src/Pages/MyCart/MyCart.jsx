import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";

const MyCart = () => {
  const carts = useLoaderData();
  return (
    <div>
      <div>My Cart page</div>
      <div>
        {carts.map((cart) => (
          <CartCard key={cart._id} cart={cart}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
