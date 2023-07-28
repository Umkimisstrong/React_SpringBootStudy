/*
    비밀번호 찾기 화면
*/

import React from 'react';
import styles from '../cssModule/default/Findpw.module.css'



const FindPW = () => {
    
    /// 이름 : onclickHref(주소, 이벤트객체) 
    /// 설명 : 넘겨받은 주소로 이동시키는 함수
    /// 비고 : 아이디찾기, 비밀번호찾기, 회원가입 페이지로 이동한다.
    function onclickHref (url, e) 
    {
        e.preventDefault();
        window.location.href="http://localhost:3000/default/"+url;
    }

    return (
        <div className={styles.findpw_wrap}>
        <div className={styles.findpw_contents}>

              <div className={styles.findpw_contents_tbl}>
                  <table className={styles.findpw_contents_tbl_all}>
                          <thead className={styles.findpw_contents_tbl_thead}>
                              <tr>
                                  <th colSpan="2">
                                      PW 찾기
                                  </th>
                              </tr>
                          </thead>
                          <tbody className={styles.findpw_contents_tbl_tbody}>
                              <tr>
                                  <th className={styles.findpw_contents_tbl_th}> 
                                      <div className={styles.findpw_contents_tbl_th_div}>
                                          ID 
                                      </div>
                                  </th>
                                  <td className={styles.findpw_contents_tbl_td}> 
                                      <div className={styles.findpw_contents_tbl_td_div}>
                                          <input type='text' placeholder='ID를 입력하세요' className={styles.findpw_contents_tbl_td_div_input}></input> 
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <th className={styles.findpw_contents_tbl_th}> 
                                      <div className={styles.findpw_contents_tbl_th_div}>
                                          Email 
                                      </div>
                                  </th>
                                  <td className={styles.findpw_contents_tbl_td}> 
                                      <div className={styles.findpw_contents_tbl_td_div}>
                                          <input type='text' placeholder='Email을 입력하세요' className={styles.findpw_contents_tbl_td_div_input}></input> 
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
              </div> {/*   end region : findpw_contents_tbl */}

              <div className={styles.findpw_contents_btn_area}>
                  <input type='button' className={styles.findpw_contents_btn} value='PW 찾기'></input>
                  <div className={styles.findpw_contents_btn_find}>
                      <div className={styles.findpw_contents_btn_find_div_left}>
                          <input type='button' className={styles.findpw_contents_btn_find_div_left_btn} value='ID 찾기' onClick={(e) => onclickHref('findid', e)}></input>
                      </div>
                      <div className={styles.findpw_contents_btn_find_div_right}>
                          <input type='button' className={styles.findpw_contents_btn_find_div_right_btn} value='PW 찾기' onClick={(e) => onclickHref('findpw', e)}></input>
                      </div>
                  </div>
                  <hr className={styles.findpw_contents_hr}></hr>
              </div>

              <div className={styles.findpw_contents_btn_find_div_signup}>
                  계정이 없으신가요? 
              <input type='button' className={styles.findpw_contents_btn_find_div_signup_btn} value='회원가입' onClick={(e) => onclickHref('signup', e)}></input>
              </div>
              
          </div> {/*   end region : findpw_contents */}
     </div>  // end region : findpw_wrap
    )
}

export default FindPW