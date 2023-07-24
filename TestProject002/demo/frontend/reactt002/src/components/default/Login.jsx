/*
    로그인 화면
*/

import React from 'react';
import styles from "../../components/cssModule/default/Login.module.css"



const Login = () => {

    return (
           <div className={styles.login_wrap}>
              <div className={styles.login_contents}>

                    <div className={styles.login_contents_tbl}>
                        <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2">
                                            Welcome!
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th> ID </th>
                                        <td> ID를 입력하세요</td>
                                    </tr>
                                    <tr>
                                        <th>PW</th>
                                        <th> PW를 입력하세요</th>
                                    </tr>
                                </tbody>
                            </table>
                    </div> {/*   end region : login_contents_tbl */}

                    <div className={styles.login_contents_btn_area}>
                        로그인
                        <div>
                            ID 찾기
                            PW 찾기
                        </div>
                        <hr className={styles.login_contents_hr}></hr>
                    </div>

                    <div>
                        계정이 없으신가요? 회원가입
                    </div>
                    
                </div> {/*   end region : login_contents */}
           </div>  // end region : login_wrap
           
    )
}

export default Login