import React, { useState } from 'react'
import styles from './css/Comment.module.css'
import Rating from '@mui/material/Rating'
import { CommentFormProps } from '../utils/Types'

const CommentForm: React.FC<CommentFormProps> = ({ sumbitted }) => {
  let [rating, setRating] = useState<number | null>(null)
  let [article, setArticle] = useState<string>("")
  return (
    <form className={styles.commentForm} onSubmit={sumbitted}>
      <Rating
        precision={0.5} name="rating"
        value={rating} onChange={(event, newRating) => setRating(newRating)}
      />
      <textarea
        onChange={(event) => setArticle(event.target.value)} value={article}
        name="comment" placeholder="Write a comment"
        className={styles.textareaField} maxLength={400} rows={4} cols={50}
      />
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  )
}

export default CommentForm