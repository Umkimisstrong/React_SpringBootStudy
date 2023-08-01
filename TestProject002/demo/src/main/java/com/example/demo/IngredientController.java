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
    
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 재료 여러건 반환 API
    @GetMapping("/api/rcp/select_ingredient_entity_list")
    public HashMap<String, Object> SelectIngredientEntity(
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

   

    

}
