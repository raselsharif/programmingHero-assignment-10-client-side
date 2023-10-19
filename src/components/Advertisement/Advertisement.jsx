import Slider from "react-slick";
const Advertisement = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="max-w-5xl mx-auto mb-12">
      <Slider {...settings}>
        <div className="h-[200px]">
          <img
            className="w-full h-full"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-rental-promotion-email-header-banner-design-template-c0166187974d68ef6faf03a8af8663ec_screen.jpg?ts=1630012570"
            alt=""
          />
        </div>
        <div className="h-[200px]">
          <img
            className="w-full h-full"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-sale-promotion-email-header-banner-design-template-90e3f680bf514bbb2451671ad4014576_screen.jpg?ts=1630013398"
            alt=""
          />
        </div>
        <div className="h-[200px]">
          <img
            className="w-full h-full"
            src="https://www.patkirk.com/cms/images/leafbanner.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Advertisement;
