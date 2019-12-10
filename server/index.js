const express = require("express");
const app = express();
const PORT = 7575;

// Controller
const pc = require("./Controllers/postsController");
const { getPosts, addPost, editPost, deletePost } = pc;

// Top-Level Middleware
app.use(express.json());

// Endpoints3
app.get("/api/posts", getPosts);
app.post("/api/posts", addPost);
app.put("/api/posts/:id", editPost);
app.delete("/api/posts/:id", deletePost);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
