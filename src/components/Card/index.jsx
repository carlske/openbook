import { BOOK_URL_IMAGE } from "../../utils/OpenBookConst"
import './style.css';
import cover from '../../assets/img/cover.webp'
import ImageBook from "../ImageBook";

export default function Card({ title, author, cover, pages, link }) {


    return (
        <section className="card__container">
            <div className="container_image">
                <ImageBook cover={cover} desc={title} />
            </div>
            <div className="container__details">
                <div className="details__author">
                    <div className="author__name">
                        <p>Author : {author} </p>
                    </div>
                </div>
                <div className="details__books">
                    <div className="books__pages">
                        <p>Pages : {pages} </p>
                    </div>
                    <div className="books__link">
                        <a href={link}>Read </a>
                    </div>
                </div>
            </div>
        </section>
    )
}