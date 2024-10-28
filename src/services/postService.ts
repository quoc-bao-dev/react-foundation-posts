import axios from "axios";
import { TPost } from "../interfaces/post";
const BASE_URL = "https://671f9751e7a5792f052ed19f.mockapi.io/api/v1/posts"

export const getAllPost = () => axios.get(BASE_URL)

export const createPost = (data: Omit<TPost, "id" | "createdAt">) => axios.post(BASE_URL, data)

export const deletePost = (id: string) => axios.delete(`${BASE_URL}/${id}`)