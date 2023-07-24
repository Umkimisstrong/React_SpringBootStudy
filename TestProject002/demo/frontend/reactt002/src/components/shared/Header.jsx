// components / Shared / Header.jsx


import { Link } from 'react-router-dom';
import styles from  "../../components/cssModule/default/Header.module.css";
import logo from "../../StaticContent/gentelella/build/image/crown.png";
import React from 'react';




const Header = () => {

    return (

        <header className={styles.header}>
            <div className={styles.contents}>
                {/* Logo */}
                <div className={styles.con_Logo}>
                
                <img src={logo} alt="React" className={styles.con_Logo_img}></img>
                </div>

                {/* Center */}
                <div className={styles.con_Center}>
                요리왕 정상원
                </div>

                {/* Nav Bar */}
                <nav className={styles.con_NavBar}>
                    <ul className={styles.nav_ul}>
                       <Link to="/default/login" className={styles.nav_link}>
                            <li className={styles.nav_li}>로그인</li>
                       </Link> 
                       <Link to="/default/signup" className={styles.nav_link}>
                            <li className={styles.nav_li}>회원가입</li>
                       </Link> 
                    </ul>
                </nav>
           </div>
        </header>
    )
}

export default Header