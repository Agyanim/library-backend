const express = require("express");
const app = express();
const cors = require("cors");
const pgConnect = require("./pgConnection");
const EventEmitter = require("events");
const { readSync, readFileSync } = require("fs");
const path = require("path");
const { log } = require("console");
app.use(cors());
app.use(express.json());

const customEmitter = new EventEmitter();
// const home=readFileSync("./home.html")

// adding static asset

app.use(express.static("src/public"))


// Api

app.get("/api/names",((req,res)=>{
  res.status(200).json({status:"successful"})
}))

// using params
app.get("/api/names/:id",(req,res)=>{
  console.log(req.params);
const {id}=(req.params);
console.log(id);
  res.status(200).json({status:"successful"})
})

// using queries

app.get("/api/products/search",(req,res)=>{
  console.log(req.query);
  res.json({status:"successful"})
})

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./home.html"));
// });


app.get("/about", (req, res) => {
  res.send("About page");
});
app.all("*", (req, res) => {
  res.status(404).send("<h1> Page not found</h1>");
});
// customEmitter.on("response", () => {
//   console.log("my response emmitter");
// });

// customEmitter.on("callOut", (name, age) => {
//   console.log("My name is " + name + " and I am " + age + " years old");
// });

// customEmitter.emit("response");
// customEmitter.emit("callOut", "gideon", 20);

// app.get("/style.css", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./style.css"));
// });

// console.log("first task");
// setTimeout(()=>{
//   console.log("second task");

// },
// 0)
// console.log("third task");
// console.log("third task");
// console.log("third task");

// setInterval(()=>{
// console.log("second");
// },2000)

// console.log("I will run first");

// app.get("/", async(req, res) => {
// try {
//     const result= (await pgConnect.query("SELECT * FROM library_schema.primarymember_tbl where primemid=$1 ORDER BY primemid ASC",[8])).rows;
//     res.send(result);
//     console.log(result);

// } catch (error) {
//     console.log(error.message);
// }
// });

// pgConnect.connect((err) => {
//   !err
//     ? console.log("connection successful")
//     : console.log("connection failed");
// });

app.listen("3000", () => {
  console.log("server connected and listening on port 3000");
});
