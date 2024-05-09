import axios from "axios";

export default axios.create({
        baseURL:'https://api.rawg.io/api',
     params: {
        key: '1e13cab94fc44a0dbed363d8da2b5999'
     }   
})