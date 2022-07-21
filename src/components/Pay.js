import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

// console.log(process.env.REACT_APP_STRIPE);

const KEY =
  "pk_test_51JwpL5BWwMKzdCZXHGWcrq7mPnn9bChbPihabAISBE63zU3EfjJxL0xfxHqUfkLQay70v4FoZkKprjH2sjcvzFrq00lNPvm2ZN";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  // TOKEN FUNC
  const onToken = (token) => {
    // console.log("stripe token : ", token);
    setStripeToken(token);
  };

  // ########### api call to backend ###########
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [stripeToken]);

  return (
    <>
      <StripeCheckout
        name="lama shop"
        image="https://images.unsplash.com/photo-1593672740624-38a34ff53d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        billingAddress
        shippingAddress
        description="Your total amount is $20"
        amount={2000} // $20 (stripe works with cents)
        token={onToken} // is gonna be a func
        stripeKey={KEY}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button>Pay Now</button>
        </div>
      </StripeCheckout>
    </>
  );
};

export default Pay;
