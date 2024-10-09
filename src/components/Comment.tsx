import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./css/Comment.module.css"
import { commentList } from '../utils/commentsList'
import { CommentType } from '../utils/Types'
import Rating from '@mui/material/Rating'
import CommentForm from './CommentForm'

const Comment: React.FC = () => {
    let { id } = useParams()
    let [comments, setComments] = useState<CommentType[]>([])
    let commentsData: CommentType[] = []

    useEffect(() => {
        commentsData = commentList.filter(comment => comment.blogId == Number(id))
        setComments(commentsData)
    }, [id])

    function sumbitted(event: React.FormEvent<HTMLFormElement>): void {
        let commentValue: string | null = event.currentTarget.comment.value
        let ratingValue: string | null = event.currentTarget.rating.value

        if (commentValue && ratingValue) {
            let newComment: CommentType = {
                id: commentList.length,
                blogId: Number(id),
                username: localStorage.getItem("username")!,
                rating: Number(ratingValue),
                comment: commentValue
            }
            setComments(prev => [...prev, newComment])
        }

        event.preventDefault()
    }

    return (
        <div className={styles.commentSection}>
            <CommentForm sumbitted={sumbitted} />

            <div className={styles.commentContainer}>
                {comments?.map((comment, index) => (
                    <div key={index} className={styles.commentDiv}>
                        <p className={styles.username}>{comment.username}</p>
                        {comment.rating != null &&
                            <Rating name="read-only" value={comment.rating} readOnly precision={0.5} />}
                        <p className={styles.commentText}>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Comment