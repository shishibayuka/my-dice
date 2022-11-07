import axios from "axios";

const instance = axios.create({
baseURL: "http://localhost:8100/api",
headers: {
    Authorization: `token YOURTOKEN`
}
});


export default instance;