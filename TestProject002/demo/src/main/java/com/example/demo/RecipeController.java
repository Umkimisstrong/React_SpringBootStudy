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
    
    private int DEFAULT_PAGE_NUMBER = 1;
    private int DEFAULT_ROW_COUNT = 10;
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 재료 여러건 반환 API
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

   
    /// 설명 : 재료 한건 반환 API
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
    

}
