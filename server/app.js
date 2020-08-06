const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/router");
const userRoutes = require("./routes/user-routes");
const commentRoutes = require("./routes/comment-routes");

const app = express();

// app.use((req, res, next) => {
//   next();
// });

app.use(router);
// app.use("/api/user", userRoutes);
app.use("/api/user/:uid/movies/:moviesid/comments", commentRoutes);

app.listen(5001);
