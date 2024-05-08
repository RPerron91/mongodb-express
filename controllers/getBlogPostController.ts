import {Request, Response} from 'express'
import {getBlogPosts} from '../services'

export const getBlogPostController = async (req: Request, res: Response) => {
    const allBlogPosts = await getBlogPosts()
    res.json(allBlogPosts)
} 