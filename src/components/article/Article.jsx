import React from "react";
import './article.css';

const Article = ({ imgUrl, blogUrl, date, text }) => {
    return(
        <div className="va__blog-container_article">
            <div className="va__blog-container_article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="va__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <a href={blogUrl}><h3>{text}</h3></a>
                </div>
                <a href={blogUrl}>Read Full Article</a>
            </div>
    </div>
    )
};

export default Article;