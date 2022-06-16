import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        <div className="exploreCategoryHeading">Categories</div>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={rentCategoryImage} className="exploreCategoryImg" />
            <div className="exploreCategoryName">Places for rent</div>
          </Link>
          <Link to="/category/sale">
            <img src={sellCategoryImage} className="exploreCategoryImg" />
            <div className="exploreCategoryName">Places for sale</div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
