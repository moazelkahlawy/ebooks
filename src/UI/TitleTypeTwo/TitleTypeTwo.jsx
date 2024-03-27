/* eslint-disable react/prop-types */
import "./TitleTypeTwo.css";
import Victor from "../../assets/victor.png";

export default function TitleTypeTwo({ ClassName, Title }) {
  return (
    <div className={`titleTypeTwo ${ClassName}`}>
      <h2>{Title}</h2>
      <img src={Victor} alt="Victor" className="victor" />
    </div>
  );
}
