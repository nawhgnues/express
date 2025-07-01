import express from "express";
import posts from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
