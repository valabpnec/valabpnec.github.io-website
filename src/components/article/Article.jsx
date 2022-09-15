import React from "react";
import './article.css';

const Article = ({ imgUrl, date, text }) => {
    return(
        <div className="va__blog-container_article">
            <div className="va__blog-container_article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="va__blog-container_article-content">
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
            </div>
            <a href="https://researchblog.nust.edu.pk/ground-breaking-research-at-our-flagship-video-analytics-va-lab/">Read Full Article</a>
            </div>
    </div>
    )
};

export default Article;