const CartCard = ({ cart, carts, setCarts }) => {
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = carts.filter((cart) => cart._id !== id);
        setCarts(remaining);
      });
  };
  return (
    <div className="grid grid-cols-12 gap-2 mb-4 max-w-2xl mx-auto">
      <div className="col-span-5">
        <img src={cart.image} alt="car image" className="w-full" />
      </div>
      <div className="col-span-7">
        <h3>Brand: {cart.brandName}</h3>
        <h4>Model: {cart.name}</h4>
        <p>Price: {cart.price}</p>
        <div>
          <button
            onClick={() => handleDelete(cart._id)}
            className="btn btn-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
