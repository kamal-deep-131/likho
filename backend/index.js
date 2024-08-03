import express from "express";
import blogRoutes from './routes/blog.routes.js'
import dotenv from 'dotenv';

dotenv.config()
console.log(process.env.TEST)
const app = express()
const PORT = 3000 || process.env.PORT

app.use('/api/blogs/', blogRoutes)

app.listen(PORT, () => {
    console.log("Server started")
})