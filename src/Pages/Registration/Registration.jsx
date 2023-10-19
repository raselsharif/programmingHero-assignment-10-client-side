import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  const { registerWithEmail } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, name, photo, password);
    registerWithEmail(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-[url('https://res.cloudinary.com/driveau/image/upload/v1630582255/cms/uploads/ldpmnomncrzk92481qr2.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left bg-gray-500 bg-opacity-25 text-white px-8 py-6 rounded-2xl">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-500 bg-opacity-40 text-white shadow-red-300">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered text-red-500 font-semibold"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered text-red-500 font-semibold"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL (Optional)"
                className="input input-bordered text-red-500 font-semibold"
                name="photo"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered text-red-500 font-semibold"
                required
                name="password"
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-green-500 hover:bg-green-600 text-white font-semibold border-none"
              >
                Register
              </button>
            </div>
          </form>
          <p className="ml-8 mb-6">
            Have an account?{" "}
            <Link
              className="drop-shadow-xl font-semibold text-red-400"
              to={"/login"}
            >
              Pls! Login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
