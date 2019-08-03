const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./config/db");
const stripe = require("stripe");
const cors = require("cors");
const path = require("path");

// // connect to db
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// api routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/orders", require("./routes/api/orders"));
// Serve static in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
