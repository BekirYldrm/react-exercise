import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../utils/type-and-interfaces'
import dataList from '../utils/dataList'

const More = () => {
  const { id } = useParams()

  const [data, setData] = useState<Data>()

  useEffect(() => {
    const foundData: Data = dataList.find(dt => dt.id == Number(id))!
    setData(foundData)
  }, [id])

  return (
    <div>
      <img src={data?.img} />
    </div>
  )
}

export default More