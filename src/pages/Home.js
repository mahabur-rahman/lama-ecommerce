import React from "react";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </>
  );
};

export default Home;
