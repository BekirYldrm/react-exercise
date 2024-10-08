import React from "react"
import { BlogData } from "../utils/Types"
import Card from "./Card"
import styles from "./css/CardList.module.css"
import blogList from "../utils/blogList"

const CardList: React.FC = () => {

    return (
        <div className={styles.cardContainer}>
            {blogList.map((blog: BlogData, index) => (
                <Card
                    key={index}
                    id={blog.id}
                    img={blog.img}
                    title={blog.title}
                    content={blog.content}
                    date={blog.date}
                    author={blog.author}
                    popularity={blog.popularity} />
            ))}
        </div>
    )
}

export default CardList