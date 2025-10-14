const express = require("express");
const app = express();
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const bodyParser = require("body-parser");
const db = require("./db");

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

// Konfigurasi MySQL Session Store
const sessionStore = new MySQLStore(
  {
    clearExpired: true,
    checkExpirationInterval: 900000, // 15 menit
    expiration: 86400000, // 24 jam
    createDatabaseTable: true, // Otomatis buat tabel sessions
    schema: {
      tableName: "sessions",
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data",
      },
    },
  },
  db
);

app.use(
  session({
    key: "ecosphere_session_cookie",
    secret: "ecosphere1_secret_key",
    store: sessionStore, // Gunakan MySQL store
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set true jika pakai HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 jam
    },
  })
);

const authRoutes = require("./routes/auth");
const actionsRoutes = require("./routes/actions");
const userActionsRoutes = require("./routes/userActions");
const badgesRoutes = require("./routes/badges");
const feedbackRoutes = require("./routes/feedback");
const levelsRoutes = require("./routes/levels");

app.use("/api/auth", authRoutes);
app.use("/api/actions", actionsRoutes);
app.use("/api/user-actions", userActionsRoutes);
app.use("/api/badges", badgesRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/levels", levelsRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Session store: MySQL");
});
