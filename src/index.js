const express = require("express");
const app = express();
const cors = require("cors");
const pgConnect = require("./pgConnection");
const EventEmitter=require("events")
app.use(cors());
app.use(express.json());

const customEmitter= new EventEmitter()



customEmitter.on("response",()=>{
  console.log("my response emmitter");
})

customEmitter.on("callOut",(name,age)=>{
console.log("My name is "+name+" and I am "+age+" years old");
})

customEmitter.emit("response")
customEmitter.emit("callOut","gideon",20)
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





app.listen("5000", () => {
  console.log("server connected and listening on port 5000");
});
