require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const cors = require('cors');
const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object
app.use(cors())

app.get('/test',function(res,req){
  res.send('Hello form here')
})

app.use("/users", require("./routes/userRoutes"));
app.use("/projects", require("./routes/projectRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));


app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on pc port
const PORT = 5001 ;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
