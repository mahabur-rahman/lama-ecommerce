import React from "react";
// style
import "./home.scss";
// components
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Charts from "../../components/Chart/Charts";
import { userData } from "../../Data/data";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

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

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
