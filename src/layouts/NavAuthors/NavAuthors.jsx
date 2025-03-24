import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import useAuthors from "../../hooks/useAuthors";
import './style.css'
import { NavLink } from "react-router";
import Skeleton from "../../components/Skeleton";
import { Utils } from "../../utils";

export default function NavAuthors() {



    const renderNavList = () => {

        const navList = []

        navList.push(<NavLink to='/' key={0}>
            HOME
        </NavLink>);

        const authorsLisks = Utils.getCategoriesNav().map((item, index) => (
            <NavLink key={index + 1} to={`/category/${item}`}
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }>
                {item}
            </NavLink>
        ))

        navList.push(...authorsLisks)

        return navList
    }

    return (
        <nav>
            {renderNavList()}
        </nav>
    )

}