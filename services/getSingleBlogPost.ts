import {BlogPostModel} from '../schemas'

export const getSingleBlogPost = async (id: string) => {
    const Post = await BlogPostModel.findById(id);
    return Post
}