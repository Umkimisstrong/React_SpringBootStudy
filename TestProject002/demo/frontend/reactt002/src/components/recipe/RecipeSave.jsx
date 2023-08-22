/*
    레시피 저장 화면
*/

import React from 'react';
import styles from "../../components/cssModule/recipe/RecipeSave.module.css";


    /// 이름 : onclickHref(주소, 이벤트객체) 
    /// 설명 : 넘겨받은 주소로 이동시키는 함수
    /// 비고 : 신규 레시피 작성 페이지로 이동한다.
    function onclickHref (url, e) 
    {
        e.preventDefault();
        window.location.href="http://localhost:3000/"+url;
    }


const RecipeSave = () => {

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


                                <td>밑반찬</td>
                                <td>메인반찬</td>
                                <td>국 / 탕 / 찌개</td>
                                <td>디저트</td>
                            </tr>

                            <tr>
                            <th className={styles.recipe_save_tbl_th}>상황별 </th>


                                <td>술안주</td>
                                <td>다이어트</td>
                                <td>일상</td>
                                <td>초스피드</td>
                            </tr>

                            <tr>
                            <th className={styles.recipe_save_tbl_th}>메인 재료별 </th>


                                <td>소고기</td>
                                <td>돼지고기</td>
                                <td>닭고기</td>
                                <td>육류</td>
                            </tr>

                            <tr>
                            <th className={styles.recipe_save_tbl_th}>방법별 </th>


                                <td>볶음</td>
                                <td>끓이기</td>
                                <td>부침</td>
                                <td>조림</td>
                            </tr>

                            <tr>
                            <th className={styles.recipe_save_tbl_th}>테마별 </th>

                                <td>여성 / 뷰티</td>
                                <td>엄마 / 아기</td>
                                <td>건강 / 질병</td>
                                <td>제철요리</td>
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
                                     <select name="" id="" className={styles.recipe_save_select}>
                                            <option value="">1인분</option>
                                            <option value="">2인분</option>
                                            <option value="">3인분</option>
                                            <option value="">4인분</option>
                                            <option value="">5인분</option>
                                     </select> 
                                </td>

                                <td className={styles.recipe_save_tbl_blank_td}></td>
                                
                                
                                <th className={styles.recipe_save_tbl_th_2}> 재료 </th>
                                <td> <input type="text"  className={styles.recipe_save_input_ingredient_and_equip}/> </td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>조리 시간 </th>
                                <td>
                                    <select name="" id="" className={styles.recipe_save_select}>
                                            <option value="">10분 이내</option>
                                            <option value="">30분 이내</option>
                                            <option value="">1시간 이내</option>
                                            <option value="">2시간 이내</option>
                                            <option value="">3시간 이상</option>
                                     </select> 
                                </td>

                                <td className={styles.recipe_save_tbl_blank_td}></td>

                                <th className={styles.recipe_save_tbl_th_2}>도구 </th>
                                <td> <input type="text" className={styles.recipe_save_input_ingredient_and_equip} /> </td>
                            </tr>

                            <tr>
                                <th className={styles.recipe_save_tbl_th}>난이도 </th>
                                <td colSpan="4"> 
                                    <select name="" id="" className={styles.recipe_save_select}>
                                            <option value="">초급</option>
                                            <option value="">중급</option>
                                            <option value="">고급</option>
                                            <option value="">쉐프</option>
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
                <div  className={styles.recipe_save_step_wrap}>
                <div className={styles.recipe_save_label_wrap}>
                    4. 레시피 단계 등록하기
                </div>
                    <div className={styles.recipe_save_contents}>
                        <div className={styles.recipe_save_contents_plus_step}>
                            <input type="button" value="단계 추가" className={styles.recipe_save_step_plus_btn}/>
                        </div>
                        <table>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                         <div className={styles.recipe_save_step_div}> 
                                        STEP 1
                                        </div>
                                    </th>
                                    <td><input type="button" value="지우기" className={styles.recipe_save_step_delete_btn}/></td>
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

            {/* 버튼 영역 */}
            <div className={styles.recipe_save_btn_wrap}>
                <div>
                    <input type="button"  value="공개" className={styles.recipe_save_open_btn}/>
                    <input type="button"  value="저장"  className={styles.recipe_save_btn}/>
                </div>
            </div>

        </div>
    )
}

export default RecipeSave