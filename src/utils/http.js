import axios from 'axios';

const http = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export async function GET(path, options = {}) {
    return await (
        await http.get(path, options)
    ).data;
}

export default http;
