let posts = ["test"];
let id = 0;

const getPosts = (req, res) => {
  res.status(200).json(posts);
};

const addPost = (req, res) => {
  const { title, content } = req.body;
  posts.push({ id, title, content });
  id++;
  res.status(200).json(posts);
};

const editPost = (req, res) => {
  const { title, content } = req.body;
  const updatedId = req.params.id;

  const postIndex = posts.findIndex(post => post.id == updatedId);
  let post = posts[postIndex];

  post = {
    id: post.id,
    title: title || post.title,
    content: content || post.content
  };

  posts[postIndex] = post;

  res.status(200).json(posts);
};

const deletePost = (req, res) => {
  const id = +req.params.id;
  const postIndex = posts.findIndex(post => post.id == id);

  posts.splice(postIndex, 1);
  res.status(200).json(posts);
};

module.exports = {
  getPosts,
  addPost,
  editPost,
  deletePost
};
