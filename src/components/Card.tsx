import React, { useState } from "react"
import { BlogType } from "../utils/Types"
import styles from "./css/Card.module.css"
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useNavigate } from "react-router-dom";
import { likedList } from "../utils/likedList";


const Card: React.FC<BlogType> = ({ id, title, img, date, content, authorFirstName, authorLastName, popularity }) => {

  const navigate = useNavigate()
  const [popularite, setPopularite] = useState<number>(popularity)

  const liked = () => {
    const liked = likedList.find(liked => liked.userId == Number(localStorage.getItem("id")) && liked.blogId == id)
    if (typeof liked == "undefined") {
      setPopularite(popularite + 1)
      likedList.push({ id: likedList.length, blogId: id, userId: Number(localStorage.getItem("id")) })
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.topDiv} onClick={() => navigate(`/blog/${id}`)}>
        <img className={styles.img} src={img} alt="" />
        <h6>{authorFirstName + " " + authorLastName}</h6>
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