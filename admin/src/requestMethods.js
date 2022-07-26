import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDdkMmQ5NGQwMWRhZDE4ZDdiMDc3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODU4ODg0NiwiZXhwIjoxNjYxMTgwODQ2fQ.tqmGfayz_TrGbicTxqO3jDpYQ8O06sdDFBQW0utk1ps";

// console.log(localStorage.getItem("persist:root"));

// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).currentUser
// ).accessToken;

// console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
