/*
    회원가입 화면
*/

import React from 'react';
import styles from "../../components/cssModule/default/Signup.module.css";
import axios from "axios";
import { Await } from 'react-router-dom';



const SinUpSave = () => {

    

    /// 이름 : SignUp()
    /// 설명 : 회원가입
    /// 비고 : 유효성검사, 회원가입을 진행한다.
    function SignUp (e) 
    {
        e.preventDefault();
        ValidateResources()
    }

    /// 이름 : ValidateResources()
    /// 설명 : 유효성 검사
    /// 비고 : 회원가입에필요한 정보들의 입력 여부를 검사한다.
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

        var pw_check = document.getElementById("account_pw_check");
        pw_check = pw_check.value.trim();
        if(pw_check === null || pw_check === "")
        {
            alert("pw 확인을 입력하세요.");
            return false;
        }

        if(pw !== pw_check)
        {
            alert("pw 와 pw 확인이 일치해야 합니다.");
            return false;
        }

        var email = document.getElementById("account_email");
        email = email.value.trim();
        if(email === null || email === "")
        {
            alert("email 을 입력하세요.");
            return false;
        }

        var nick = document.getElementById("account_nick");
        nick = nick.value.trim();
        if(nick === null || nick === "")
        {
            alert("닉네임을 입력하세요.");
            return false;
        }

        var name = document.getElementById("account_name");
        name = name.value.trim();
        if(name === null || name === "")
        {
            alert("이름을 입력하세요.");
            return false;
        }

        AccountDuplicateCheck(id, email, pw, nick, name);
     

    }

    /// 이름 : AccountDuplicateCheck()
    /// 설명 : 회원가입 중복검사 = id, email
    /// 비고 : id 와 email 을 대상으로 회원가입 중복검사 진행한다.
    async function AccountDuplicateCheck(id, email, pw, nick, name)
    {
        try{
            const response = await axios.get("http://localhost:8080/api/account/select_account_duplicate", 
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                params:{
                        Account_ID  :   id
                    ,   ACT_Email   :   email
                }
            })
             .then(res => {
                
                var ACT_FLAG_MSG = "";
                ACT_FLAG_MSG = res.data.AccountEntity.ACT_FLAG;
                
                if(ACT_FLAG_MSG === "ACT_ID")
                {
                    alert("중복된 ID 입니다.");
                    
                    return false;
                }
                else if(ACT_FLAG_MSG === "ACT_EMAIL")
                {
                    alert("중복된 Email 입니다.");
                    return false;
                }
                else if(ACT_FLAG_MSG === "OK")
                {
                    SaveAccount(id, email, pw, nick, name)
                    return true;
                }

             })
             .catch(res => console.log(res));
        }
        catch(err)
        {
            alert("ERR" + err);
        }
        

    }

    /// 이름 : SaveAccount()
    /// 설명 : 회원가입 진행 = id, email, pw, nick, name
    /// 비고 : 유효성검사 통과한 이후 정보를 저장한다.
    async function SaveAccount(id, email, pw, nick, name)
    {
        try{
            const response = await axios.get("http://localhost:8080/api/account/create_account_entity", 
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                params:{
                        Account_ID          : id
                    ,   ACT_Email           : email
                    ,   ACT_Password        : pw
                    ,   ACT_Name            : name
                    ,   ACT_NickName        : nick
                    ,   ACT_Activate_YN     : "Y"
                    ,   Delete_YN           : "N"
                    ,   Use_YN              : "Y"
                }
            })
             .then(res => {
                
                var saveFlag = res.data.ISRESULT;
                if(saveFlag)
                {
                    alert("회원가입이 완료되었습니다. 로그인 후 이용 부탁드립니다.");
                }
                else
                {
                    alert("회원가입 실패");
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
                                                <input type='text' placeholder='ID를 입력하세요' className={styles.signup_contents_tbl_td_div_input} id='account_id' maxLength="50"></input> 
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
                                                <input type='password' placeholder='PW를 입력하세요' className={styles.signup_contents_tbl_td_div_input}  id='account_pw' maxLength="50"></input> 
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
                                                <input type='password' placeholder='PW 확인을 입력하세요' className={styles.signup_contents_tbl_td_div_input}  id='account_pw_check' maxLength="50"></input> 
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
                                                <input type='text' placeholder='E-mail을 입력하세요' className={styles.signup_contents_tbl_td_div_input}  id='account_email' maxLength="50"></input> 
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
                                                <input type='text' placeholder='닉네임을 입력하세요' className={styles.signup_contents_tbl_td_div_input}  id='account_nick' maxLength="50"></input> 
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
                                                <input type='text' placeholder='이름을 입력하세요' className={styles.signup_contents_tbl_td_div_input}  id='account_name' maxLength="50"></input> 
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div> {/*   end region : signup_contents_tbl */}

                    <div className={styles.signup_contents_btn_area}>
                        <input type='button' className={styles.signup_contents_save_btn} value='회원가입' onClick={(e) => SignUp(e)}></input>
                   </div>
                </div> {/*   end region : signup_contents */}
           </div>  // end region : signup_wrap
    )
}

export default SinUpSave