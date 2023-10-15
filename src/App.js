import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/render_action.js";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return tickets ? (
  
      <div className="body">
      <Navbar />
      <Dashboard />
      </div>
 
    
  ) : (
    console.error("Something wrong")
  );
};

export default App;
