import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimate } from "framer-motion"
import profilePic from "../assets/profile_pic.jpg"

const recommerce = [
    "From 2021 to 2023 I was a senior (then principal) product designer at Zalando Recommerce, working on second hand fashion journeys.",
    "I helped the team deliver improvement to the customer experience to achieve both growth and business sustainability, designed a fashion recycling service and moderated product strategy workshops."
]

const studio = [
    "From 2017 to 2021 I was at The Studio at Zalando, a design team that focuses on early stage projects to uncover the next big thing for Zalando.",
    "Among the projects that I was part of: I helped the Zalando sustainability team define their value proposition, visualised a potential partnership with Nike, explored ways to leverage brick and mortar stores to provide inspiration for customers and researched ways to personalise the customer experience with algorithms. I worked on some design ops topics, such as the design system contribution model, a design methods toolkit, a user insights repository, a Figma plugin and a prototyping framework."
]

const babbel = [
    "In 2016 I interned at Babbel as an interaction designer, redesigning the sound recording tool used by language experts to record audio material for language lessons.",
    "I wrote my master thesis on redesigning tools for expert or novice users. It turns out that is especially hard for expert users to adapt to new systems!"
]

const freelance = [
    "In 2022 I designed the landing page of Never Offline, a social media consulting agency based in Berlin.",
    "During the project, I helped them define their onsite content strategy and translated their brand identity to the page."
]

const strings = [recommerce, studio, babbel, freelance]
const titles = ["recommerce", "studio", "babbel", "freelance"]

const animationList = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.4,
            delayChildren: 0.4
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.4,
            delayChildren: 0.4
        }
    }
}

const ProjectChat = ({ position }) => {
    return (
        <AnimatePresence>
        <motion.div
            key={titles[position]}
            variants={animationList}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="portfolio-chat-wrapper">
            {strings[position].map((string, i) => {
                return(
                <motion.div
                    key={i}
                    variants={animationList}
                    layout="position"
                    className="chat-block">
                    <motion.div
                        className="chat-bubble">
                        {string}
                    </motion.div>
                    <motion.div
                        className="chat-avatar-container">
                        <img src={profilePic} alt="Picture of Leonardo Lanzinger" className="chat-author"></img>
                    </motion.div>
                </motion.div>)
            })}
        </motion.div>
        </AnimatePresence>
    )
}

export default ProjectChat