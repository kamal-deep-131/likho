import asyncHandler from '../utils/asyncHandler.utils.js';
import Blog from '../models/blog.model.js'

export const createBlog = asyncHandler(async (req, res) => {
    const { title, content } = req.body
    if (!title && !content) {
        return res.status(401).json({ message: "Please Enter data" })
    }
    const blog = new Blog({ title, content })
    const savedBlog = await blog.save()
    return res.status(201).send(savedBlog)
});

export const getAllBlogs = asyncHandler((req, res) => {
    res.send("All posts")
});

export const getBlogsById = asyncHandler(async (req, res) => {
    res.send("getPostById")
});

export const updateBlog = asyncHandler((req, res) => {
    res.send("updatePost")
});

export const deleteBlog = asyncHandler(async (req, res) => {
    res.send("deletePost")
});
