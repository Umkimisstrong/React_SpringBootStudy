/*
    회원가입 화면
*/

import React from 'react';
import styles from "../../components/cssModule/default/Signup.module.css"




const SinUp = () => {

    /// 이름 : onclickSignUp(확인여부, 이벤트객체) 
    /// 설명 : 개인정보 수집, 이용 동의 후 회원정보 입력 페이지로 이동한다.
    /// 비고 : isOkay 가 true 인 경우에만 실행한다.
    function onclickSignUp (isOkay, e) 
    {
        e.preventDefault();
        if(isOkay)
        {
            window.location.href="http://localhost:3000/default/signupsave";
        }
    }

    return (
        <div className={styles.signup_wrap}>
            <div className={styles.signup_contents}>

              {/* 개인정보 동의 영역 */}
              <div className={styles.signup_contents_tbl}>
                  <table className={styles.signup_contents_tbl_all}>
                          <thead className={styles.signup_contents_tbl_thead}>
                              <tr>
                                  <th colSpan="1">
                                      회원가입
                                  </th>
                              </tr>
                          </thead>
                          <tbody className={styles.signup_contents_tbl_tbody}>
                              <tr>
                                  <th className={styles.signup_contents_tbl_th_left_header}> 
                                      개인정보 수집, 이용 동의
                                  </th>
                              </tr>
                              <tr>
                                  <th className={styles.signup_contents_tbl_th_left_contents}> 
                                      <p>요리왕 정상원에서 필요한 개인정보 수집과 이용에 관한 내용
                                      요리왕 정상원에서 필요한 개인정보 수집과 이용에 관한 내용
                                      </p>

                                  </th>
                              </tr>
                              <tr>
                                  <th className={styles.signup_contents_tbl_th_left_header}> 
                                      기타 내용 동의
                                  </th>
                              </tr>
                              <tr>
                                  <th className={styles.signup_contents_tbl_th_left_contents}> 
                                  <p>요리왕 정상원에서 필요한 개인정보 수집과 이용에 관한 내용
                                      요리왕 정상원에서 필요한 개인정보 수집과 이용에 관한 내용
                                      요리왕 정상원에서 필요한 개인정보 수집과 이용에 관한 내용
                                      요리왕 정상원에서 필요한 개인정보 수집과 이용에 관한 내용
                                      </p>

                                    
                                  </th>
                              </tr>
                          </tbody>
                      </table>
              </div> {/*   end region : signup_contents_tbl */}

              <div className={styles.signup_contents_btn_area}>
                        <input type='button' className={styles.signup_contents_btn} value='개인정보 수집 및 이용에 동의 확인' onClick={(e) => onclickSignUp(true, e)}></input>
              </div>
            </div> 
            
            {/* 개인정보 동의 영역 */}
              
          
     </div>  // end region : signup_wrap
    )
}

export default SinUp