import {BlogPostModel, Blog} from '../schemas'
import {getSingleBlogPost} from './getSingleBlogPost'

export const editPost = async (id: string, blog:Blog) => {

await BlogPostModel.findByIdAndUpdate(id, blog)
const edited = await getSingleBlogPost(id)
    return edited
} 