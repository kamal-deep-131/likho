import express from "express";
import blogRoutes from './routes/blog.routes.js'

const app = express()
const PORT = 3000 || process.env.PORT

app.use('/api/blogs/', blogRoutes)

app.listen(PORT, () => {
    console.log("Server started")
})