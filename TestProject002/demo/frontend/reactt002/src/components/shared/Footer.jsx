// components / Shared / Footer.jsx
import styles from "../../components/cssModule/Footer.module.css"
import React from 'react'
const Footer = () => {

    return (

        <footer className={styles.footer}>
            <div className={styles.contents}>
                <div>
                로고 자리
                </div>
            <nav className={styles.navigation}>

                <ul>
                    <li>메뉴 1</li>
                    <li>메뉴 2</li>
                </ul>
            </nav>
            </div>
        </footer>
    )
}

export default Footer