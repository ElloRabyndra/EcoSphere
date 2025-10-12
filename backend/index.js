const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.engine("express", express);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.use(
  session({
    secret: "ecosphere1_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

const authRoutes = require("./routes/auth");
const actionsRoutes = require("./routes/actions");
const userActionsRoutes = require("./routes/userActions");
const badgesRoutes = require("./routes/badges");
const feedbackRoutes = require("./routes/feedback");

app.use("/api/auth", authRoutes);
app.use("/api/actions", actionsRoutes);
app.use("/api/user-actions", userActionsRoutes);
app.use("/api/badges", badgesRoutes);
app.use("/api/feedback", feedbackRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
