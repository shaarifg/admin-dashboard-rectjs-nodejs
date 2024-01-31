const express = require("express");
const cors = require('cors');
const chartRoutes= require('./routes/growth.routes')
const app = express();
app.use(cors())


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', chartRoutes);



//starting server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Sharif's server is running on http://localhost:${PORT}`);
});
