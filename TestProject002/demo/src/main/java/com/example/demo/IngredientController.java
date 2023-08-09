package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.ibatis.session.SqlSession;

import com.example.mapper.IngredientMapper;
import com.example.model.IngredientModel;
import com.example.entity.IngredientEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.*;


@RestController
public class IngredientController {
    
    private String BOOLEAN_RESULT = "ISRESULT";
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 재료 여러건 반환 API
    @GetMapping("/api/rcp/select_ingredient_entity_list")
    public HashMap<String, Object> SelectIngredientEntityList(
                                                            String INGD_Category           // 도구 분류
                                                        ,   String INGD_Category_DIV       // 도구 분류 디비전
                                                        ,   String INGD_Category_ID        // 도구 분류 ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        IngredientModel request = new IngredientModel();

        request.INGD_Category      = INGD_Category;
        request.INGD_Category_DIV  = INGD_Category_DIV;
        request.INGD_Category_ID   = INGD_Category_ID;
        
        List<IngredientEntity> resultIngrediententity = new ArrayList<IngredientEntity>();


        IngredientMapper mapper = sqlSession.getMapper(IngredientMapper.class);
        resultIngrediententity = mapper.selectIngredientList(request);

        result.put("IngredientEntityList", resultIngrediententity);    
        return result;
    }

    /// 설명 : 재료 생성 API
    @GetMapping("/api/rcp/create_ingredient_entity")
    public HashMap<String, Object> CreateIngredientEntity  (
                                                                  String INGD_Parent_ID         // 재료 상위 ID
                                                                , String INGD_Category          // 재료 분류
                                                                , String INGD_Category_DIV      // 재료 분류 디비전
                                                                , String INGD_Category_ID       // 재료 분류 ID
                                                                , String INGD_Title             // 재료 제목
                                                                , String INGD_NM	            // 재료 명
                                                                , String INGD_Amount            // 재료 양
                                                            )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        IngredientEntity request = new IngredientEntity();

        request.INGD_Parent_ID      = Long.parseLong(INGD_Parent_ID);
        request.INGD_Category       = INGD_Category;
        request.INGD_Category_DIV   = INGD_Category_DIV;
        request.INGD_Category_ID    = INGD_Category_ID;
        request.INGD_Title          = INGD_Title;
        request.INGD_NM	            = INGD_NM;
        request.INGD_Amount         = INGD_Amount;
        request.Login_User_ID       = "System";

        int INSERT_RESULT = 0;



        IngredientMapper mapper = sqlSession.getMapper(IngredientMapper.class);
        INSERT_RESULT = mapper.createIngredient(request);

        Boolean ISRESULT = false;

        if(INSERT_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    
        return result;
    }

    /// 설명 : 재료 삭제 API
    @GetMapping("/api/rcp/delete_ingredient_entity")
    public HashMap<String, Object> DeleteIngredientEntity  (
                                                                  String INGD_ID         // 재료 ID
                                                            )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        IngredientModel request = new IngredientModel();

        request.INGD_ID      = Long.parseLong(INGD_ID);
        int DELETE_RESULT = 0;



        IngredientMapper mapper = sqlSession.getMapper(IngredientMapper.class);
        DELETE_RESULT = mapper.deleteIngredient(request);

        Boolean ISRESULT = false;

        if(DELETE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    
        return result;
    }

   

    

}
