// components / shared / Layout.jsx
// ** 전체 레이아웃 컴포넌트 ** 
// ** Header 와 Footer 를 import 받아 사용 **

import {BrowserRouter} from "react-router-dom";

import styles from  "../../components/cssModule/Layout.module.css"
import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"



const Layout = () => {

    return (
        <div className={styles.layout}>
            <BrowserRouter>
                {/* Header 영역 */}
                <Header></Header>

                {/* Main Contents 영역 */}
                <Main></Main>


                {/* Footer 영역 */}
                <Footer></Footer>

            </BrowserRouter>
        </div>
    )
}

export default Layout
