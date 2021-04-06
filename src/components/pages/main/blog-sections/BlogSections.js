import React from 'react'
import './BlogSections.css'
import BlogCard from "./blog-card/BlogCard";

export default function BlogSections(){
    return(
        <section className="news">
            <div className="container">
                <div className="news__top">
                    <div className="news__top-title title">Блог BlaBlaCar</div>
                    <a href="#" className="news__top-link link">Читать BlaBlaLife: "Жизнь как путешествие"</a>
                </div>
                <div className="news__inner">
                   <BlogCard />
                   <BlogCard />
                   <BlogCard />
                </div>
            </div>
        </section>
    )
}