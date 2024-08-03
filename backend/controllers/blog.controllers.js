import asyncHandler from '../utils/asyncHandler.utils.js';

export const createBlog = asyncHandler((req, res) => {
    res.send("createPost")
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
