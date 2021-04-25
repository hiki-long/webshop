import axios from "axios"
import qs from "qs"

export function UploadGoad(data) {
    axios.post('http://localhost:8089/item/addItem', qs.stringify(data))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}