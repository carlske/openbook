import { useEffect } from "react";
import { Utils } from "../utils";
import { useState } from "react";

export default function useAuthors({loading,data}) {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        if (!loading && data) {
            const authorsList = Utils.getAuthorsName(data)
            setAuthors(authorsList);
        }
    }, [data])

    return {
        authors
    }
}