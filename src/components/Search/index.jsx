import { useState } from "react"
import './style.css';

export default function SerachComponent ({serchEvent}) {

    const seachBook = (event) =>{
        console.log(event.target.value)
        serchEvent(event.target.value)
    }

    return (
        <section className="search__container">
            <input onInput={seachBook}></input>
        </section>
    )
}