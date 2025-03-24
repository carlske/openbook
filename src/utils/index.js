import { BOOK_URL, FIELDS_URL_CATEGORIES } from "./OpenBookConst"

export class Utils {
    static getCategoriesNav() {
        return [
            "running",
            "animals",
            "sky",
            "music",

        ]
    }

    static getDocs(response) {
        const {docs}= response
        if(docs === undefined){
            return null
        }
        return docs
    }

    static getUrlCategories(category) {
        return `${BOOK_URL}search.json?q='${category}&${FIELDS_URL_CATEGORIES}`;
    }
}