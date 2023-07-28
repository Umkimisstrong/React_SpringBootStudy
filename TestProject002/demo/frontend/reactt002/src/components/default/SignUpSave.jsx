/*
    회원가입 화면
*/

import React from 'react';
import styles from "../../components/cssModule/default/Signup.module.css"




const SinUpSave = () => {

    return (
        <div className={styles.signup_wrap}>
              <div className={styles.signup_contents}>

                    <div className={styles.signup_contents_tbl}>
                        <table className={styles.signup_contents_tbl_all}>
                                <thead className={styles.signup_contents_tbl_thead}>
                                    <tr>
                                        <th colSpan="2">
                                            Welcome!
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={styles.signup_contents_tbl_tbody}>
                                    <tr>
                                        <th className={styles.signup_contents_tbl_th}> 
                                            <div className={styles.signup_contents_tbl_th_div}>
                                                ID 
                                            </div>
                                        </th>
                                        <td className={styles.signup_contents_tbl_td}> 
                                            <div className={styles.signup_contents_tbl_td_div}>
                                                <input type='text' placeholder='ID를 입력하세요' className={styles.signup_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.signup_contents_tbl_th}> 
                                            <div className={styles.signup_contents_tbl_th_div}>
                                                PW
                                            </div>
                                        </th>
                                        <td className={styles.signup_contents_tbl_td}> 
                                            <div className={styles.signup_contents_tbl_td_div}>
                                                <input type='password' placeholder='PW를 입력하세요' className={styles.signup_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.signup_contents_tbl_th}> 
                                            <div className={styles.signup_contents_tbl_th_div}>
                                                PW 확인 
                                            </div>
                                        </th>
                                        <td className={styles.signup_contents_tbl_td}> 
                                            <div className={styles.signup_contents_tbl_td_div}>
                                                <input type='text' placeholder='PW 확인을 입력하세요' className={styles.signup_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.signup_contents_tbl_th}> 
                                            <div className={styles.signup_contents_tbl_th_div}>
                                                E-mail 
                                            </div>
                                        </th>
                                        <td className={styles.signup_contents_tbl_td}> 
                                            <div className={styles.signup_contents_tbl_td_div}>
                                                <input type='text' placeholder='E-mail을 입력하세요' className={styles.signup_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.signup_contents_tbl_th}> 
                                            <div className={styles.signup_contents_tbl_th_div}>
                                                닉네임 
                                            </div>
                                        </th>
                                        <td className={styles.signup_contents_tbl_td}> 
                                            <div className={styles.signup_contents_tbl_td_div}>
                                                <input type='text' placeholder='닉네임을 입력하세요' className={styles.signup_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.signup_contents_tbl_th}> 
                                            <div className={styles.signup_contents_tbl_th_div}>
                                                이름 
                                            </div>
                                        </th>
                                        <td className={styles.signup_contents_tbl_td}> 
                                            <div className={styles.signup_contents_tbl_td_div}>
                                                <input type='text' placeholder='이름을 입력하세요' className={styles.signup_contents_tbl_td_div_input}></input> 
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div> {/*   end region : signup_contents_tbl */}

                    <div className={styles.signup_contents_btn_area}>
                        <input type='button' className={styles.signup_contents_save_btn} value='회원가입'></input>
                   </div>
                </div> {/*   end region : signup_contents */}
           </div>  // end region : signup_wrap
    )
}

export default SinUpSave