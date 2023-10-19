import { AiFillCheckCircle } from "react-icons/ai";
const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
      <div className="bg-[url('https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/BCouqk0vvyV5FE589DGlbBnpGSU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/TKYWNY3VXJA3LNE36HZZBTE4EI.jpg')] bg-no-repeat bg-cover bg-center h-96 lg:h-full"></div>
      <div>
        <h2 className="my-2 font-semibold text-3xl border-b-2 border-red-500 pb-3 inline-block">
          About Us
        </h2>
        <p className="my-4 font-semibold text-xl">
          How the adventure ended will be seen anon. Aouda was anxious, though
          she said nothing.
        </p>
        <p className="text-lg mb-4">
          As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious.
          The captain had said “between eleven and twelve knots,” and the
          Henrietta confirmed his prediction. How the adventure ended will be
          seen anon. Aouda was anxious, though she said nothing.
        </p>
        <ul className="space-y-3 mb-4 font-semibold">
          <li className="flex items-center gap-2">
            {" "}
            <AiFillCheckCircle className="text-green-500 text-2xl"></AiFillCheckCircle>{" "}
            Quality Cars at Guaranteed Prices
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <AiFillCheckCircle className="text-green-500 text-2xl"></AiFillCheckCircle>{" "}
            Routine Service Available
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <AiFillCheckCircle className="text-green-500 text-2xl"></AiFillCheckCircle>{" "}
            Turn Your Car Into Cash
          </li>
        </ul>
        <button className="bg-green-500 text-white py-2 px-3 rounded-md font-semibold hover:bg-green-600">
          About us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
