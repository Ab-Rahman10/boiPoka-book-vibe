import BannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 w-11/12 mx-auto rounded-xl py-12 mt-12 mb-24">
      <div className="hero-content flex-col gap-60 lg:flex-row-reverse">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] mt-12 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
