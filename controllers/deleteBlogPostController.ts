import {Request, Response} from 'express'
import {deletePost} from '../services'

export const deleteBlogPostController = async (req: Request, res: Response) => {
    const id = req.query.id
    // @ts-expect-error
    const deleted = await deletePost(id)
    res.json(deleted)
}