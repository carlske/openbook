import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { BOOKURLAUTHORS, CACHE_MENU } from "../../utils/OpenBookConst"
import useAuthors from "../../hooks/useAuthors";
import Spinner from '../../components/Spinner'
import './style.css'
import { NavLink } from "react-router";

export default function NavAuthors() {

    const { data, loading, error, fetchDataAndStorage } = useFetch(BOOKURLAUTHORS);
    const { authors } = useAuthors({ loading, data })

    useEffect(() => {
        fetchDataAndStorage(CACHE_MENU)
    }, []);

    return (
        <nav>
            {(loading) && <Spinner></Spinner>}
            <NavLink to='/'>
                HOME
            </NavLink>
            {(authors) && authors.map((item, index) => (
                <NavLink key={index} to={`/author/${item}`}
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                    {item}
                </NavLink>
            ))}
            <NavLink to='/search'>
                SEARCH
            </NavLink>
        </nav>
    )

}