import { Link } from "react-router-dom";

const CreateBrand = () => {
  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brandInfo = {
      name,
      photo,
    };
    // console.log(brandInfo);
    fetch("https://electronics-server-ten.vercel.app/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleCreate} className="my-10">
        <input
          className="border border-black mb-3 py-1 px-2"
          type="text"
          name="name"
          placeholder="Type Brand Name"
        />{" "}
        <br />
        <input
          className="border border-black mb-3 py-1 px-2"
          type="text"
          name="photo"
          placeholder="Past Brand Image URL"
        />{" "}
        <br />
        <input
          className="bg-green-500 py-2 px-3 font-semibold rounded-md text-white cursor-pointer"
          type="submit"
          value={"Submit"}
        />{" "}
        <br />
      </form>
      <Link
        to={"/"}
        className="bg-green-500 py-2 px-3 font-semibold text-white cursor-pointer"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default CreateBrand;
