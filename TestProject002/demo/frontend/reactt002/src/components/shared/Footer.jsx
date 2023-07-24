// components / Shared / Footer.jsx
import styles from "../../components/cssModule/Footer.module.css"
import React from 'react'
const Footer = () => {

    return (

        <footer className={styles.footer}>
            <div className={styles.contents}>
                <div className={styles.inner}>
                    <div>© Copyright 2023 JSW</div>
                    <div>Terms and Conditions</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer