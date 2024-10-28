import { format } from "date-fns"
import { TPost } from "../interfaces/post"

type TPostProps = TPost

const Post = ({ name, avatar, title, content, createdAt }: TPostProps) => {
    return (
        <div className="p-2 bg-white rounded-lg shadow-md">
            <div className="flex gap-2 items-center">
                <img src={avatar} className="w-10 h-10 rounded-full" alt="" />
                <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-600">{format(new Date(createdAt), "dd/MM/yyyy")}</p>
                </div>
            </div>

            <div className="pt-2">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">{content}</p>
            </div>
        </div>
    )
}

export default Post