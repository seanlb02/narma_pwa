import Head from 'next/head'
import Image from 'next/image'
import Homebody from '../components/Homebody'

import Navbar from '../components/Navbar'
import styles from '../styles/homepage.module.css'

export default function Home() {
  return (

    <div className={styles.pageContainer}>
    <Navbar/>
    <Homebody/>
    </div>
  )
}
