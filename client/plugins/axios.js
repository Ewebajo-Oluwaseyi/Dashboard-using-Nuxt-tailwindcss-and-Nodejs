//import token

export default function({ $axios }) {
    $axios.onRequest((config) => {
        config.headers['Authorization'] = localStorage.getItem("jwt")
    })
}