import React from "react";

const Login = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered text-red-500 font-semibold"
                required
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
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-500 hover:bg-green-600 text-white font-semibold border-none">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mb-6 bg-red-500 py-3 mx-8 rounded-xl font-semibold">
            <button>Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
