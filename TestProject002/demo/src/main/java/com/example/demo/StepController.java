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
    
    private String BOOLEAN_RESULT = "ISRESULT";

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

    /// 설명 : 단계 생성 API
    @GetMapping("/api/rcp/create_step_entity")
    public HashMap<String, Object> CreateStepEntity   (
                                                              String STEP_Parent_ID		// 단계 상위 ID
                                                            , String STEP_Category      // 단계 분류
                                                            , String STEP_Category_DIV  // 단계 분류 디비전
                                                            , String STEP_Category_ID   // 단계 분류 ID
                                                            , String STEP_Title         // 단계 제목
                                                            , String STEP_Contents      // 단계 내용
                                                            , String Sort_Order         // 정렬
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        StepEntity request = new StepEntity();

        request.STEP_Parent_ID		= Long.parseLong(STEP_Parent_ID);
        request.STEP_Category       = STEP_Category;
        request.STEP_Category_DIV   = STEP_Category_DIV;
        request.STEP_Category_ID    = STEP_Category_ID;
        request.STEP_Title          = STEP_Title;
        request.STEP_Contents       = STEP_Contents;
        request.Sort_Order          = Integer.parseInt(Sort_Order);
        request.Login_User_ID       = "System";
   
   
        StepEntity resultEntity = new StepEntity();

        StepMapper mapper = sqlSession.getMapper(StepMapper.class);
        resultEntity = mapper.createStep(request);



        result.put("StepEntity", resultEntity);

        return result;
    }

    /// 설명 : 단계 삭제 API
    @GetMapping("/api/rcp/delete_step_entity")
    public HashMap<String, Object> DeleteStepEntity   (
                                                              String STEP_ID		// 단계 ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        StepModel request = new StepModel();

        request.STEP_ID		= Long.parseLong(STEP_ID);

        int DELETE_RESULT = 0;

        StepMapper mapper = sqlSession.getMapper(StepMapper.class);
        DELETE_RESULT = mapper.deleteStep(request);

        Boolean ISRESULT = false;
        if(DELETE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);
        
        return result;
    }

    

}
