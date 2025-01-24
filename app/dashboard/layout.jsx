import React from 'react' 
import Navbar from "../ui/Dashboard/navbar/page.jsx"; // الانتقال للأعلى إلى "ui/Dashboard/navbar"
import Sidebar from "../ui/Dashboard/sidebar/page.jsx"; // نفس الشيء مع Sidebar
import styles from "../ui/Dashboard/dashboard.module.css"
import Footer from "./../ui/Dashboard/footer/footer";

export default function layout({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu} >
      <Sidebar/>

      </div>
      <div className={styles.content} >
      <Navbar/>

 {children}
 <Footer/>
      </div>
     
    </div>
  )
}
