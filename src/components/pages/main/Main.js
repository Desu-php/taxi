import React from 'react'
import MainSection from "./main-section/MainSection";
import PlanSection from "./plan-section/PlanSection";
import QuestionSection from "./question-sesction/QuestionSection";
import WhyWeSection from "./why-we-section/WhyWeSection";
import BlogSections from "./blog-sections/BlogSections";

export default function Main(){
    return (
        <>
            <MainSection/>
            <PlanSection/>
            <QuestionSection/>
            <WhyWeSection/>
            <BlogSections/>
        </>
    )
}
