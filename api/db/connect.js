const mongoose = require("mongoose");
const DB = process.env.DATABASE;

// connect to db
const connectedDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`No connection : ${err}`.red.underline);
  }
};

// export
module.exports = connectedDB;
