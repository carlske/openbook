import { BOOK_URL_IMAGE } from "../../utils/OpenBookConst"

export default function ImageBook ({cover, desc}) {

    const getImage = (size) => {
        return `${BOOK_URL_IMAGE}a/id/${cover}-${size}.jpg`
    }

    function handledLoad(e) {
        console.log(e)
        console.log("wowow")
    }


    return (
        <>
            <img src={getImage('M')} alt={desc} onError={handledLoad}></img>
        </>
    )
}