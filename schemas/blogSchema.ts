import {model, Schema} from 'mongoose'

export interface Blog {
    Title: string,
    Body: string,
    Author: string,
    Date: Date
}

const BlogSchema = new Schema({
    Title: {
        type: String,
        required: true,
    },

    Body: {
        type: String,
        required: true,
    },
    Author: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
})

export const BlogPostModel =  model("blogposts", BlogSchema)