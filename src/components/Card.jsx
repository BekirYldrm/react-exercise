import styles from "./Card.module.css"

const Card = ({title,img,subheading,description}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
          <img className={styles.cardImg} src={img} alt=""/>
      </div>
      <h2 className={styles.largeHeader}>{title}</h2>
      <h4 className={styles.smallHeader}>{subheading}</h4>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.leftButton}>Secondary</button>
        <button className={styles.rightButton}>Primary</button>
      </div>
    </div>
  )
}

export default Card