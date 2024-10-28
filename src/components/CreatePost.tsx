import { FormEventHandler, useRef } from "react"
import { createPost } from "../services/postService"

const CreatePost = () => {

    const titleRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const avatarRef = useRef<HTMLInputElement>(null)
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const title = titleRef.current?.value
        const content = contentRef.current?.value
        const name = nameRef.current?.value
        const avatar = avatarRef.current?.value
        if (!title || !content || !name || !avatar) {
            alert("Please fill all the fields")
            return
        } else {
            const post = {
                title,
                content,
                name,
                avatar
            }
            createPost(post)
        }

    }
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 pb-8"> Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" ref={titleRef} placeholder="Title" />
                <br /><br />
                <input className="input" type="text" ref={contentRef} placeholder="Content" />
                <br /><br />
                <input className="input" type="text" ref={nameRef} placeholder="Name" />
                <br /><br />
                <input className="input" type="text" ref={avatarRef} placeholder="Avatar" />
                <br /><br />
                <div className="pt-3">
                    <button className="py-2 px-3 font-medium bg-blue-500 text-white hover:bg-blue-600 rounded-lg">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost