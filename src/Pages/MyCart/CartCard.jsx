import { RiDeleteBin5Fill, RiEyeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CartCard = ({ cart, carts, setCarts }) => {
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://electronics-server-ten.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = carts.filter((cart) => cart._id !== id);
            setCarts(remaining);
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-12 gap-5 mb-4 max-w-2xl mx-auto border border-red-200">
      <div className="col-span-5">
        <img src={cart.image} alt="car image" className="w-full h-full" />
      </div>
      <div className="col-span-7 flex items-center justify-between py-5 gap-3">
        <div className="space-y-1">
          <h3 className="font-medium text-lg tracking-widest">
            Brand: {cart.brandName}
          </h3>
          <h4 className="font-medium">Model: {cart.name}</h4>
          <p className="text-red-500 font-semibold">Price: {cart.price} Lakh</p>
        </div>
        <div className="flex flex-col gap-5 mr-4">
          <button
            onClick={() => handleDelete(cart._id)}
            className="btn btn-error text-white hover:opacity-80"
          >
            <RiDeleteBin5Fill></RiDeleteBin5Fill>
          </button>
          <button
            className="btn bg-green-500 hover:bg-green-600 text-white hover:opacity-80"
            title="Update soon"
            disabled
          >
            <RiEyeLine></RiEyeLine>
          </button>
          {/* <Link to={`/cardetails/${cart._id}`}>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
