import {BlogPostModel} from '../schemas'

export const deletePost = async (id: string) => {
    const del = await BlogPostModel.findByIdAndDelete(id)
    return del
}