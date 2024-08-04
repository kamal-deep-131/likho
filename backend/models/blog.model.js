import { Schema, model } from 'mongoose'

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "Please Enter title"
    },
    content: {
        type: String,
        required: true,
        default: "Please Enter content"
    },
}, { timestamps: true })

export default model('Blog', blogSchema)