import { Router } from "express";
import { createBlog, getAllBlogs, getBlogsById, updateBlog, deleteBlog } from '../controllers/blog.controllers.js';

const router = Router()


router.post('/', createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogsById);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router