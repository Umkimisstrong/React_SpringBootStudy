/*
    메인 화면, 사용자 최초 접근 시 페이지
*/
import React from 'react';
import styles from "../../components/cssModule/default/Index.module.css";




const Index = () => {

    return (
        <div>
            {/* 검색 영역 */}
            <div className={styles.index_search}>
                <div className={styles.index_search_box_div}>
                    <input className={styles.index_search_div_input} ></input>
                    <div className={styles.index_search_button_div}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 26">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    
                </div>

                <div className={styles.index_new_recipe_div}>
                    <input value="새로만들기" type='button' className={styles.index_new_recipe_btn}></input>
                </div>

                
            </div>

            {/* 분류 영역 */}
            <div className={styles.index_wrap}>
                <div className={styles.index_contents}>
                <table className={styles.index_tbl}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th className={styles.index_tbl_th}>종류별 </th>


                            <td>밑반찬</td>
                            <td>메인반찬</td>
                            <td>국 / 탕 / 찌개</td>
                            <td>디저트</td>
                        </tr>
                        
                        <tr>
                        <th className={styles.index_tbl_th}>상황별 </th>


                            <td>술안주</td>
                            <td>다이어트</td>
                            <td>일상</td>
                            <td>초스피드</td>
                        </tr>

                        <tr>
                        <th className={styles.index_tbl_th}>메인 재료별 </th>


                            <td>소고기</td>
                            <td>돼지고기</td>
                            <td>닭고기</td>
                            <td>육류</td>
                        </tr>

                        <tr>
                        <th className={styles.index_tbl_th}>방법별 </th>


                            <td>볶음</td>
                            <td>끓이기</td>
                            <td>부침</td>
                            <td>조림</td>
                        </tr>

                        <tr>
                        <th className={styles.index_tbl_th}>테마별 </th>

                            <td>여성 / 뷰티</td>
                            <td>엄마 / 아기</td>
                            <td>건강 / 질병</td>
                            <td>제철요리</td>
                        </tr>


                    </tbody>
                </table>
                </div> 
            </div>  

            {/* 썸네일 영역 */}
            <div className={styles.index_recipe_wrap}>
                <div className={styles.index_recipe_contents}>
                <table className={styles.index_recipe_tbl}>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.index_recipe_sumnail}>
                                    Image
                                </div>
                                <div>
                                    Title
                                </div>
                            </td>
                            <td>
                                <div className={styles.index_recipe_sumnail}>
                                    Image
                                </div>
                                <div>
                                    Title
                                </div>
                            </td>
                            <td>
                                <div className={styles.index_recipe_sumnail}>
                                    Image
                                </div>
                                <div>
                                    Title
                                </div>
                            </td>
                            <td>
                                <div className={styles.index_recipe_sumnail}>
                                    Image
                                </div>
                                <div>
                                    Title
                                </div>
                            </td>
                            <td>
                                <div className={styles.index_recipe_sumnail}>
                                    Image
                                </div>
                                <div>
                                    Title
                                </div>
                            </td>
                            <td>
                                <div className={styles.index_recipe_sumnail}>
                                    Image
                                </div>
                                <div>
                                    Title
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

        </div>

    )
}

export default Index