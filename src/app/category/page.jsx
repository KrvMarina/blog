import React from "react";
import Link from "next/link";
import styles from './page.module.css'
import { FaHeart } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";


const categories = [
    {
        href: "#",
        icon: <FaHeart />,
        title: "Life",
        description: "Food, Home, Health, Family, Relationships, Pets"
    },
    {
        href: "#",
        icon: <FaPerson />,
        title: "Self Improvement",
        description: "Mental Health, Productivity, Mindfulness"
    },
    {
        href: "#",
        icon: <MdOutlineWork />,
        title: "Work",
        description: "Marketing, Business, Leadership, Remote Work"
    },
    {
        href: "#",
        icon: <GrTechnology />,
        title: "Technology",
        description: "Blockchain, Data Science, Gadgets, Security, Artificial Intelligence"
    },
    {
        href: "#",
        icon: <HiMiniComputerDesktop />,
        title: "Software Development",
        description: "Programming, Programming Languages, Dev Ops, Operating Systems"
    },
    {
        href: "#",
        icon: <FaPerson />,
        title: "Media",
        description: "Writing, Art, Gaming, Humor, Movies, Music, Photography, Television"
    },
    {
        href: "#",
        icon: <IoPeople />,
        title: "Culture",
        description: "Philosophy, Religion, Spirituality, Fashion, Beauty, Language, Sports"
    },
    {
        href: "#",
        icon: <BiWorld />,
        title: "World",
        description: "Cities, Nature, Travel"
    }

];

const Category = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>Category</h2>
            <div className={styles.cards_container}>
                {categories.map((category, index) => (
                    <Link key={index} href={category.href}>
                        <div className={styles.card}>
                            <h4 className={styles.title_card}>{category.icon}{category.title}</h4>
                            <p>{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;
