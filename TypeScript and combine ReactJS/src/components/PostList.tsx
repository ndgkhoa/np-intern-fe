import { Post } from '../types/types'
import PostCard from './PostCard'

interface PostListProps {
    posts: Post[]
}

const PostList = ({ posts }: PostListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {posts.map((post) => (
                <div key={post.id}>
                    <PostCard data={post} />
                </div>
            ))}
        </div>
    )
}

export default PostList
