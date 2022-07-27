import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDdkMmQ5NGQwMWRhZDE4ZDdiMDc3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODMxMTcwNSwiZXhwIjoxNjYwOTAzNzA1fQ.vQ2dVCAtJxZ0tx-AedPYR7TNMnT_cCEDxkGx-u0ujmU";

// ###### user access from localStorage ######

// console.log(localStorage.getItem("persist:root"));
// console.log(JSON.parse(localStorage.getItem("persist:root")));
// console.log(JSON.parse(localStorage.getItem("persist:root")).currentUser);
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser)
//     .accessToken
// );

// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).currentUser
// ).accessToken;

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

// console.log(TOKEN);

// console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
