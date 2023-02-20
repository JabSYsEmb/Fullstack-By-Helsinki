const blogsRouter = require("express").Router();
const payloadValidator = require("../utils/payloadValidator");
const Blog = require("../models/blog");

const responseData = [
  {
    title: "Be like Ahmed", 
    img: "/logo192.png",     
    content: "sdfhsldkfjsldkjflksjdf lksj test"
  },
];

blogsRouter.get("/", (request, response) => {
  response.json(responseData).end();
  // Blog.find({}).then(blogs => { response.json(blogs); });
});

// blogsRouter.use(payloadValidator);

blogsRouter.post("/", payloadValidator, (request, response) => {
  const blog = new Blog({
    title: request.body.title,
    img: request.body.img,
    content: request.body.content,
  });
  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogsRouter;
