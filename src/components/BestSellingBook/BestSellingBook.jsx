import "./BestSellingBook.css";
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";
import TreeShape from "../../assets/treeShape.png";
import { sellingBooksData } from "../../Data/Data";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function BestSellingBook() {
  return (
    <section className="BestSellingBook">
      <div className="treeShape">
        <img src={TreeShape} alt="TreeShape" />
      </div>

      {sellingBooksData.map(
        ({ img, infoTitleTop, infoTitle, desc, price, shopbtnLink }, index) => {
          return (
            <div className="container bestselling-container" key={index}>
              {/* ............ left ............ */}
              <div className="selling-book-left">
                <img src={img} alt="" />
              </div>
              {/* ............ Right ............ */}
              <div className="selling-book-right">
                <TitleTypeTwo Title={"Best Selling Books"} className="sellingBookTitle"/>
                <div>
                  <small>{infoTitleTop}</small>
                </div>
                <h3>{infoTitle}</h3>
                <p>{desc}</p>
                <h5>
                  <span>{price}</span>
                </h5>
                <Link className="btn" to={shopbtnLink}>
                  <small>Shop it nos</small>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}
