import {Request, Response} from 'express'
import {getSingleBlogPost} from '../services'

export const getSingleBlogPostController = async (req:Request, res:Response) => {
    const id = req.query.id
    //@ts-expect-error
    const singleBlog = await getSingleBlogPost(id)
    res.json(singleBlog)
}