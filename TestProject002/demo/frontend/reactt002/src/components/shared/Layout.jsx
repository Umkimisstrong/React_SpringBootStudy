// components / shared / Layout.jsx
// ** 전체 레이아웃 컴포넌트 ** 
// ** Header 와 Footer 를 import 받아 사용 **

import React from 'react'
import Header from "./Header"
import Footer from "./Footer"


const Layout = () => {

    return (
        <div>
            <Header></Header>

            <main></main>

            <Footer></Footer>
        </div>
    )
}

export default Layout
