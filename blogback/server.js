const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


//setting up express

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
console.log("starting server")
app.listen(PORT, () => { console.log(`server started on port:${PORT}`) });

//setup Routes
app.use("/posts",require("./routes/postRoutes"))


//setup mongoose
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true}, (err) => {
    if (err) return console.log(err);
    console.log("connection to mongo established")
})
