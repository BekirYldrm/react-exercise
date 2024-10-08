import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./css/Comment.module.css"
import { blogSectionList } from '../utils/blogSectionList'
import { CommentData } from '../utils/Types'
import Rating from '@mui/material/Rating'
import CommentForm from './CommentForm'

const Comment: React.FC = () => {
    let { id } = useParams()
    let [comments, setComments] = useState<CommentData[]>([])
    let commentList: CommentData[] = []

    useEffect(() => {
        commentList = blogSectionList.find(blogSection => blogSection.id == Number(id))!.comments
        setComments(commentList)
    }, [id])

    function sumbitted(event: React.FormEvent<HTMLFormElement>): void {
        let newComment: CommentData = {
            id: commentList.length,
            username: localStorage.getItem("username")!,
            rating: Number(event.currentTarget.rating.value),
            comment: event.currentTarget.comment.value
        }
        setComments(prev => [...prev, newComment])
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