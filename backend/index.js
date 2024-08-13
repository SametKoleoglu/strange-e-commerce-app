const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const productsRoute = require("./routes/ProductsRoute");


const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());


// ROUTES
// app.use("api/v1/auth", authRoute);
app.use("/api/v1/products/", productsRoute);

mongoose
  .connect(process.env.URL)
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(
        `DB connected and Server listening on port ${process.env.PORT}`
      );
    })
  )
  .catch((error) => console.log(error.message));





  
