import React from "react";
import {useState} from "react";
import Image from 'next/image';
import image from '/public/HeroImage.svg';
import Link from "next/link";





export default function HomeHero(){


    const SERVER_URL = 
    process.env.SERVER_URL ?? 'http://localhost:8000';
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  // Fetch for API authentication and dynamic rendering
  const fetchJoke = () => {
      return new Promise((resolve, reject) => {
          fetch('{SERVER_URL}/auth/login', {
              method: 'POST',
              body: {
                  email : `${email}`,
                  password : `${password}`
              },
              headers: { 'Accept': 'application/json' }
          })
              .then(res => res.json())
              .then(data => resolve(data.joke))
      })
  }
    return(

        <div className={styles.HeroContainer}>
            <div className={styles.HeroText}>
                <div className={styles.title}>Stay connected off-grid with the Narma network</div>
                <div className={styles.text}>Narma is your pocket sized support group. Dealing you a healthy dose of 
                internet content spanning news to local events, memes to movie recco&apos;s, tiktoks to talking-points and everything in between.</div>
                <form  className={styles.form} action="/send-data-here" method="post">
                    
                    <input type="text" value={email} className={styles.input} name="first" placeholder="Email Address"/>
                    <input type="text" value={password} className={styles.input} name="last" placeholder="Password"/>
                    <div className={styles.Button}><button type="submit">Log In</button></div>
                    <div className={styles.forgot}><Link  href="/forgotpassword">Forgot your password?</Link></div>

                </form>    
                
            </div>
            <div className={styles.HeroImage}>

            </div>
        </div>
    )
}

const styles = {
    HeroContainer: 'flex xs:flex-col lg:flex-row lg:min-h-screen',
    HeroText: 'flex flex-col text-left xs:p-10 lg:ml-12 lg:w-1/3 lg:mt-12',
    HeroImage: 'sm:flex lg:w-2/3 bg-hero bg-center drop-shadow-xl bg-top-8 bg-contain bg-no-repeat min-h-[500px] -ml-12 xs:hidden',
    title: 'font-roboto font-bold xs:text-3xl md:text-4xl md:px-2 xs:pt-12 md:pt-16 md:text-center lg:text-left lg:text-5xl mb-10', 
    text: 'text-l md:px-24 lg:px-0',
    Button: 'flex bg-[#a09924] rounded-lg p-1 w-1/2 justify-center ml-2 mt-5 px-5 text-white',
    input: 'rounded-lg m-2 p-2 bg-[#f4f4ee]', 
    form: 'flex flex-col w-2/3 pt-10', 
    loginBox: 'flex w-2/3',
    forgot: 'text-blue-600 text-sm ml-2 mt-6 mb-12 xs:mb-0', 
}
