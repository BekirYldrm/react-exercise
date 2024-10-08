import React from "react"
import { Data } from "../utils/type-and-interfaces"
import Card from "./Card"
import styles from "./CardList.module.css"
import dataList from "../utils/dataList"

const CardList: React.FC = () => {

    return (
        <div className={styles.cardContainer}>
            {dataList.map((data: Data, index) => (
                <Card
                    key={index}
                    id = {data.id}
                    img={data.img}
                    title={data.title}
                    content={data.content}
                    date={data.date}
                    author={data.author}
                    popularity={data.popularity} />
            ))}
        </div>
    )
}

export default CardList