import React from 'react'
import Blog from './Blog'
import styles from './css/BlogSection.module.css'
import Comment from './Comment'

const BlogSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <Blog />
            <Comment />
        </div>
    )
}

export default BlogSection