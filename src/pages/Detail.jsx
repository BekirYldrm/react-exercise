import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { data } from "./Home"

// useLocation , useParams , useEffect , useState örneklerine baktik.

const Detail = () => {
  const { id } = useParams()
  const [findData, setfindData] = useState(null)
  const location = useLocation()
  console.log(location);
  

  useEffect(() => {
    if (id) {
      setfindData(data.find(dt => dt.id == id))
    }
  }
    , [id])



  return (
    <div>
      <div>{findData?.name}</div>
      <div>{findData?.description}</div>
    </div>
  )
}

export default Detail