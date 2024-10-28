import { format } from "date-fns"
import { TPost } from "../interfaces/post"
import { deletePost, getAllPost } from "../services/postService"
import { setPosts } from "../features/postSlice"
import { useDispatch } from "react-redux"

type TPostProps = TPost

const Post = ({ name, avatar, title, content, createdAt, id }: TPostProps) => {
    const dispatch = useDispatch()

    const handleDelete = async () => {
        await deletePost(id)
        getAllPost().then(res => dispatch(setPosts([...res.data])))
        alert("Post deleted successfully")
    }
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div>
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="text-xs text-gray-600">{format(new Date(createdAt), "dd/MM/yyyy")}</p>
                    </div>
                </div>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
            </div>

            <div className="pt-2">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">{content}</p>
            </div>
        </div>
    )
}

export default Post

