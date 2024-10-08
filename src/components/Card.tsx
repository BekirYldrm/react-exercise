import React, { useState } from "react"
import { BlogData } from "../utils/Types"
import styles from "./css/Card.module.css"
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useNavigate } from "react-router-dom";


const Card: React.FC<BlogData> = ({ id, title, img, date, content, author, popularity }) => {

  const navigate = useNavigate()
  const [popularite, setPopularite] = useState<number>(popularity)


  const liked = () => {
    console.log("like")
    //setPopularite ile begeni sayisini arttirmak
  }

  return (
    <div className={styles.card}>
      <div className={styles.topDiv} onClick={() => navigate(`/more/${id}`)}>
        <img className={styles.img} src={img} alt="" />
        <h6>{author}</h6>
        <h6>{date}</h6>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content.substring(0, 100) + "..."}</p>
      </div>
      <div className={styles.bottomDiv}>
        <BookmarkSharpIcon className={styles.icon} color="primary" />
        <ThumbUpOffAltIcon className={styles.icon} color="primary" onClick={liked} />
        <p className={styles.popularity}>{popularite}</p>
      </div>
    </div>
  )
}

export default Card