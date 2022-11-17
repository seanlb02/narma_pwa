import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AboutContent from '../components/AboutContent'
import Navbar from '../components/Navbar'

export default function Lost() {
    return(
        <div>
        <Navbar/>
        <div className={styles.text}>Well you&apos;re fucked</div>

        </div>


    )
}

const styles = {
    text: "justify-center content-center mt-64 align-center items-center text-center h-[100vh]"
}