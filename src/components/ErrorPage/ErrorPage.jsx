import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-bold">Page not Found</div>
      <p className="text-3xl font-semibold mb-14">404</p>
      <Link to="/" className="btn bg-[#23BE0A] text-white">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
