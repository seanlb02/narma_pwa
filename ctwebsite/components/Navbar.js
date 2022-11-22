import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import React, { useState } from "react";

export default function Navbar() {
    return (

        <div className ={styles.navbarContainer}>
            <ul className={styles.linkList}>
                <li className={styles.link}>Contact</li>
                <li className={styles.link}>Things</li>
                <li className={styles.link}>Press</li>
                <li className={styles.link}>Releases</li>
                <li className={styles.link}>Home</li>
            </ul>

        </div>


    )
}