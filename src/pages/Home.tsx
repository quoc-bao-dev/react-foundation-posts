import { useEffect, useState } from "react"
import { getAllPost } from "../services/postService"
import { TPost } from "../interfaces/post"
import Post from "../components/Post"
import CreatePost from "../components/CreatePost"

const Home = () => {

    const [posts, setPosts] = useState<TPost[]>([])

    useEffect(() => {
        getAllPost().then(res => setPosts(res.data))
    }, [])

    return (
        <div className="w-[1200px] mx-auto pt-8 pb-14">

            <CreatePost />
            <div className="flex flex-col gap-5">
                {posts.map(post => <Post key={post.id} {...post} />)}
            </div>
        </div>
    )
}

export default Home