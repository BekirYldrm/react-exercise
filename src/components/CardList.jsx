import Card from "./Card"
import styles from "./CardList.module.css"

const dataList = [
    {   
        id:1,
        img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        title: "Backpack",
        subheading: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    },
    {
        id:2,
        img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        title: " Slim Fit T-Shirts ",
        subheading: "men's clothing",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. "
    },
    {
        id:3,
        img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        title: " Hard Drive ",
        subheading: "electronics",
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance."
    },
    {
        id:4,
        img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        title: "Jacket, Winter Coats ",
        subheading: "women's clothing",
        description: "100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm."
    },
    {
        id:5,
        img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        title: "T Shirt Casual Cotton Short ",
        subheading: "women's clothing",
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch."
    }
]

const CardList = () => {


    return (
        <div className={styles.cardContainer}>
            {dataList.map((data, index) => (
                <Card key={index} img={data.img} title={data.title} description={data.description} subheading={data.subheading} />
            ))}
        </div>
    )
}

export default CardList