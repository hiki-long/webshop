import axios from "axios"

export function UploadGoad(data) {
    axios.post('http://localhost:8089/api/upload', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}