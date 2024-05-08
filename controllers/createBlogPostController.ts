import {Request, Response} from 'express'
import {createBlogPost} from '../services'


export const createBlogPostController = async (req: Request, res: Response) => {
    const newPost = req.body
    try {const allBlogPosts = await createBlogPost(newPost)
    res.json(allBlogPosts)}
    catch(e) {
        res.status(400).json("Validation Failed")
    }
} 