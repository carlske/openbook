import { useParams } from "react-router"

export default function AuthorDetails (){
    
    const {nameAuthor} = useParams(); 
    
    return (
        <div>
            <h1>Author: {nameAuthor}</h1>
        </div>
    )
}