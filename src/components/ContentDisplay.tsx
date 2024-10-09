import React from 'react'
import styles from './css/ContentDisplay.module.css'
import Blog from './Blog'
import Comment from './Comment'

const ContentDisplay: React.FC = () => {
    return (
        <div className={styles.container}>
            <Blog />
            <Comment />
        </div>
    )
}

export default ContentDisplay