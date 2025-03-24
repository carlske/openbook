import { BOOK_URL_IMAGE } from "../../utils/OpenBookConst"
import './style.css';

export default function Card ({title,author, cover, pages, link}) {

    const getImage = (size) => {
        return `${BOOK_URL_IMAGE}a/id/${cover}-${size}.jpg`
    }

    return (
        <section className="card__container">
            <div className="container_image">
                <img src={getImage("L")} alt={title}></img>
            </div>
            <div className="container__author">
                <div className="author__name">
                    <p>Author : {author} </p>
                </div>
                <div className="author__name">
                    <p>Author : {author} </p>
                </div>
            </div>
            <div className="container__details">
                <div className="details__name">
                    <p>Pages : {pages} </p>
                </div>
                <div className="details__name">
                    <a href={link}>Read </a>
                </div>
            </div>
        </section>
    )
}