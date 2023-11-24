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

    /// 이름 : Recipe 저장 비동기 함수
    /// 설명 : 레시피 정보 전달 하여 ID 반환
    /// 비고 : 각종 파라미터 전달
    async function saveRecipe(
                          rcp_title, rcp_contents, rcp_amount_cd, rcp_time_cd, rcp_difficulty_cd
                        , rcp_dishtype_cd, rcp_situation_cd, rcp_main_ingredients_cd, rcp_method_cd
                        , rcp_theme_cd, open_yn
                        )
     {
        var RCP_ID = '';
        try{
            const response =  await axios.get("http://localhost:8080/api/rcp/create_recipe_entity", 
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                params:{
                      RCP_Title                   : rcp_title
                    , RCP_Contents                : rcp_contents
                    , RCP_Amount_CD               : rcp_amount_cd
                    , RCP_Time_CD	              : rcp_time_cd
                    , RCP_Difficulty_CD           : rcp_difficulty_cd
                    , RCP_DishType_CD             : rcp_dishtype_cd
                    , RCP_Situation_CD            : rcp_situation_cd
                    , RCP_Main_Ingredients_CD     : rcp_main_ingredients_cd
                    , RCP_Method_CD               : rcp_method_cd
                    , RCP_Theme_CD                : rcp_theme_cd
                    , Open_YN                     : open_yn
                }
            })
             .then(res => {
             
                //console.log(res.data.RecipeEntity);
                RCP_ID = res.data.RecipeEntity.RCP_ID;


                if(RCP_ID != '')
                {
                
                    
                    
                    // 레시피의 재료
                    var info_ingredient = document.getElementById("info_ingredient").value;
                    var ingd_result = saveIngredient
                    (
                        '0'
                        , 'RCP_Ingredient'
                        , 'RCP_Ingredient'
                        , RCP_ID
                        , info_ingredient
                        , 'RCP_Ingredient_NM'
                        , 'RCP_Ingredient_Amount'
                    )
                    
                    // 레시피의 도구
                    var info_equipment = document.getElementById("info_equipment").value;
                    var equip_result = saveEquipment
                    (
                        '0'
                        , 'RCP_Equipment'
                        , 'RCP_Equipment'
                        , RCP_ID
                        , info_equipment
                        , 'RCP_Equipment_Amount'
                    )
                    

                    // 레시피의 단계
                    var StepTableList = document.getElementById("step_div").children;
                    var IsResult_SaveStep = false;
                    for(var i = 0; i<StepTableList.length; i++)
                    {
                        IsResult_SaveStep = saveStep(
                            '0'
                            , 'RCP_STEP'
                            , 'RCP_STEP'
                            , RCP_ID
                            , StepTableList[i].children[1].children[2].children[0].querySelector("input").value
                            , StepTableList[i].children[1].children[2].children[1].querySelector("input").value
                            , i
                            , StepTableList[i].children[1].children[1].children[0].querySelector("input").value
                            , StepTableList[i].children[1].children[1].children[1].querySelector("input").value
                            , StepTableList[i].children[1].children[1].children[2].querySelector("input").value
                            , StepTableList[i].children[1].children[1].children[4].querySelector("input").value
                            , StepTableList[i].children[1].children[1].children[5].querySelector("input").value
                            , RCP_ID
    
                        );
                    }

                    if(IsResult_SaveStep)
                    {
                        alert("레시피 저장 성공");
                    }
                    else
                    {
                        alert("레시피 저장 실패");
                    }
                    
                }
            })
             .catch(res => console.log(res));
        }
        catch(err)
        {
            alert("ERR" + err);
        }
        finally
        {
            return RCP_ID;
        }

     }

    /// 이름 : 재료 저장 비동기 함수
    /// 설명 : 레시피 정보 중 재료 정보 전달 하여 true / false 반환
    /// 비고 : 각종 파라미터 전달
    async function saveIngredient(
                          ingd_parent_id, ingd_category, ingd_category_div
                        , ingd_category_id, ingd_title, ingd_nm, ingd_amount
                        )
     {
        var IsResult = false;
        try{
            const response =  await axios.get("http://localhost:8080/api/rcp/create_ingredient_entity", 
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                params:{
                      INGD_Parent_ID      : ingd_parent_id
                    , INGD_Category       : ingd_category
                    , INGD_Category_DIV   : ingd_category_div
                    , INGD_Category_ID    : ingd_category_id
                    , INGD_Title          : ingd_title
                    , INGD_NM	          : ingd_nm
                    , INGD_Amount         : ingd_amount
                }
            })
             .then(res => {
             
                //console.log(res.data.RecipeEntity);
                IsResult = res.data.ISRESULT;
            })
             .catch(res => console.log(res));
        }
        catch(err)
        {
            alert("ERR" + err);
        }
        finally
        {
            return IsResult;
        }

     }

    /// 이름 : 도구 저장 비동기 함수
    /// 설명 : 레시피 정보 중 도구 정보 전달 하여 true / false 반환
    /// 비고 : 각종 파라미터 전달
    async function saveEquipment(
                          equip_parent_id, equip_category, equip_category_div
                        , equip_category_id, equip_title, equip_amount
                        )
     {
        var IsResult = false;
        try{
            const response =  await axios.get("http://localhost:8080/api/rcp/create_equipment_entity", 
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                params:{
                      EQUIP_Parent_ID    : equip_parent_id
                    , EQUIP_Category     : equip_category
                    , EQUIP_Category_DIV : equip_category_div
                    , EQUIP_Category_ID  : equip_category_id
                    , EQUIP_Title        : equip_title
                    , EQUIP_Amount       : equip_amount
                }
            })
             .then(res => {
             
                //console.log(res.data.RecipeEntity);
                IsResult = res.data.ISRESULT;
            })
             .catch(res => console.log(res));
        }
        catch(err)
        {
            alert("ERR" + err);
        }
        finally
        {
            return IsResult;
        }

     }

    /// 이름 : 단계 저장 비동기 함수
    /// 설명 : 레시피 정보 중 단계 정보 전달 하여 true / false 반환
    /// 비고 : 각종 파라미터 전달
    function saveStep(
                          step_parent_id, step_category, step_category_div
                          , step_category_id, step_title, step_contents, sort_order
                          , step_ingredient, step_ingredient_nm, step_ingredient_amount
                          , step_equipment, step_equipment_amount
                          , rcp_id
                        )
     {
        var Step_Id = '';
        var IsResult = false;
        try{
            const response =  axios.get("http://localhost:8080/api/rcp/create_step_entity", 
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                params:{
                     STEP_Parent_ID		 : step_parent_id
                   , STEP_Category       : step_category
                   , STEP_Category_DIV   : step_category_div
                   , STEP_Category_ID    : step_category_id
                   , STEP_Title          : step_title
                   , STEP_Contents       : step_contents
                   , Sort_Order          : sort_order
                }
            })
             .then(res => {
             
                //console.log(res.data.RecipeEntity);
                Step_Id = res.data.StepEntity.STEP_ID;

                if(Step_Id != null && Step_Id >0)
                {
                    // 레시피의 단계의 재료
                    var ingd_result = saveIngredient
                    (
                        Step_Id             
                        , 'RCP_Step_Ingredient'
                        , 'RCP_Step_Ingredient'
                        , rcp_id
                        , step_ingredient
                        , step_ingredient_nm
                        , step_ingredient_amount
                    )
                    
                    // 레시피의 단계의 도구
                    var equip_result = saveEquipment
                    (
                        Step_Id
                        , 'RCP_Step_Equipment'
                        , 'RCP_Step_Equipment'
                        , rcp_id
                        , step_equipment
                        , step_equipment_amount
                    )

                    if(ingd_result && equip_result)
                        IsResult = true;

                }
            })
             .catch(res => console.log(res));
        }
        catch(err)
        {
            alert("ERR" + err);
        }
        finally
        {
            return IsResult;
        }

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

        // 1. 추가 할 HTML 을 추출 (특정 포맷으로 숨겨져 있다. id = step_div_format)
        var strHTML = document.getElementById('step_div_format').children[0];

        // 2. 더해지기 전 HTML 추출(최초는 1개이지만 많이 추가하고 나면 5개인 덩어리일수도있다.)
        var allHTML = document.getElementById(name);

        // 3. 더해지기전 HTML 에 마지막 자식으로 append 한다. HTML 에서 추출한 내용을 append 하면 기존 내용은 사라진다..

        //  [div]   -- allHTML
        //          // 자식 1
        //          // 자식 2
        //          // 자식 3       기존 3개의 자식이 있다면       
        //          -----------------------
        //          // 자식 4       strHTML ( allHTML 이라는 최상위 태그에 append 할시 가장 마지막 노드로 추가된다.)
        //  [div]
        allHTML.append(strHTML);


        // 4. append 하고 나면 추출한 format 은 사라진다..(1회용) 따라서 다음에 추가하기 위한 연료로 되어주어야 할 곳에 다시 넣어준다.
        var strOuterHTML = strHTML.outerHTML;
        document.getElementById('step_div_format').innerHTML = strOuterHTML;

        
        

        // 4. 변해야할 Index 값들 정리
        //    01. STEP 1 라벨 변경
        //    02. table id 부여
        //    03. 지우기(제거 함수) 바인딩
        for(var i=0; i<document.getElementById(name).children.length; i++)
        {
            document.getElementById(name).children[i].id = 'step_table_' + (i+1);
            //                        div       > table >    tbody   >     tr    >      th    >   div 
            document.getElementById("step_div").children[i].children[1].children[0].children[0].children[0].innerText = 'STEP ' + (i+1);
            document.getElementById("step_div").children[i].children[1].children[0].children[1].children[0].setAttribute
            (
                "onclick", 
                "function remove () { var tableHtmlObj = document.getElementById('step_div').children; if(tableHtmlObj.length==1) return; else { var htmlObj = document.getElementById('step_table_"+(i+1)+"');  htmlObj.outerHTML='';  tableHtmlObj2 = document.getElementById('step_div').children; for(var i=0; i<tableHtmlObj2.length;i++) { tableHtmlObj2[i].children[1].children[0].children[0].children[0].innerText = 'STEP ' + (i+1); }}}  remove();"
                // 지우기 함수에는 최초 STEP 갯수를 검증하고, 1개 초과인 경우만 삭제, 삭제하고 나면 다시 STEP 라벨 재바인딩
            );
        }


     }  

    
     /// 이름 : check_Data(e, saveFlag)
     /// 설명 : 공개, 저장 버튼 클릭시 유효성 검사 시작 및 데이터 저장 함수
     /// 비고 : 공개, 저장 여부에 따른 데이터 조작 필요
     function check_Data(e, saveFlag)
     {
        e.preventDefault();

        // 1. keyword 검사
        var key = check_Keyword();
        if(!key)
            return;

        // 2. DropDown 요소 검사
        var drop = check_DropDown();
        if(!drop)
            return;

        // 3. textBox 검사
        var text = check_TextBox();
        if(!text)
            return;

        // 4. 단계 내용 입력여부 검사
        var step = check_Step();
        if(!step)
            return;

        // 5. 하나라도 false 인 경우 return
        if(!key || !drop || !text || !step)
            return;

        
        // 6. ToDo : 데이터 저장 로직 (객체 바인딩 및 Axios 호출)
        // 레시피관련정보, 레시피 단계정보
        var info_title = document.getElementById("info_title").value;
        var info_description = document.getElementById("info_description").value;

        var amt = document.getElementById('amt').value;
        var time = document.getElementById('time').value;
        var difficulty = document.getElementById('difficulty').value;



        // 키워드
        var arrDishType = document.getElementsByName("RCP_DishType_CD");
        var dishType = '';
        for(var i = 0; i<arrDishType.length; i++)
        {
            if(arrDishType[i].style.fontWeight == 'bold' && arrDishType[i].style.color == 'green')
            {
                dishType = arrDishType[i].id;
                break;
            }
        }

        var arrSituation = document.getElementsByName("RCP_Situation_CD");
        var situation = '';
        for(var i = 0; i<arrSituation.length; i++)
        {
            if(arrSituation[i].style.fontWeight == 'bold' && arrSituation[i].style.color == 'green')
            {
                situation = arrSituation[i].id
                break;
            }
        }

        var arrMain = document.getElementsByName("RCP_Main_Ingredients_CD");
        var main = '';
        for(var i = 0; i<arrMain.length; i++)
        {
            if(arrMain[i].style.fontWeight == 'bold' && arrMain[i].style.color == 'green')
            {
                main = arrMain[i].id;
                break;
            }
        }

        var arrMethod = document.getElementsByName("RCP_Method_CD");
        var method = '';
        for(var i = 0; i<arrMethod.length; i++)
        {
            if(arrMethod[i].style.fontWeight == 'bold' && arrMethod[i].style.color == 'green')
            {
                method = arrMethod[i].id;
                break;
            }
        }

        var arrTheme = document.getElementsByName("RCP_Theme_CD");
        var theme = '';
        for(var i = 0; i<arrTheme.length; i++)
        {
            if(arrTheme[i].style.fontWeight == 'bold' && arrTheme[i].style.color == 'green')
            {
                theme = arrTheme[i].id;
                break;
            }
        }

        
        // 레시피 저장
        saveRecipe(
              info_title        // 제목
            , info_description  // 내용
            , amt               // 음식 양
            , time              // 조리 시간
            , difficulty        // 난이도
            , dishType
            , situation
            , main
            , method
            , theme
            , saveFlag
        );

        
        
        

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
        if(document.getElementById('amt').value == '')
        {
            alert("음식 조리 양을 선택하세요");
            return false;
        }
        if(document.getElementById('time').value == '')
        {
            alert("음식 조리 시간을 선택하세요");
            return false;
        }
        if(document.getElementById('difficulty').value == '')
        {
            alert("음식 조리 시간을 선택하세요");
            return false;
        }

        return true;
     }

     function check_TextBox()
     {
        var info_ingredient = document.getElementById("info_ingredient").value;
        if(info_ingredient.trim() == '')
        {
            alert("레시피 재료를 입력하세요");
            return false;
        }
        
        var info_equipment = document.getElementById("info_equipment").value;
        if(info_equipment.trim() == '')
        {
            alert("레시피 도구를 입력하세요");
            return false;
        }
        
        
        var info_title = document.getElementById("info_title").value;
        if(info_title.trim() == '')
        {
            alert("레시피 제목을 입력하세요");
            return false;
        }

        var info_description = document.getElementById("info_description").value;
        if(info_description.trim() == '')
        {
            alert("레시피 설명을 입력하세요");
            return false;
        }

        return true;
     }

     function check_Step()
     {
        var flag = true;
        var step_table_elements = document.getElementById("step_div").children;
        for(var i = 0; i<step_table_elements.length; i++)
        {
            // table            >   tbody   >   tr      
            if(
                step_table_elements[i].children[1].children[1].children[0].querySelector('input').value == ''
                ||
                step_table_elements[i].children[1].children[1].children[1].querySelector('input').value == '' 
                ||
                step_table_elements[i].children[1].children[1].children[2].querySelector('input').value == '' 
                ||
                step_table_elements[i].children[1].children[1].children[4].querySelector('input').value == '' 
                ||
                step_table_elements[i].children[1].children[1].children[5].querySelector('input').value == '' 
                ||
                step_table_elements[i].children[1].children[2].children[0].querySelector('input').value == '' 
                ||
                step_table_elements[i].children[1].children[2].children[1].querySelector('input').value == '' 
              )
              {
                flag = false;
                break;
              }
        }

        if(flag == false)
        {
            alert("레시피 단계에 작성해야 할 내용을 입력하세요");
        }

        return flag;
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
                                <td> <input type="text" id="info_ingredient" className={styles.recipe_save_input_ingredient_and_equip}/> </td>
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
                                <td> <input type="text" id="info_equipment" className={styles.recipe_save_input_ingredient_and_equip} /> </td>
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
                                <td colSpan="4"> <input type="text" id="info_title" className={styles.recipe_save_input_title_and_description}/> </td>
                                
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>레시피 설명 </th>
                                <td colSpan="4"> <input type="text" id="info_description" className={styles.recipe_save_input_title_and_description} /> </td>
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

                            <div id="step_div_format" className={styles.recipe_save_div_display_none}>
                                <table name="step_table" id="step_table_0">
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
                    <input type="button"  value="공개" className={styles.recipe_save_open_btn} onClick={(e) => check_Data(e, 'Y')}/>
                    <input type="button"  value="저장"  className={styles.recipe_save_btn} onClick={(e) => check_Data(e, 'N')}/>
                </div>
            </div>

        </div>
    )
}

export default RecipeSave