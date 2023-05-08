import React from "react"
import { NavLink } from "react-router-dom"

const datas = [
    {
        path: "/",
        txt: "Home",
        exact: true
    },
    {
        path: "/aboutMe",
        txt: "About Me"
    },
    {
        path: "/articles",
        txt: "Articles"
    },
    {
        path: "/contact",
        txt: "Contact Me"
    }
]

const Navigation = props => {
    const Navigation = datas.map(data => (
        <NavLink key={data.txt} onClick={props.click} to={data.path} exact={data.exact ? data.exact : null}>{data.txt}</NavLink>
    ))
    return (
        <nav className="navigation">
            {Navigation}
        </nav>
    );
}

export default Navigation;