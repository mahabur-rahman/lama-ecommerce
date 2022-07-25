import React from "react";
// style
import "./featuredInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="box">
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
