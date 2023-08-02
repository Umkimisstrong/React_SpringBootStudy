package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.ibatis.session.SqlSession;

import com.example.mapper.StepMapper;
import com.example.model.StepModel;
import com.example.entity.StepEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.*;


@RestController
public class StepController {
    
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 단계 여러건 반환 API
    @GetMapping("/api/rcp/select_step_entity_list")
    public HashMap<String, Object> SelectStepEntityList(
                                                            String STEP_Category           // 단계 분류
                                                        ,   String STEP_Category_DIV       // 단계 분류 디비전
                                                        ,   String STEP_Category_ID        // 단계 분류 ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        StepModel request = new StepModel();

        request.STEP_Category      = STEP_Category;
        request.STEP_Category_DIV  = STEP_Category_DIV;
        request.STEP_Category_ID   = STEP_Category_ID;
        
        List<StepEntity> resultStepentity = new ArrayList<StepEntity>();


        StepMapper mapper = sqlSession.getMapper(StepMapper.class);
        resultStepentity = mapper.selectStepList(request);

        result.put("StepEntityList", resultStepentity);    
        return result;
    }

   

    

}
