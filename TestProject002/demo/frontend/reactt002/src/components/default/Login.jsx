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
                        <table className={styles.login_contents_tbl_all}>
                                <thead className={styles.login_contents_tbl_thead}>
                                    <tr>
                                        <th colSpan="2">
                                            Welcome!
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={styles.login_contents_tbl_tbody}>
                                    <tr>
                                        <th className={styles.login_contents_tbl_th}> 
                                            <div className={styles.login_contents_tbl_th_div}>
                                                ID 
                                            </div>
                                        </th>
                                        <td className={styles.login_contents_tbl_td}> 
                                            <div className={styles.login_contents_tbl_td_div}>
                                                <input type='text' placeholder='ID를 입력하세요' className={styles.login_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.login_contents_tbl_th}> 
                                            <div className={styles.login_contents_tbl_th_div}>
                                                PW
                                            </div>
                                        </th>
                                        <td className={styles.login_contents_tbl_td}> 
                                            <div className={styles.login_contents_tbl_td_div}>
                                                <input type='password' placeholder='PW를 입력하세요' className={styles.login_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div> {/*   end region : login_contents_tbl */}

                    <div className={styles.login_contents_btn_area}>
                        <input type='button' className={styles.login_contents_btn} value='로그인'></input>
                        <div className={styles.login_contents_btn_find}>
                            <div className={styles.login_contents_btn_find_div_left}>
                            <input type='button' className={styles.login_contents_btn_find_div_left_btn} value='ID 찾기'></input>
                            </div>
                            <div className={styles.login_contents_btn_find_div_right}>
                            <input type='button' className={styles.login_contents_btn_find_div_right_btn} value='PW 찾기'></input>
                            </div>
                        </div>
                        <hr className={styles.login_contents_hr}></hr>
                    </div>

                    <div className={styles.login_contents_btn_find_div_signup}>
                        계정이 없으신가요? 
                    <input type='button' className={styles.login_contents_btn_find_div_signup_btn} value='회원가입'></input>
                    </div>
                    
                </div> {/*   end region : login_contents */}
           </div>  // end region : login_wrap
           
    )
}

export default Login