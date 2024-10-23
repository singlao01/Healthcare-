// // FRAMEWORKS
const express = require("express");
const connectDb = require("./Config/DBconnection");
const ErrorHandler = require("./Middleware/ErrorHandler");
const cors = require("cors");3
const dotenv = require("dotenv");
dotenv.config();

connectDb(); // Connect to the database

const app = express();
const port = process.env.PORT || 5500; // Changed to 3000 or another port

app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS

// Routes
app.get('/', (req, res) => {
    res.send("Working");
});

app.get("/Home",(req,res)=>{
    res.render("Home",{})
})

// Custom error handler middleware
app.use(ErrorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
