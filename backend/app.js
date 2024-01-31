const express = require("express");
// const fileUpload = require("express-fileupload");
// const db = require("./db");
const cors = require('cors');

const chartRoutes= require('./routes/growth.routes')

const app = express();
app.use(cors())


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', chartRoutes);




//database connection method
// db.createDbConnection();

//posts related routes
// const postRoutes = require("./routes/posts.routes");
// app.use("", postRoutes);

//starting server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Sharif's server is running on http://localhost:${PORT}`);
});
