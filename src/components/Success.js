import React from "react";
import { Link, useLocation } from "react-router-dom";

const SuccessPayment = () => {
  const location = useLocation();
  // console.log(location.state.products.products);

  return (
    <>
      <h1> payment Success</h1>
      <Link to="/">Back to home</Link>
    </>
  );
};

export default SuccessPayment;
