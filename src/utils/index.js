export class Utils {

    static getAuthorsName(params) {    
        const {docs} = params;

        let autorsList = new Set();

        docs.forEach(element => {
            autorsList.add(element.name.toUpperCase())
        })

        return [...autorsList].sort().splice(0,8) 
    }

}