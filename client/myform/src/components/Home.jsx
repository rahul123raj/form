import React from "react";
import home from "../assets/images/home.jpg";
import "../assets/style/navbar.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <img src={home} alt="" />
      </div>
    </>
  );
};

export default Home;
