import React from "react";
// style
import "./home.scss";
// components
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Charts from "../../components/Chart/Charts";
import { userData } from "../../Data/data";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
};

export default Home;
