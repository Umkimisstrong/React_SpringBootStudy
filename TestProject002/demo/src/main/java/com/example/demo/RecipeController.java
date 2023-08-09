package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.ibatis.session.SqlSession;


import com.example.mapper.RecipeMapper;
import com.example.model.RecipeModel;
import com.example.entity.RecipeEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.*;


@RestController
public class RecipeController {

    private String BOOLEAN_RESULT = "ISRESULT";
    
    private int DEFAULT_PAGE_NUMBER = 1;
    private int DEFAULT_ROW_COUNT = 10;
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 레시피 여러건 반환 API
    @GetMapping("/api/rcp/select_recipe_entity_list")
    public HashMap<String, Object> SelectRecipeEntityList(
                                                              String RCP_Owner_NM
                                                            , String RCP_Title
                                                            , String RCP_DishType_CD
                                                            , String RCP_Situation_CD
                                                            , String RCP_Main_Ingredients_CD
                                                            , String RCP_Method_CD
                                                            , String RCP_Theme_CD
                                                            , String PAGE_NUMBER
                                                            , String ROW_COUNT  
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        RecipeModel request = new RecipeModel();

        request.RCP_Owner_NM = RCP_Owner_NM;
        request.RCP_Title = RCP_Title;
        request.RCP_DishType_CD = RCP_DishType_CD;
        request.RCP_Situation_CD = RCP_Situation_CD;
        request.RCP_Main_Ingredients_CD = RCP_Main_Ingredients_CD;
        request.RCP_Method_CD = RCP_Method_CD;
        request.RCP_Theme_CD = RCP_Theme_CD;
        request.PAGE_NUMBER = (PAGE_NUMBER == null || PAGE_NUMBER == "")
                            ? DEFAULT_PAGE_NUMBER
                            : Integer.parseInt(PAGE_NUMBER);
        request.ROW_COUNT = (ROW_COUNT == null || ROW_COUNT == "")
                          ? DEFAULT_ROW_COUNT
                          : Integer.parseInt(ROW_COUNT);
        
        List<RecipeEntity> resultRecipeEntity = new ArrayList<RecipeEntity>();


        RecipeMapper mapper = sqlSession.getMapper(RecipeMapper.class);
        resultRecipeEntity = mapper.selectRecipeList(request);

        result.put("RecipeEntityList", resultRecipeEntity);    
        return result;
    }

   
    /// 설명 : 레시피 한건 반환 API
    @GetMapping("/api/rcp/select_recipe_entity")
    public HashMap<String, Object> SelectRecipeEntity(
                                                            String RCP_ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        RecipeModel request = new RecipeModel();

        request.RCP_ID = RCP_ID;
        
        RecipeEntity resultEntity = new RecipeEntity();


        RecipeMapper mapper = sqlSession.getMapper(RecipeMapper.class);
        resultEntity = mapper.selectRecipeEntity(request);

        result.put("RecipeEntity", resultEntity);    
        return result;
    }
    
    /// 설명 : 레시피 생성 API
    @GetMapping("/api/rcp/create_recipe_entity")
    public HashMap<String, Object> CreateRecipeEntity(
                                                              String    RCP_Title                   // 레시피 제목
                                                            , String    RCP_Contents                // 레시피 내용
                                                            , String    RCP_Amount_CD               // 레시피 양 코드
                                                            , String    RCP_Time_CD	                // 레시피 시간 코드
                                                            , String    RCP_Difficulty_CD           // 레시피 난이도 코드
                                                            , String    RCP_DishType_CD             // 레시피 요리 타입 코드
                                                            , String    RCP_Situation_CD            // 레시피 상황 코드
                                                            , String    RCP_Main_Ingredients_CD     // 레시피 메인 재료 코드
                                                            , String    RCP_Method_CD               // 레시피 방법 코드
                                                            , String    RCP_Theme_CD                // 레시피 테마 코드
                                                            , String    Open_YN                     // 레시피 공개 여부
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        RecipeEntity request = new RecipeEntity();

        request.RCP_Title                    = RCP_Title;    
        request.RCP_Contents                 = RCP_Contents;    
        request.RCP_Amount_CD                = RCP_Amount_CD;  
        request.RCP_Time_CD	                 = RCP_Time_CD;  
        request.RCP_Difficulty_CD            = RCP_Difficulty_CD;  
        request.RCP_DishType_CD              = RCP_DishType_CD;  
        request.RCP_Situation_CD             = RCP_Situation_CD;  
        request.RCP_Main_Ingredients_CD      = RCP_Main_Ingredients_CD;  
        request.RCP_Method_CD                = RCP_Method_CD;  
        request.RCP_Theme_CD                 = RCP_Theme_CD;  
        request.Open_YN                      = Open_YN;  
        request.Login_User_ID                = "System";  
        



        RecipeMapper mapper = sqlSession.getMapper(RecipeMapper.class);

        RecipeEntity resultEntity = new RecipeEntity();

        resultEntity = mapper.createRecipe(request);

        result.put("RecipeEntity", resultEntity);    

        return result;
    }
    
    /// 설명 : 레시피 수정 API
    @GetMapping("/api/rcp/update_recipe_entity")
    public HashMap<String, Object> UpdateRecipeEntity(
                                                              String    RCP_ID                      // 레시피 ID
                                                            , String    RCP_Title                   // 레시피 제목
                                                            , String    RCP_Contents                // 레시피 내용
                                                            , String    RCP_Amount_CD               // 레시피 양 코드
                                                            , String    RCP_Time_CD	                // 레시피 시간 코드
                                                            , String    RCP_Difficulty_CD           // 레시피 난이도 코드
                                                            , String    RCP_DishType_CD             // 레시피 요리 타입 코드
                                                            , String    RCP_Situation_CD            // 레시피 상황 코드
                                                            , String    RCP_Main_Ingredients_CD     // 레시피 메인 재료 코드
                                                            , String    RCP_Method_CD               // 레시피 방법 코드
                                                            , String    RCP_Theme_CD                // 레시피 테마 코드
                                                            , String    Open_YN                     // 레시피 공개 여부
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        RecipeEntity request = new RecipeEntity();

        request.RCP_ID                       = RCP_ID;
        request.RCP_Title                    = RCP_Title;    
        request.RCP_Contents                 = RCP_Contents;    
        request.RCP_Amount_CD                = RCP_Amount_CD;  
        request.RCP_Time_CD	                 = RCP_Time_CD;  
        request.RCP_Difficulty_CD            = RCP_Difficulty_CD;  
        request.RCP_DishType_CD              = RCP_DishType_CD;  
        request.RCP_Situation_CD             = RCP_Situation_CD;  
        request.RCP_Main_Ingredients_CD      = RCP_Main_Ingredients_CD;  
        request.RCP_Method_CD                = RCP_Method_CD;  
        request.RCP_Theme_CD                 = RCP_Theme_CD;  
        request.Open_YN                      = Open_YN;  
        request.Login_User_ID                = "System";  
        

        RecipeMapper mapper = sqlSession.getMapper(RecipeMapper.class);


        int UPDATE_RESULT = 0;

        UPDATE_RESULT = mapper.updateRecipe(request);

        Boolean ISRESULT = false;

        if(UPDATE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    

        return result;
    }
    
    /// 설명 : 레시피 삭제 API
    @GetMapping("/api/rcp/delete_recipe_entity")
    public HashMap<String, Object> CreateRecipeEntity(
                                                              String RCP_ID     // 레시피 ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        RecipeModel request = new RecipeModel();

        request.RCP_ID = RCP_ID;
        

        RecipeMapper mapper = sqlSession.getMapper(RecipeMapper.class);

        int DELETE_RESULT = 0;

        DELETE_RESULT = mapper.deleteRecipe(request);

        Boolean ISRESULT = false;

        if(DELETE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    

        return result;
    }
    
}
