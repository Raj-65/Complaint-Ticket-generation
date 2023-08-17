const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql2');      //new


app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(cors());

const db = require("./models");

///////////////new///////////////////////
const connection = mysql.createConnection({        // gets connection with database
  host: 'localhost', // '127.0.0.1'
  user: 'root',
  password: 'manager',
  database: 'tut',
});
// Routers
const complainRouter = require("./Routes/Complains");
app.use("/complains", complainRouter);
const commentsRouter = require("./Routes/Comments");
app.use("/comments", commentsRouter);
const completedRouter = require("./Routes/Completed");
app.use("/completed", completedRouter);
// const ownedRouter = require("./Routes/Owned");
// app.use("/owned", ownedRouter);


///////////Req//////////
const requestRouter = require("./Routes/Requests");
app.use("/requests", requestRouter);
const reqOwnRouter = require("./Routes/ReqOwn");
app.use("/reqown", reqOwnRouter);
const reqSolvRouter = require("./Routes/ReqSolv");
app.use("/reqsolv", reqSolvRouter);

////////////////new////////////////////
app.get("/owned", (req, res) => {
  const q = 'SELECT *,complains.createdAt ' + 
  'FROM `complains` ' +
  'JOIN `comments` ON `complains`.`id` = `comments`.`ComplainId`';
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/pending", (req, res) => {
  const q = "SELECT *,complains.id as C_id,complains.createdAt FROM complains LEFT JOIN comments ON complains.`id` = comments.`ComplainId` WHERE comments.ComplainId is null";
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
/////////////For requests
app.get("/ownedreq", (req, res) => {
  const q = 'SELECT *,requests.createdAt ' + 
  'FROM `requests` ' +
  'JOIN `reqowns` ON `requests`.`id` = `reqowns`.`ReqId`';
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/pendingreq", (req, res) => {
  const q = "SELECT *,requests.id as C_id,requests.createdAt FROM requests LEFT JOIN reqowns ON requests.`id` = reqowns.`ReqId` WHERE reqowns.ReqId is null";
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/repA", (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  // console.log(startDate);
  // console.log(endDate);
  const q = `SELECT * FROM complains where createdAt between '${startDate}' AND '${endDate}'`;
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    else {
    //   console.log(startDate);
    // console.log(endDate);
    // console.log(data[0]['COUNT(*)']);
    return res.json(data);
    }
  });
});

app.get("/repS", (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  console.log(startDate);
  console.log(endDate);
  const q = `SELECT * FROM completeds where registered between '${startDate}' AND '${endDate}'`;
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    else {return res.json(data);
    }
  });
});
app.get("/repW", (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;

  console.log(startDate);
  const q = `SELECT * FROM completeds where registered between '${startDate}' AND '${endDate}' AND DATEDIFF(createdAt ,registered) < 2;`;
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    else {return res.json(data);
    }
  });
});
// SELECT * FROM your_table WHERE your_date_column BETWEEN '2023-07-19' AND DATE_ADD('2023-07-19', INTERVAL 2 DAY);

db.sequelize.sync().then(() => {
app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});