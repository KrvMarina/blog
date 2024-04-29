"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Button from "../button/button";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/." className={styles.logo}>OpenMind</Link>
            <div className={styles.links}>
                <Link href="/category">Category</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Button url="#" text="Logout" inverted />
            </div>
        </div>
    )
}

export default Navbar;