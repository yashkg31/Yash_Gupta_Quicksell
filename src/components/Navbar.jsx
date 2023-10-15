import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { BsSliders, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../actions/render_action";

const getGroup = () => {
  return localStorage.getItem("group") || "status";
};

const getOrder = () => {
  return localStorage.getItem("order") || "priority";
};

const Navbar = () => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const dispatch = useDispatch();
  const { tickets, users } = useSelector((state) => state.dataSlice);
  const [groups, setGroups] = useState(getGroup());
  const [order, setOrder] = useState(getOrder());

  const handleSelectChange = (e) => {
    if (e.target.name === "group") {
      setGroups(e.target.value);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrder(e.target.value);
      localStorage.setItem("order", e.target.value);
    }
    setSliderVisible(false);
  };

  useEffect(() => {
    if (groups === "user") {
      dispatch(
        dataSelect(groups, {
          tickets,
          users,
        }, order)
      );
    } else {
      dispatch(dataSelect(groups, tickets, order));
    }
  }, [tickets, dispatch, groups, users, order]);

  return (
    <div className="navbar">
      <div className="navbarButton">
        <button className="groupButton" onClick={() => setSliderVisible(!sliderVisible)}>
          <BsSliders /> Display <BsChevronDown />
        </button>

        {sliderVisible && (
          <div className="dropDown">
            <div className="group">
              <span>Grouping</span>
              <select
                value={groups}
                onChange={handleSelectChange}
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="group">
              <span>Ordering</span>
              <select
                value={order}
                onChange={handleSelectChange}
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
