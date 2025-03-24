import { useParams } from "react-router";
import running from '../../assets/img/running.webp'
import './style.css';
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { Utils } from "../../utils";
import Skeleton from "../../components/Skeleton";
import Card from "../../components/Card";

export default function CategoryDetails() {

    const { typeCategory } = useParams();

    const { data, loading, error, fetchData } = useFetch(Utils.getUrlCategories(typeCategory))

    useEffect(() => {
        fetchData()
    }, [typeCategory]);

    const showSKeleton = () => {
        return Array.apply(null, Array(8)).map((key, index) => { return <Skeleton key={index} />; });
    }

    const showCardBooks = () => {
        return data.map((books, index) => {
            const { author_name, cover_i, title, editions } = books
            return <Card 
            title={title} 
            key={index}
            author={author_name} 
            cover={cover_i} 
            pages="12" 
            link={editions}></Card>
        })

    }


    return (
        <div>
            <article className="banner__category">
                <img src={running} ></img>
                <h1>{typeCategory}</h1>
            </article>

            <article className="category__container">

                {(loading) && showSKeleton()}

                {(!loading) && showCardBooks()}

            </article>
        </div>
    )
}