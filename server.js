import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Setup Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   //   res.send({ message: "Hello Express!" });
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   //   res.send({ message: "Hello Express About page!" });
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// GET ALL POSTS
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// GET SINGLE POST
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(posts.filter((post) => post.id === id));
});

app.get("/api/posts/:id/find", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} was not found` });
  }

  res.status(200).json(post);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
