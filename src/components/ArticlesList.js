import React from "react"
import { Link } from "react-router-dom"
import "../style/ArticlesList.css"

const titles = ["SHOULDER PAIN - HOW TO FIX IT", "ELBOW PAIN.", "SPINE PAIN - WHAT TO DO?", "WHAT TO DO IF THE KNEE BURN", "HIP CLICKING - FIX IT!"]

const ArticlesList = () => {

    const articleList = titles.map(title => (
        <li key={title}><Link to={`/article/${title}`}>{title}</Link></li>))
    return (
        <div className="articleList">
            <h3>Article List:</h3>
            <ul>{articleList}</ul>
        </div>);
}

export default ArticlesList;