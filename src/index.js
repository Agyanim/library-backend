const express = require("express");
const cors = require("cors");
const pgConnect = require("./pgConnection");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async(req, res) => {
try {
    const result= (await pgConnect.query("SELECT * FROM library_schema.primarymember_tbl where primemid=$1 ORDER BY primemid ASC",[8])).rows;
    res.send(result);
    console.log(result);

} catch (error) {
    console.log(error.message);
}   
});

pgConnect.connect((err) => {
  !err
    ? console.log("connection successful")
    : console.log("connection failed");
});


app.listen("5000", () => {
  console.log("server connected and listening on port 5000");
});
