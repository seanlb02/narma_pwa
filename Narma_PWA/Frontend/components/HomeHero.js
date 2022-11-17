import React from "react";
import Image from 'next/image';
import image from '/public/HeroImage.svg';
import Link from "next/link";


export default function HomeHero(){
    return(

        <div className={styles.HeroContainer}>
            <div className={styles.HeroText}>
                <div className={styles.title}>Stay connected off-grid with the Narma network</div>
                <div className={styles.text}>Narma is your pocket sized support group. Dealing you a healthy dose of 
                internet content spanning news to local events, memes to movie recco&apos;s, tiktoks to talking-points and everything in between.</div>
                <form  className={styles.form} action="/send-data-here" method="post">
                    
                    <input type="text" className={styles.input} name="first" placeholder="Email Address"/>
                    <input type="text" className={styles.input} name="last" placeholder="Password"/>
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
    HeroText: 'flex flex-col text-left xs:p-10 md:pl-24 lg:ml-12 lg:w-1/3 lg:mt-12 lg:pr-0 lg:pl-12',
    HeroImage: 'flex lg:w-2/3 bg-hero bg-center drop-shadow-xl bg-top-12 bg-contain bg-no-repeat min-h-[500px]',
    title: 'font-roboto text-left font-bold text-4xl mb-10 mr-0', 
    text: 'text-l',
    Button: 'flex bg-[#a09924] rounded-lg p-1 w-1/2 justify-center ml-2 mt-5 px-5 text-white',
    input: 'rounded-lg m-2 p-2 bg-[#f4f4ee]', 
    form: 'flex flex-col w-2/3 pt-10', 
    loginBox: 'flex w-2/3',
    forgot: 'text-blue-600 text-sm ml-2 mt-6 mb-12 xs:mb-0', 
}
