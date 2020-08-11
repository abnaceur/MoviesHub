const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const router = require("./routes/router");
const userRoutes = require("./routes/user-routes");
const commentRoutes = require("./routes/comment-routes");

const app = express();
const server = http.createServer(app);

app.use((req, res, next) => {
  next();
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
app.use(router);
// app.use("/api/user", userRoutes);

app.use("/api/comments", commentRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured !" });
});
server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
