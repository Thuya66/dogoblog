import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1>Sorry</h1>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default PageNotFound;
