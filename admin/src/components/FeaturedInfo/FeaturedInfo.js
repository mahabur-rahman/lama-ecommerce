import React, { useEffect } from "react";
// style
import "./featuredInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <div className="box">
      <div className="box_card">
        <h4>Revenue</h4>
        <span className="mr-3 title">{income[1]?.total}</span>
        <span>
          %{Math.floor(perc)}
          {perc < 0 ? (
            <ArrowDownward className="featuredIcon negative" />
          ) : (
            <ArrowUpward className="featuredIcon" />
          )}
        </span>
        <pre>Compare to last month</pre>
      </div>

      <div className="box_card">
        <h4>Revenue</h4>
        <span className="mr-3 title">$2, 234</span>
        <span>
          -11.4 <ArrowDownward className="red" />
        </span>
        <pre>Compare to last month</pre>
      </div>

      <div className="box_card">
        <h4>Revenue</h4>
        <span className="mr-3 title">$2, 234</span>
        <span>
          -11.4 <ArrowUpward className="green" />
        </span>
        <pre>Compare to last month</pre>
      </div>
    </div>
  );
};

export default FeaturedInfo;
