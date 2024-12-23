import { Post } from '../types/types'

interface PostCardProps {
    data: Post
}

const PostCard = ({ data }: PostCardProps) => {
    return (
        <div className="p-2 mb-4 w-full md:w-[220px] md:h-[305px] h-[200px] border border-black rounded-md">
            <div>ID: {data.id}</div>
            <div className="h-[30px] md:h-[70px] text-[22px] font-semibold overflow-hidden text-ellipsis line-clamp-2 hover:text-blue-600 hover:cursor-pointer">
                {data.title}
            </div>
            <div className="h-[50px] md:h-[120px] overflow-hidden text-ellipsis line-clamp-5">
                {data.body}
            </div>
            <div className="py-2">By userId: {data.userId}</div>
        </div>
    )
}

export default PostCard
