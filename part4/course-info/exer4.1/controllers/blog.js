const blogsRouter = require('express').Router();
const Blog        = require('../models/blog');

blogsRouter.get('/api/blogs', (request, response) => {
	Blog
		.find({})
		.then(blogs => {
			response.json(blogs)
		})
})

blogsRouter.post('/api/blogs', (request, response) => {
	const blog = new Blog(request.body)
	blog
		.save()
		.then(result => {
			response.status(201).json(result)
		})
})
