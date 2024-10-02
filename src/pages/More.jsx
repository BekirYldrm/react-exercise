import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const More = () => {
    const { id } = useParams()
    const [singleData, setSingleData] = useState()

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleData(data)
        }
        getData()
    }, [])

    console.log(singleData)
    return (
        <div>
            <div>{singleData?.title}</div>
            <img style={{ width: "100px" }} src={singleData?.image} alt=""></img>
        </div>
    )
}

export default More