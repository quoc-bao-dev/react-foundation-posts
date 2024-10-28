import axios from "axios";
const BASE_URL = "https://671f9751e7a5792f052ed19f.mockapi.io/api/v1/posts"

export const getAllPost = () => axios.get(BASE_URL)