import {BlogPostModel} from '../schemas'

export const getBlogPosts = async () => {
    const allPosts = await BlogPostModel.find({})

    return allPosts
}