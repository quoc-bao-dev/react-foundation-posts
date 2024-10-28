import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CreatePost from "../components/CreatePost"
import Post from "../components/Post"
import { setPosts } from "../features/postSlice"
import { getAllPost } from "../services/postService"
import { RootState } from "../store/store"

const Home = () => {

    const post = useSelector((state: RootState) => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        getAllPost().then(res => dispatch(setPosts(res.data)))
    }, [])

    return (
        <div className="w-[1200px] mx-auto pt-8 pb-14">

            <CreatePost />
            <div className="flex flex-col gap-5">
                {post.posts.map(post => <Post key={post.id} {...post} />)}
            </div>
        </div>
    )
}

export default Home