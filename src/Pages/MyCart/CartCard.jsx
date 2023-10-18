const CartCard = ({ cart }) => {
  return (
    <div className="grid grid-cols-12 gap-2 mb-4">
      <div className="col-span-4">
        <img src={cart.image} alt="car image" />
      </div>
      <div className="col-span-8">
        <h3>Brand: {cart.brandName}</h3>
        <h4>Model: {cart.name}</h4>
        <p>Price: {cart.price}</p>
        <div>
          <button className="btn btn-error text-white">Detele</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
