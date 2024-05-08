import {BlogPostModel, Blog} from '../schemas'

export const createBlogPost = async (blog: Blog) => {
    const createBlog = await BlogPostModel.create(blog)
    return createBlog
}
