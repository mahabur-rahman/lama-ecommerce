import React, { useState, useEffect, useMemo } from "react";
// style
import "./home.scss";
// components
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Charts from "../../components/Chart/Charts";
import { userData } from "../../Data/data";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import { userRequest } from "../../requestMethods";

const Home = () => {
  const [userStats, setUserStars] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const getUserStats = async () => {
    try {
      const res = await userRequest(`users/stats`);
      // console.log(res.data);
      res.data.map((item) =>
        setUserStars((prev) => [
          ...prev,
          {
            name: MONTHS[item._id - 1],
            "Active User": item.total,
          },
        ])
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        // data={userData}
        data={userStats}
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
