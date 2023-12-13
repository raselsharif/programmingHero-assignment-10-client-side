import { FaArrowAltCircleUp } from "react-icons/fa";
const BackToTop = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={toTop}
      className="fixed bottom-5 right-10 bg-black p-3 rounded-lg cursor-pointer hover:opacity-80"
    >
      <FaArrowAltCircleUp className="text-white text-lg" />
    </div>
  );
};

export default BackToTop;
