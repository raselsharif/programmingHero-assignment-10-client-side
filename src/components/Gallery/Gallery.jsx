const Gallery = () => {
  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h2 className="my-2 font-semibold text-3xl border-b-2 border-red-500 pb-3 inline-block">
          Car Galley
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="shadow-lg shadow-red-300">
          <img
            className="h-full w-full"
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/11/full/1681202601-0323.jpg?im=FeatureCrop,size=(826,465)"
            alt=""
          />
        </div>
        <div className="shadow-lg shadow-red-300">
          <img
            className="h-full w-full"
            src="https://d308ljkq6e62o1.cloudfront.net/img/M7unmfVET5iU2z5HPmRoEA/file"
            alt=""
          />
        </div>
        <div className="shadow-lg shadow-red-300">
          <img
            className="h-full w-full"
            src="https://media.cnn.com/api/v1/images/stellar/prod/181127194547-01-audi-etron-gt.jpg?q=w_2500,h_1667,x_0,y_0,c_fill"
            alt=""
          />
        </div>
        <div className="shadow-lg shadow-red-300">
          <img
            className="h-full w-full"
            src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2016/12/Audi-A4-exterior.jpg"
            alt=""
          />
        </div>
        <div className="shadow-lg shadow-red-300">
          <img
            className="h-full w-full"
            src="https://cdn1.smartprix.com/rx-idGAAsDaY-w1200-h1200/dGAAsDaY.jpg"
            alt=""
          />
        </div>
        <div className="shadow-lg shadow-red-300">
          <img
            className="h-full w-full"
            src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20221213191430/Audi-A8-1160x870.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
