import "./LatestArticle.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { lettestArticleData } from "../../Data/Data";
import { Link } from "react-router-dom";

import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export default function LatestArticle() {
  return (
    <section className="latestArticle">
      <div className="container latest-article-container">
        <TitleTypeOne
          TitleTop={"Read our articles"}
          Title={"Latest Articles"}
        />
        <div className="latest-article-content">
          {lettestArticleData.map(
            (
              {
                title,
                image,
                titLink,
                date,
                inspiration,
                fbLink,
                instLink,
                twitaLink,
              },
              index
            ) => {
              return (
                <article className="latest-article" key={index}>
                  <div className="article-image">
                    <img src={image} alt="" />
                  </div>

                  <div className="article-info">
                    <h5>{date}</h5>
                    <Link to={titLink}>
                      <h3>{title}</h3>
                    </Link>
                  </div>

                  <div className="latest-article-socials">
                    <p>{inspiration}</p>
                    <div className="article-social">
                      <a href={fbLink}>
                        <ImFacebook />
                      </a>
                      <a href={instLink}>
                        <FiInstagram />
                      </a>
                      <a href={twitaLink}>
                        <RiTwitterXLine />
                      </a>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
        <Link to={"*"} className="btn btn-border">
          read all articles
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
