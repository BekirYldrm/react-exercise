import { useNavigate } from "react-router-dom"

// useNavigate ve Dynamic URL Parameter  örneklerine baktik.
export const data = [
  { id: 0, name: "React", description: "React aciklama" },
  { id: 1, name: "Vue", description: "Vue aciklama" },
  { id: 2, name: "Angular", description: "Angular aciklama" }
]

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      {
        data.map((dt, index) => (
          <div onClick={() => navigate(`detail/${dt.id}`)} style={{ cursor: 'pointer', marginBottom: '30px' }} key={index}>
            <div> {dt.name} </div>
            <div> {dt.description} </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home