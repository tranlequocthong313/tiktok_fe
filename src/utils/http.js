import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export async function GET(path, options = {}) {
    return await (
        await http.get(path, options)
    ).data;
}

export default http;
