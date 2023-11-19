/*
    로그인 화면
*/

import React from 'react';
import styles from "../../components/cssModule/default/Login.module.css"
import axios from 'axios'


const Login = () => {

    /// 이름 : onclickHref(주소, 이벤트객체) 
    /// 설명 : 넘겨받은 주소로 이동시키는 함수
    /// 비고 : 아이디찾기, 비밀번호찾기, 회원가입 페이지로 이동한다.
    function onclickHref (url, e) 
    {
        e.preventDefault();
        window.location.href="http://localhost:3000/default/"+url;
    }


    /// 이름 : Login(이벤트객체)
    /// 설명 : 로그인 진행
    /// 비고 : 유효성 검사 이후 로그인을 진행한다.
    function Login(e)
    {
        e.preventDefault();

        
        ValidateResources();

    }

    /// 이름 : ValidateResources()
    /// 설명 : 유효성 검사
    function ValidateResources()
    {
        var id = document.getElementById("account_id");
        id = id.value.trim();
        if(id === null || id === "")
        {
            alert("id 를 입력하세요.");
            return false;
        }

        var pw = document.getElementById("account_pw");
        pw = pw.value.trim();
        if(pw === null || pw === "")
        {
            alert("pw 를 입력하세요.");
            return false;
        }

        AccountLogin(id, pw);
    }

    /// 이름 : AccountLogin()
    /// 설명 : 로그인 진행
    async function AccountLogin(id, pw)
    {
        try{
            const response = await axios.get("http://localhost:8080/api/account/select_account_login", 
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                params:{
                        Account_ID      :   id
                    ,   ACT_Password    :   pw
                }
            })
             .then(res => {
                
                var ACT_FLAG_MSG = "";
                ACT_FLAG_MSG = res.data.AccountEntity.ACT_FLAG;
                
                if(ACT_FLAG_MSG === "OK")
                {
                    //alert("로그인 성공");
                    sessionStorage.setItem("USER", res.data.AccountEntity);
                    sessionStorage.setItem("ISLOGIN", "OK");

                    window.location.href = "http://localhost:3000/default/index"; // 최초 리스트 페이지로 이동시킨다.
                    return false;
                }
                else if(ACT_FLAG_MSG === "ACT_ID_PW")
                {
                    alert("ID 혹은 비밀번호가 틀렸습니다.");
                    return false;
                }


             })
             .catch(res => console.log(res));
        }
        catch(err)
        {
            alert("ERR" + err);
        }
        

    }

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
                                                <input type='text' placeholder='ID를 입력하세요' className={styles.login_contents_tbl_td_div_input} id="account_id"></input> 
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
                                                <input type='password' placeholder='PW를 입력하세요' className={styles.login_contents_tbl_td_div_input} id="account_pw"></input> 
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div> {/*   end region : login_contents_tbl */}

                    <div className={styles.login_contents_btn_area}>
                        <input type='button' className={styles.login_contents_btn} value='로그인' onClick={(e) => Login(e)}></input>
                        <div className={styles.login_contents_btn_find}>
                            <div className={styles.login_contents_btn_find_div_left}>
                                <input type='button' className={styles.login_contents_btn_find_div_left_btn} value='ID 찾기' onClick={(e) => onclickHref('findid', e)}></input>
                            </div>
                            <div className={styles.login_contents_btn_find_div_right}>
                                <input type='button' className={styles.login_contents_btn_find_div_right_btn} value='PW 찾기' onClick={(e) => onclickHref('findpw', e)}></input>
                            </div>
                        </div>
                        <hr className={styles.login_contents_hr}></hr>
                    </div>

                    <div className={styles.login_contents_btn_find_div_signup}>
                        계정이 없으신가요? 
                    <input type='button' className={styles.login_contents_btn_find_div_signup_btn} value='회원가입' onClick={(e) => onclickHref('signup', e)}></input>
                    </div>
                    
                </div> {/*   end region : login_contents */}
           </div>  // end region : login_wrap
           
    )
}

export default Login