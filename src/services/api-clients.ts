import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '91acff61e8fb4de4a09ef488db575c29'
    }
})