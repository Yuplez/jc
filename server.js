const express = require("express");

const app = express();
const cors = require("cors");

const auth = require("./routes/auth");


app.use(express.json());
app.use(cors());
app.use("/", auth)

app.listen(8080, (req, res) => {
    console.log("Server is listening on port 8080");
});
