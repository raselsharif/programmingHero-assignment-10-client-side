import { data } from "autoprefixer";

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
    console.log(brandInfo);
    fetch("http://localhost:5000/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          className="bg-green-500 py-2 px-3 font-semibold rounded-md text-white"
          type="submit"
          value={"Submit"}
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default CreateBrand;
