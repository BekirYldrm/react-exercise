import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Product = () => {
    const navigate = useNavigate()
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const { data } = await axios.get('https://fakestoreapi.com/products')
            setAllData(data)
            setLoading(false)
        }
        getData()
    }, [])

    console.log(allData)
    return (
        loading ? <div>Loading....</div> :
            <div>
                {
                    allData?.map((data, i) => (
                        <div onClick={()=>navigate(`more/${data?.id}`)} style={{ marginBottom: '30px', cursor: 'pointer' }} key={i}>
                            <div>{data?.title}</div>
                            <img style={{ width: "100px" }} src={data?.image} alt=""></img>
                        </div>
                    ))
                }
            </div>
    )
}

export default Product