import AboutUs from "../../AboutUs/AboutUs";
import Gallery from "../../Gallery/Gallery";
import Banner from "../Banner/Banner";
import Brand from "../Brands/Brand";

const MainHome = () => {
  return (
    <div>
      <Banner></Banner>
      <Brand></Brand>
      <div className="px-2 md:px-0">
        <AboutUs></AboutUs>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default MainHome;
