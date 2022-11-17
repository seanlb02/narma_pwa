import React from "react";
import Link from 'next/link'
import Image from "next/image";



export default function Navbar(){
    return(
             
        <div className={styles.NavContainer}>
            
            <div className={styles.copyright}>Copyright Narma 2022</div>
            <div className={styles.links}>
                <div className={styles.button}><Link href='/'>Privacy</Link></div>
                <div className={styles.button}>Legal</div>
                <div className={styles.button}>
                    <div className={styles.GDbutton}>Contact</div>
                </div>
            </div>

        

        </div>
    )


}

const styles = {
    NavContainer: 'mt-12 flex p-8 bg-black justify-center content-center xs:h-12 lg:h-24',
    copyright:  'flex text-white flex-1 xs:text-xs content-center lg:-mr-12  h-auto w-[100px]',
    links: 'flex flex-1 justify-end gap-5 items-center text-white content-right xs:text-s invisible md:visible',
    
    GDbutton:'bg-black rounded-md py-1 px-2 text-white',
}
