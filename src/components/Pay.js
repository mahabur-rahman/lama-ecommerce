import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51JwpL5BWwMKzdCZXHGWcrq7mPnn9bChbPihabAISBE63zU3EfjJxL0xfxHqUfkLQay70v4FoZkKprjH2sjcvzFrq00lNPvm2ZN";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);

  // return token default by stripe
  const onToken = (token) => {
    // console.log(token);
    setStripeToken(token);
  };

  // ##############  api call to backend ##############

  useEffect(() => {
    try {
      const makeRequest = async () => {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );

        console.log(res.data);
      };

      stripeToken && makeRequest();
    } catch (err) {
      console.log(err);
    }
  }, [stripeToken]);

  return (
    <div className="m-5 p-5">
      <h1>Payment</h1>

      <StripeCheckout
        name="lama shopt"
        image="https://images.unsplash.com/photo-1593672740624-38a34ff53d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        billingAddress
        shippingAddress
        description="Your total amount is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button className="btn btn-dark">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
