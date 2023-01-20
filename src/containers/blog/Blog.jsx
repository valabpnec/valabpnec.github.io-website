import React from "react";
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blogUrls } from './imports';
import './blog.css';

const Blog = () => {
    return(
        <div className="va__blog section__padding" id="blog">
            <div className="va__blog-heading">
                <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="va__blog-container">
            <div className="va__blog-container_groupA">
                <Article imgUrl={blog01} blogUrl={blogUrls[0]} date="May 2021" text="State of the art research at our flagship Video Analytics Lab" />
            </div>
            <div className="va__blog-container_groupB">
                <Article imgUrl={blog02} blogUrl={blogUrls[1]} date="August 2021" text="Advanced techniques in object classification (Upcoming)" />
                <Article imgUrl={blog05} blogUrl={blogUrls[2]} date="Jan 2022" text="AI and AR-VR for better experience (Upcoming)" />
                <Article imgUrl={blog03} blogUrl={blogUrls[3]} date="May 2022" text="Real-time Activity Recognition (Upcoming)" />
                <Article imgUrl={blog04} blogUrl={blogUrls[4]} date="September 2022" text="Cyber security and Artificial Intelligence (Upcoming)" />
            </div>
        </div>
    </div>
    )
};

export default Blog;