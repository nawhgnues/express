import express from "express";

const app = express();

// Config ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    message: "Heelo from EJS",
  });
});

app.listen(8000, () => console.log("Server started!"));
