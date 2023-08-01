package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.ibatis.session.SqlSession;

import com.example.mapper.CodeMapper;
import com.example.model.CodeModel;
import com.example.entity.CodeEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.*;


@RestController
public class CodeController {
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 코드 1건 반환 API
    @GetMapping("/api/code/select_code_entity")
    public HashMap<String, Object> SelectCodeEntity(
                                                        String Code_ID  // 코드 ID
                                                   )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        CodeModel request = new CodeModel();
        if(Code_ID == "" || Code_ID == null)
        {
            Code_ID = "RECIPE";
        }
        request.Code_ID = Code_ID;
        
        CodeEntity resultCodeEntity = new CodeEntity();

        CodeMapper mapper = sqlSession.getMapper(CodeMapper.class);
        resultCodeEntity = mapper.selectCodeEntity(request);

        result.put("CodeEntity", resultCodeEntity);    
        return result;
    }

    /// 설명 : 코드 여러건 반환 API
    @GetMapping("/api/code/select_code_entity_list")
    public HashMap<String, Object> SelectCodeEntityList(
                                                            String Parent_Code_ID // 상위 코드 ID
                                                       )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        CodeModel request = new CodeModel();
        if(Parent_Code_ID == "" || Parent_Code_ID == null)
        {
            Parent_Code_ID = "RECIPE";
        }
        request.Parent_Code_ID = Parent_Code_ID;
        
        List<CodeEntity> resultCodeEntityList = new ArrayList<CodeEntity>();

        CodeMapper mapper = sqlSession.getMapper(CodeMapper.class);
        resultCodeEntityList = mapper.selectCodeEntityList(request);

        result.put("CodeEntityList", resultCodeEntityList);    
        return result;
    }

    

}
