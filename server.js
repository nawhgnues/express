import express from "express";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Logger Middleware
app.use(logger);

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
