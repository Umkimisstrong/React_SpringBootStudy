/*
    레시피 저장 화면
*/

import React, { useEffect } from 'react';
import styles from "../../components/cssModule/recipe/RecipeSave.module.css";
import axios from "axios";



    

const RecipeSave = () => {

    // 음식 양 관련된 배열
    var amt = [
                {
                     text : "1인분"
                     , value : "RCP_Amount_CD_01"
                }
                ,
                {
                    text : "2인분"
                    , value : "RCP_Amount_CD_02"
                }
                ,
                {
                    text : "3인분"
                    , value : "RCP_Amount_CD_03"
                }
              ];

    // 조리 시간 관련된 배열
    var time = [
                {
                     text : "5분"
                     , value : "RCP_Time_CD_01"
                }
                ,
                {
                    text : "10분"
                    , value : "RCP_Time_CD_02"
                }
                ,
                {
                    text : "15분"
                    , value : "RCP_Time_CD_03"
                }
              ];              

    // 난인도 관련된 배열              
    var difficulty = [
                {
                     text : "아무나"
                     , value : "RCP_Difficulty_CD_01"
                }
                ,
                {
                    text : "초급"
                    , value : "RCP_Difficulty_CD_02"
                }
                ,
                {
                    text : "중급"
                    , value : "RCP_Difficulty_CD_03"
                }
              ];                    
        
    
     /// 이름 : setTextValueData() 
     /// 설명 : DropDownList 값 세팅
     /// 비고 : 음식 전체 양, 조리 시간, 난이도
     function setTextValueData() 
     {

        
        //alert("2");
        getAmount();
        getTime();
        getDifficulty();
       
    }


     /// 이름 : getAmount()
     /// 설명 : 음식 전체 양 조회
     /// 비고 : 음식 전체 양에 관련된 코드 조회
     function getAmount()
     {
        var Code_Value_List = null;

         try{
             const response =  axios.get("http://localhost:8080/api/code/select_code_value_list", 
             {
                 headers: {
                     'Access-Control-Allow-Origin': 'http://localhost:3000',
                     'Access-Control-Allow-Methods': 'GET',
                     'Access-Control-Allow-Headers': 'Content-Type',
                 },
                 params:{
                         Parent_Code_ID  :   "RCP_Amount_CD"
                 }
             })
              .then(res => {
              
                var arrTextFiled = [];
                var arrValueFiled = [];
                for(var i=0; i<res.data.CodeValueList.length;i++)
                {
                    arrTextFiled.push(res.data.CodeValueList[i].Text_Filed);
                    arrValueFiled.push(res.data.CodeValueList[i].Value_Filed);
                }


                 
              
             })
              .catch(res => console.log(res));
         }
         catch(err)
         {
             alert("ERR" + err);
         }
        
         

     }

     /// 이름 : getTime()
     /// 설명 : 조리 시간 조회
     /// 비고 : 음식 조리 시간과 관련된 코드 조회
     function getTime()
     {
        var Code_Value_List = null;

         try{
             const response = axios.get("http://localhost:8080/api/code/select_code_value_list", 
             {
                 headers: {
                     'Access-Control-Allow-Origin': 'http://localhost:3000',
                     'Access-Control-Allow-Methods': 'GET',
                     'Access-Control-Allow-Headers': 'Content-Type',
                 },
                 params:{
                         Parent_Code_ID  :   "RCP_Time_CD"
                 }
             })
              .then(res => {
              
                const Time_list = res.data.CodeValueList;
                 
              
             })
              .catch(res => console.log(res));
         }
         catch(err)
         {
             alert("ERR" + err);
         }
        
         return Code_Value_List;

     }

     /// 이름 : getTime()
     /// 설명 : 조리 시간 조회
     /// 비고 : 음식 조리 시간과 관련된 코드 조회
     function getDifficulty()
     {
        var Code_Value_List = null;

         try{
             const response = axios.get("http://localhost:8080/api/code/select_code_value_list", 
             {
                 headers: {
                     'Access-Control-Allow-Origin': 'http://localhost:3000',
                     'Access-Control-Allow-Methods': 'GET',
                     'Access-Control-Allow-Headers': 'Content-Type',
                 },
                 params:{
                         Parent_Code_ID  :   "RCP_Difficulty_CD"
                 }
             })
              .then(res => {
              
                const Difficulty_list = res.data.CodeValueList;
                 
              
             })
              .catch(res => console.log(res));
         }
         catch(err)
         {
             alert("ERR" + err);
         }
        
         return Code_Value_List;

     }


     /// 이름 : click_Toggle(e, name)
     /// 설명 : 레시피 키워드 선택
     /// 비고 : 키워드 5개 중 한개 선택 시 글자색 초록색, 진하게 하고
     //         나머지는 검정, 연하게
     function click_Toggle (e, name)
     {
        e.preventDefault();
        
        // 1. 클릭 시 해당 아이템이 선택되어있는지 체크
        // 2. 선택되지 않았다면 진하게, 초록섹
        // 3. 나머지 요소들은 기본으로
         var target_element = document.getElementById(e.target.id);

         if(target_element.style.fontWeight != 'bold')
         {
             target_element.style.fontWeight = 'bold';
         }
         else if(target_element.style.fontWeight == 'bold')
         {
            target_element.style.fontWeight = '';
         }

        if(target_element.style.color != 'green')
        {
            target_element.style.color = 'green';
        }
        else if(target_element.style.color == 'green')
        {
            target_element.style.color = '';
        }


        var arrTds = document.getElementsByName(name);

        for(var i = 0; i<arrTds.length; i++)
        {
            if(arrTds[i].id != e.target.id)
            {
                arrTds[i].style.color = '';
                arrTds[i].style.fontWeight = '';
            }
        }
     }


     /// 이름 : add_Step_Toggle(e, name)
     /// 설명 : 단계 추가하기
     /// 비고 : 레시피 단계를 추가하는 버튼 클릭 시 같은 단계 입력폼 생성, 인덱스 증가
     //         지우기 버튼에 삭제 함수 등록
     function add_Step_Toggle(e, name)
     {
        e.preventDefault();

        // 추가 할 HTML 을 추출
        var strHTML = document.getElementById(name).children[0].outerHTML;

        // 기존 HTML 추출
        var allHTML = document.getElementById(name).innerHTML;

        // 기존 HTML 에 더해주고
        var allHTML = allHTML + strHTML;

        // 전체 HTML 에 덮어쓰기
        document.getElementById(name).innerHTML = allHTML;

        // 변해야할 Index 값들 정리
        // STEP 1 라벨
        // table id
        // 지우기(제거 함수) 바인딩
        for(var i=0; i<document.getElementById(name).children.length; i++)
        {
            document.getElementById(name).children[i].id = 'step_table_' + (i+1);
            //                        div       > table >    tbody   >     tr    >      th    >   div 
            document.getElementById("step_div").children[i].children[1].children[0].children[0].children[0].innerText = 'STEP ' + (i+1);
            document.getElementById("step_div").children[i].children[1].children[0].children[1].children[0].setAttribute
            (
                "onclick", 
                "function remove () { var tableHtmlObj = document.getElementsByName('step_table'); if(tableHtmlObj.length==1) return; else { var htmlObj = document.getElementById('step_table_"+(i+1)+"');  htmlObj.outerHTML='';  tableHtmlObj2 = document.getElementsByName('step_table'); for(var i=0; i<tableHtmlObj2.length;i++) { tableHtmlObj2[i].children[1].children[0].children[0].children[0].innerText = 'STEP ' + (i+1); }}}  remove();"
                // 지우기 함수에는 최초 STEP 갯수를 검증하고, 1개 초과인 경우만 삭제, 삭제하고 나면 다시 STEP 라벨 재바인딩
            );
        }


     }  

    
     function check_Data(e, saveFlag)
     {
        e.preventDefault();


        var key = check_Keyword();
        var drop = check_DropDown();
        var text = check_TextBox();
        var step = check_Step();

        if(!key || !drop || !text || !step)
            return false;

        

     }
 

     function check_Keyword()
     {
        var flag = false;

        // 종류별 키워드
        var arrDishType = document.getElementsByName("RCP_DishType_CD");
        for(var i = 0; i<arrDishType.length; i++)
        {
            if(arrDishType[i].style.fontWeight == 'bold' && arrDishType[i].style.color == 'green')
            {
                flag = true;
                break;
            }
        }

        if(!flag)
        {
            alert("종류별 키워드를 선택하세요");
            document.getElementById("RCP_DishType_CD_01").focus();
            return;
        }
        
        flag = false;

        // 상황별 키워드
        var arrSituation = document.getElementsByName("RCP_Situation_CD");
        for(var i = 0; i<arrSituation.length; i++)
        {
            if(arrSituation[i].style.fontWeight == 'bold' && arrSituation[i].style.color == 'green')
            {
                flag = true;
                break;
            }
        }
        if(!flag)
        {
            alert("상황별 키워드를 선택하세요");
            return;
        }
        
        flag = false;
        
        // 메인 재료별 키워드
        var arrMain = document.getElementsByName("RCP_Main_Ingredients_CD");
        for(var i = 0; i<arrMain.length; i++)
        {
            if(arrMain[i].style.fontWeight == 'bold' && arrMain[i].style.color == 'green')
            {
                flag = true;
                break;
            }
        }
        if(!flag)
        {
            alert("메인 재료별 키워드를 선택하세요");
            return;
        }
        
        flag = false;

        // 방법별 키워드
        var arrMethod = document.getElementsByName("RCP_Method_CD");
        for(var i = 0; i<arrMethod.length; i++)
        {
            if(arrMethod[i].style.fontWeight == 'bold' && arrMethod[i].style.color == 'green')
            {
                flag = true;
                break;
            }
        }

        if(!flag)
        {
            alert("방법별 키워드를 선택하세요");
            return;
        }
        
        flag = false;

        // 테마별 키워드
        var arrTheme = document.getElementsByName("RCP_Theme_CD");
        for(var i = 0; i<arrTheme.length; i++)
        {
            if(arrTheme[i].style.fontWeight == 'bold' && arrTheme[i].style.color == 'green')
            {
                flag = true;
                break;
            }
        }

        if(!flag)
        {
            alert("테마별 키워드를 선택하세요");
            return;
        }
        

        return flag;
     }

     function check_DropDown()
     {
        return true;
     }

     function check_TextBox()
     {

        return true;
     }

     function check_Step()
     {

        return true;
     }



    return (

        
        <div>
            {/* 검색 영역 */}
            {/* <div className={styles.recipe_save_search}>
                <div className={styles.recipe_save_search_box_div}>
                    <input className={styles.recipe_save_search_div_input} ></input>
                    <div className={styles.recipe_save_search_button_div}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 26">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    
                </div>

                <div className={styles.recipe_save_new_recipe_div}>
                    <input value="새로만들기" type='button' className={styles.recipe_save_new_recipe_btn} onClick={(e) => onclickHref("recipe/saverecipe", e)}></input>
                </div>

                
            </div> */}

            {/* 키워드 영역 */}
            <div >
                <div  className={styles.recipe_save_keyword_wrap}>
                    <div className={styles.recipe_save_label_wrap}>
                        1. 레시피 키워드 정하기
                    </div>
                    <div className={styles.recipe_save_contents}>
                    <table className={styles.recipe_save_tbl}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className={styles.recipe_save_tbl_th}>종류별 </th>

                                <td><span name="RCP_DishType_CD" id="RCP_DishType_CD_01" onClick={ (e) => click_Toggle(e, "RCP_DishType_CD")}>밑반찬</span></td>
                                <td><span name="RCP_DishType_CD" id="RCP_DishType_CD_02" onClick={ (e) => click_Toggle(e, "RCP_DishType_CD")}>메인반찬</span></td>
                                <td><span name="RCP_DishType_CD" id="RCP_DishType_CD_03" onClick={ (e) => click_Toggle(e, "RCP_DishType_CD")}>국/탕</span></td>
                                <td><span name="RCP_DishType_CD" id="RCP_DishType_CD_04" onClick={ (e) => click_Toggle(e, "RCP_DishType_CD")}>디저트</span></td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>상황별 </th>

                                <td><span name="RCP_Situation_CD" id="RCP_Situation_CD_01" onClick={ (e) => click_Toggle(e, "RCP_Situation_CD")}>일상</span></td>
                                <td><span name="RCP_Situation_CD" id="RCP_Situation_CD_02" onClick={ (e) => click_Toggle(e, "RCP_Situation_CD")}>초스피드</span></td>
                                <td><span name="RCP_Situation_CD" id="RCP_Situation_CD_03" onClick={ (e) => click_Toggle(e, "RCP_Situation_CD")}>손님접대</span></td>
                                <td><span name="RCP_Situation_CD" id="RCP_Situation_CD_04" onClick={ (e) => click_Toggle(e, "RCP_Situation_CD")}>술안주</span></td>

                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>메인 재료별 </th>


                                <td><span name="RCP_Main_Ingredients_CD" id="RCP_Main_Ingredients_CD_01" onClick={ (e) => click_Toggle(e, "RCP_Main_Ingredients_CD")}>소고기</span></td>
                                <td><span name="RCP_Main_Ingredients_CD" id="RCP_Main_Ingredients_CD_02" onClick={ (e) => click_Toggle(e, "RCP_Main_Ingredients_CD")}>돼지고기</span></td>
                                <td><span name="RCP_Main_Ingredients_CD" id="RCP_Main_Ingredients_CD_03" onClick={ (e) => click_Toggle(e, "RCP_Main_Ingredients_CD")}>닭고기</span></td>
                                <td><span name="RCP_Main_Ingredients_CD" id="RCP_Main_Ingredients_CD_04" onClick={ (e) => click_Toggle(e, "RCP_Main_Ingredients_CD")}>육류</span></td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>방법별 </th>


                                <td><span name="RCP_Method_CD" id="RCP_Method_CD_01" onClick={ (e) => click_Toggle(e, "RCP_Method_CD")}>볶음</span></td>
                                <td><span name="RCP_Method_CD" id="RCP_Method_CD_02" onClick={ (e) => click_Toggle(e, "RCP_Method_CD")}>끓이기</span></td>
                                <td><span name="RCP_Method_CD" id="RCP_Method_CD_03" onClick={ (e) => click_Toggle(e, "RCP_Method_CD")}>부침</span></td>
                                <td><span name="RCP_Method_CD" id="RCP_Method_CD_04" onClick={ (e) => click_Toggle(e, "RCP_Method_CD")}>조림</span></td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>테마별 </th>

                                <td><span name="RCP_Theme_CD" id="RCP_Theme_CD_01" onClick={ (e) => click_Toggle(e, "RCP_Theme_CD")}>여성/뷰티</span></td>
                                <td><span name="RCP_Theme_CD" id="RCP_Theme_CD_02" onClick={ (e) => click_Toggle(e, "RCP_Theme_CD")}>엄마/아기</span></td>
                                <td><span name="RCP_Theme_CD" id="RCP_Theme_CD_03" onClick={ (e) => click_Toggle(e, "RCP_Theme_CD")}>건강/질병</span></td>
                                <td><span name="RCP_Theme_CD" id="RCP_Theme_CD_04" onClick={ (e) => click_Toggle(e, "RCP_Theme_CD")}>기타</span></td>
                            </tr>


                        </tbody>
                    </table>
                    </div> 
                </div>  
            </div>

            {/* 정보 영역 */}
            <div>
                <div  className={styles.recipe_save_info_wrap}>
                <div className={styles.recipe_save_label_wrap}>
                    2. 레시피 정보 선택하기
                </div>
                    <div className={styles.recipe_save_contents}>
                    <table className={styles.recipe_save_tbl}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className={styles.recipe_save_tbl_th}>음식 전체 양 </th>
                                <td>
                                     <select name="amt" id="amt" className={styles.recipe_save_select}>
                                        {amt.map((item) => (
                                            <option key={item.value} value={item.value}>{item.text}</option>
                                            ))}
                                             
                                     </select> 
                                </td>

                                <td className={styles.recipe_save_tbl_blank_td}></td>
                                
                                
                                <th className={styles.recipe_save_tbl_th_2}> 재료 </th>
                                <td> <input type="text"  className={styles.recipe_save_input_ingredient_and_equip}/> </td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>조리 시간 </th>
                                <td>
                                    <select name="time" id="time" className={styles.recipe_save_select}>
                                    {time.map((item) => (
                                            <option key={item.value} value={item.value}>{item.text}</option>
                                            ))}
                                     </select> 
                                </td>

                                <td className={styles.recipe_save_tbl_blank_td}></td>

                                <th className={styles.recipe_save_tbl_th_2}>도구 </th>
                                <td> <input type="text" className={styles.recipe_save_input_ingredient_and_equip} /> </td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>난이도 </th>
                                <td colSpan="4"> 
                                    <select name="difficulty" id="difficulty" className={styles.recipe_save_select}>
                                    {difficulty.map((item) => (
                                            <option key={item.value} value={item.value}>{item.text}</option>
                                            ))}
                                     </select> 
                                </td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>레시피 제목 </th>
                                <td colSpan="4"> <input type="text" className={styles.recipe_save_input_title_and_description}/> </td>
                                
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>레시피 설명 </th>
                                <td colSpan="4"> <input type="text" className={styles.recipe_save_input_title_and_description} /> </td>
                            </tr>


                        </tbody>
                    </table>
                    </div> 
                </div>  
            </div>  

            {/* 정보 영역 */}
            <div>
                <div  className={styles.recipe_save_sumnail_wrap}>
                <div className={styles.recipe_save_label_wrap}>
                    3. 레시피 사진 등록하기
                </div>
                    <div className={styles.recipe_save_contents}>
                    <table className={styles.recipe_save_recipe_tbl}>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.recipe_save_recipe_sumnail_main}>
                                    <div className={styles.recipe_save_recipe_sumnail_photo_description}>
                                    +
                                    <br>
                                    </br>
                                    썸네일용
                                    </div>
                                </div>
                            </td>

                            <td className={styles.recipe_save_tbl_blank_td}>
                            </td>

                            <td>
                                <div className={styles.recipe_save_recipe_sumnail}>
                                        <div className={styles.recipe_save_recipe_sumnail_photo_description}>
                                            +
                                            <br>
                                            </br>
                                            대표사진1
                                        </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.recipe_save_recipe_sumnail}>
                                        <div className={styles.recipe_save_recipe_sumnail_photo_description}>
                                            +
                                            <br>
                                            </br>
                                            대표사진2
                                        </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.recipe_save_recipe_sumnail}>
                                        <div className={styles.recipe_save_recipe_sumnail_photo_description}>
                                            +
                                            <br>
                                            </br>
                                            대표사진3
                                        </div>
                                </div>
                                
                            </td>
                            <td>
                                <div className={styles.recipe_save_recipe_sumnail}>
                                        <div className={styles.recipe_save_recipe_sumnail_photo_description}>
                                            +
                                            <br>
                                            </br>
                                            대표사진4
                                        </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                    </div> 
                </div>  
            </div>  

            {/* 단계 영역 */}
            <div>
                <div  className={styles.recipe_save_step_wrap} >
                    <div className={styles.recipe_save_label_wrap}>
                        4. 레시피 단계 등록하기
                    </div>

                    <div id="step_list">

                        <div className={styles.recipe_save_contents}>
                            <div className={styles.recipe_save_contents_plus_step}>
                                <input type="button" value="단계 추가" className={styles.recipe_save_step_plus_btn} onClick={(e) => add_Step_Toggle(e, "step_div")}/>
                            </div>

                            <div id="step_div">
                                <table name="step_table" id="step_table_1">
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div className={styles.recipe_save_step_div}> 
                                                STEP 1
                                                </div>
                                            </th>
                                            <td>
                                                <input type="button" value="지우기" className={styles.recipe_save_step_delete_btn} />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><input type="text" placeholder='재료명' className={styles.recipe_save_step_ingd_input}/></td>
                                            <td><input type="text" placeholder='수량' className={styles.recipe_save_step_ingd_amt_input}/></td>
                                            <td><input type="text" placeholder='단위' className={styles.recipe_save_step_ingd_ea_input}/></td>

                                            <td>                                       
                                            </td>

                                            <td><input type="text" placeholder='도구명' className={styles.recipe_save_step_equip_input}/></td>
                                            <td><input type="text" placeholder='단위' className={styles.recipe_save_step_equip_amt_input}/></td>
                                            <td>
                                                <input type="button" value="+" className={styles.recipe_save_step_ingd_plus_btn}/>
                                            </td>

                                            <td>                                       
                                            </td>

                                            <td rowSpan="2">
                                                <div className={styles.recipe_save_step_sumnail_div}>
                                                    <div>
                                                        +
                                                        <br></br>
                                                        단계를 설명하는 사진
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" placeholder='단계 제목' className={styles.recipe_save_step_title_input}/></td>
                                            <td colSpan="4"><input type="text" placeholder='팁' className={styles.recipe_save_step_tip_input}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div> 
                       

                    </div>
                    


                </div>  
            </div>

            {/* 버튼 영역 */}
            <div className={styles.recipe_save_btn_wrap}>
                <div>
                    <input type="button"  value="공개" className={styles.recipe_save_open_btn} onClick={(e) => check_Data(e, 'open')}/>
                    <input type="button"  value="저장"  className={styles.recipe_save_btn} onClick={(e) => check_Data(e, 'save')}/>
                </div>
            </div>

        </div>
    )
}

export default RecipeSave