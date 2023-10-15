import React from "react";
import { useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { LuMoreVertical } from "react-icons/lu";
import "../styles/Dashboard.css";
import Card from "../components/Card1";
import NewHeader from "./head";
import UserPic from "../images/User_pic.png";

const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => (
          <div key={index} className="dashboard">
            <div className="cardHeading">
              <div className="View">
                {!user ? (
                  <NewHeader grp={element[index].title} />
                ) : (
                  <>
                    <div className="image">
                      <img src={UserPic} alt="no_image_found" />
                    </div>
                  </>
                )}
                <span>
                  {element[index]?.title} {element[index]?.value?.length}
                </span>
              </div>
              <div className="sideView2">
                <BsPlusLg style={{ color: "black" }} />
                <span style={{ color: "black", letterSpacing: "2px" }}>
                  <LuMoreVertical />
                </span>
              </div>
            </div>
            <div className="selectList">
              {element[index]?.value?.map((element, ind) => (
                <Card key={ind} id={element.id} title={element.title} tags={element.tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Dashboard;
