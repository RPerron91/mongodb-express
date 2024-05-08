import {editPost} from '../services'
import {Request, Response} from 'express'

export const editBlogPostController = async (req: Request, res:Response) => {
    const id = req.query.id
    //@ts-expect-error
    const editBlog = await editPost(id, req.body)
    res.json(editBlog)
}