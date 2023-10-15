import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import "../styles/Card.css";
import { useSelector } from "react-redux";
import UserPic from "../images/User_pic.png"; 

const Card = ({ id, title, tags, status }) => {
  // eslint-disable-next-line
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    <div className="container card-container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "red" }}>
          {id}
        </span>

        {!user && (
          <div className="image">
            <img src={UserPic} alt="" /> {/* Used the imported image */}
            <div className="status"></div>
          </div>
        )}
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags?.map((element, index) => (
          <div key={index} className="tag">
            <span><FaDotCircle/></span> {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
