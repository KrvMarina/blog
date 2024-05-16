"use client"
import React, { useState } from "react";
import styles from './page.module.css';
import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import Link from "next/link";
import { useRouter } from "next/navigation";



const Signup = () => {
    const [error, setError] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });
            res.status === 201 && router.push("/dashboard/signin?success=Account has been created");
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };
    return (
        <div className={styles.container}>
            <h3 className={styles.titel_h3}>Create account</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type="text" id="username" placeholder="Enter username" />
                <Input type="e-mail" id="email" placeholder="Enter email" />
                <Input type="password" id="password" placeholder="Enter password" />
                <button className={styles.button}>Register</button>
                <p className={styles.under_form}>Already have an account?<Link href="/dashboard/signin">Sign in</Link></p>

                {error && "Something went wrong!"}
            </form>
        </div>
    )
}

export default Signup;
