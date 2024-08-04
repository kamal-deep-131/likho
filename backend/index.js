import express from "express";
import blogRoutes from './routes/blog.routes.js'
import dotenv from 'dotenv';
import mongoose from "mongoose";
import asyncHandler from "./utils/asyncHandler.utils.js";

dotenv.config()

    ; (asyncHandler(async () => {
        await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
        console.log("Database connected")
        app.listen(PORT, () => {
            console.log("Server started")
        })
    }))()



const app = express()

app.use(express.json({ limit: '20kb' }))
const PORT = 3000 || process.env.PORT

app.use('/api/blogs/', blogRoutes)

