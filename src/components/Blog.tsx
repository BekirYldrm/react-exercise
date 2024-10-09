import React, { useEffect, useState } from 'react'
import { BlogType } from '../utils/Types'
import blogList from '../utils/blogList';
import styles from "./css/Blog.module.css"
import { useParams } from 'react-router-dom';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Blog: React.FC = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState<BlogType>()

    useEffect(() => {
        const foundBlog: BlogType = blogList.find(dt => dt.id == Number(id))!
        setBlog(foundBlog)
    }, [id])

    return (
        <div className={styles.blog}>
            <h5 className={styles.author}>{blog?.authorFirstName + " " + blog?.authorLastName}</h5>
            <h5 className={styles.date}>{blog?.date}</h5>
            <img className={styles.img} src={blog?.img} />
            <h1 className={styles.title}>{blog?.title}</h1>
            <p className={styles.content}>{blog?.content}</p>
            <div className={styles.bottomDiv}>
                <BookmarkSharpIcon fontSize='large' className={styles.icon} color="primary" />
                <ThumbUpOffAltIcon fontSize='large' className={styles.icon} color="primary" />
                <p className={styles.popularity}>{blog?.popularity}</p>
            </div>
        </div>
    )
}

export default Blog