import React from "react";
import Link from 'next/link'
import Image from "next/image";


export default function AboutContent () {
    return (

        <div className ={styles.content}>
        <section className = {styles.heroComponent}>
            <div className = {styles.heroImage}>
                <div className = {styles.heroText}>Having trouble <span id="cycle"></span>?</div>
            </div>
        </section>

        <section className = {styles.About}>
            <div className = {styles.aboutContainerLeft}>
                <h2 className = {styles.aboutTitle}>Your pocket-sized support network</h2>
                <p className = {styles.aboutText}>Narma helps people battling anxiety, depression and addiction to remain engaged in the real world, no matter how alone they might think they are. </p>
            </div>
            <div className = {styles.aboutContainerRight}>
            </div>
        </section>

        <section className = {styles.Background}>
            <div className = {styles.backgroundContainerLeft}>
                <h2 className = {styles.backgroundTitle}>Dreading that next date, work function or friends night out?</h2>
                <p className = {styles.backgroundText}>We get it, talking isnt easy. That&apos;s why your Narma network is here to help, providing you with ice-breakers, jokes, questions to ask, interesting facts & current affairs. All the conversation starters you could ever need, delivered on the fly via your DMs.</p>
            </div>
            <div className = {styles.screenshot}>
                <img className = {styles.screenimage} src = "/dateprompts.svg" height = {500} width = {500} layout = "responsive"/>
            </div>
        </section>

        <section className = {styles.Background2}>
            <div className = {styles.backgroundContainerLeft}>
                <h2 className = {styles.backgroundTitle}>Feeling lonely? Stuck in your own head?</h2>
                <p className = {styles.backgroundText}>Your Narma network love randomly sending jokes, memes, trending stories, book and movie reccommendations and motivational tips they know you'll like. 
                    Feel free to share the content with your friends to help you remain engaged in the real world.
                    <br></br><br></br>No more mindless scrolling, get your tailored content delivered to you in healthy doses. 
                </p>
            </div>
            <div className = {styles.screenshotReverse}>
                <Image className = {styles.screenimage} src = "/jokestipsprompt.svg" height = {500} width = {500} layout = "responsive"/>
            </div>
        </section>

        <section className = {styles.Background3}>
            <div className = {styles.backgroundContainerLeft}>
                <h2 className = {styles.backgroundTitle}>Need guidance?</h2>
                <p className = {styles.backgroundText}>Reach out to your Narma network for some helpful advice & resources that can get you through the hard times. Joggrs can also reccomend you to some mental health professionals in your area, all you have to do is ask.</p>
            </div>
            <div className = {styles.screenshot}>
                <img className = {styles.screenimage} src="/strugglingpromt.svg" height = {500} width = {500} layout = "responsive"/>
            </div>
        </section>

        <section className = {styles.getStartedContainer}>
            <h1 className = {styles.getStartedTitle}>
                Get connected with your Narma network today for <u><em>free</em></u>
            </h1>
        </section>

        <section className = {styles.howItWorks}>
            <div className = {styles.stepsContainer}>
                <div className={styles.stepOneImage}></div>
                <p>1. Download the app to your phone and create an account. This is where you can tell your future network a bit about yourself.</p>
            </div>
            <div className = {styles.stepsContainer}>
                <div className={styles.stepTwoImage}></div>
                <p>2. Start looking for people to add to your network. Search their profiles and see if you like what they are about.</p>
            </div>
            <div className = {styles.stepsContainer}>
                <div className={styles.stepThreeImage}></div>
                <p>3. Recieve and send messages to your network. Limit how many messages come through via your preferences.</p>
            </div>
        </section>

        <section className = {styles.disclaimer}>
            <h1 className = {styles.disclaimerTitle}>A new kind of social <span className={styles.greenText}><em>safety-net</em></span>work</h1>
            <p className = {styles.disclaimerText}>Nothing can replace real people when it comes to mental health support. But sometimes getting daily guidance is challenging when life gets in the way. 
                Joggr offers people a virtual network of allies to help get you through the day-to-day. The Joggr network is developed with science in mind, and designed by professionals 
                with health content contributions coming from certified psychologists. <br></br><br></br><br></br>As always, remain in contact with the people around you for extra help, or Lifeline (13 11 14) in emergencies.
            </p>
        </section>

    </div> 

    )
}

const styles = {
    content: "flex flex-col",
    heroComponent: "justify-center items-center content-center",
    heroImage: "bg-fixed flex bg-mountains bg-cover bg-center content-center bg-no-repeat min-h-[40vw] items-center justify-center",
    heroText: "text-white font-merriweather xs:text-2xl lg:text-6xl text-center content-center justify-center ",
    cycle: "",
    About: "bg-hero bg-contain bg-bottom bg-no-repeat xs:flex xs:flex-col lg:p-10 xs:pt-0 xs:pb-0 lg:pt-20 bg-[#e8ffc0] pb-12 xs:pb-12 sm:min-h-[100vw] xs:min-h-[120vw] md:min-h[120vw]",
    aboutText: "text-center lg:mt-12 xs:mt-6 xs:text-s md:text-2xl",
    aboutTitle: "font-roboto text-center xs:text-4xl md:text-6xl font-bold",
    aboutBg: "bg-hero",
    aboutContainerLeft: "flex-1 flex-col xs:m-16 md:ml-24 md:mr-16",
    aboutContainerRight: "flex-1",
    Background: "xs:flex xs:content-center xs:flex-col lg:flex lg:flex-row-reverse xs:mt-2 lg:mt-20",
    Background2: "xs:flex xs:flex-col lg:flex lg:mt-20 md:py-16 bg-[#dceef0]",
    Background3: "xs:flex xs:flex-col lg:flex lg:flex-row-reverse lg:mt-24",
    screenshot: "flex flex-1 ml-28",
    screenshotReverse: "flex flex-1 ml-16",
    backgroundContainerLeft: "flex-1 flex-col text-left items-center content-center m-10 mt-8",
    backgroundTitle: "lg:text-5xl mb-7 lg:mx-16 xs:mx-24 xs:text-4xl lg:mt-24",
    backgroundText: "lg:mx-16 xs:mx-7",
    getStartedContainer: "text-center pt-12",
    getStartedTitle: "text-3xl mt-24 bg-[#DAF7A6] pt-12",
    howItWorks: "xs:flex xs:flex-col md:flex bg-[#DAF7A6]",
    stepsContainer: "flex-1 p-12 flex-col mb-12 text-justified",
    stepOneImage: "bg-mountains h-[20vw] bg-contain mb-12",
    stepTwoImage: "bg-mountains h-[20vw] bg-contain mb-12",
    stepThreeImage: "bg-mountains h-[20vw] bg-contain mb-12",
    disclaimer: "text-center pt-20 pb-24",
    disclaimerTitle: "text-3xl",
    disclaimerText: "mx-24 my-12 text-lg",
    greenText: "text-green-700",
}