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

export const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const posts = await Blog.find();
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({ message: 'Failed to fetch posts', error: err.message });
    }
});

export const getBlogsById = asyncHandler(async (req, res) => {
    const blogId = req.params.id
    const blog = await Blog.find({ _id: blogId })
    if (blog) {
        return res.status(201).json(blog)
    }
    else {
        return res.status(500).json({ message: "Blog not found" })
    }
});

export const updateBlog = asyncHandler((req, res) => {
    res.send("updatePost")
});

export const deleteBlog = asyncHandler(async (req, res) => {
    res.send("deletePost")
});
