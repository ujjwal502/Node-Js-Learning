const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found</h1>");
  res.sendFile(path.join(__dirname, "./", "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000);
