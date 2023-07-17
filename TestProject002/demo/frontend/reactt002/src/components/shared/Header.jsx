// components / Shared / Header.jsx

import styles from  "../../components/cssModule/Header.module.css"
import React from 'react'

const Header = () => {

    return (

        <header className={styles.header}>
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
        </header>
    )
}

export default Header