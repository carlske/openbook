import { useState } from "react"

export default function SerachComponent ({serchEvent}) {

    const seachBook = (event) =>{
        console.log(event.target.value)
        serchEvent(event.target.value)
    }

    return (
        <div>
            <input onInput={seachBook}></input>
        </div>
    )
}