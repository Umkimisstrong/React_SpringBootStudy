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
    
    private String BOOLEAN_RESULT = "ISRESULT";

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

    /// 설명 : 코드 생성 API
    @GetMapping("/api/code/create_code_entity")
    public HashMap<String, Object> CreateCodeEntity    (
                                                          String    Code_ID
                                                        , String    Parent_Code_ID
                                                        , String    Code_NM
                                                        , String    Code_KOR_NM
                                                        , String    Code_ENG_NM
                                                        , String    Extension_Code_1
                                                        , String    Extension_Code_2	
                                                        , String    Extension_Code_3	
                                                        , String    Extension_Code_4	
                                                        , String    Extension_Code_5	
                                                        , String    Use_YN
                                                        , String    Sort_Order
                                                        , String    Login_User_ID
                                                       )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        CodeModel request = new CodeModel();
        
        request.Code_ID             = Code_ID;
        request.Parent_Code_ID      = Parent_Code_ID;
        request.Code_NM             = Code_NM;
        request.Code_KOR_NM         = Code_KOR_NM;
        request.Code_ENG_NM         = Code_ENG_NM;
        request.Extension_Code_1    = Extension_Code_1;
        request.Extension_Code_2	= Extension_Code_2;	
        request.Extension_Code_3	= Extension_Code_3;	
        request.Extension_Code_4	= Extension_Code_4;	
        request.Extension_Code_5	= Extension_Code_5;	
        request.Use_YN              = Use_YN;
        request.Sort_Order          = Integer.parseInt(Sort_Order);
        request.Login_User_ID       = Login_User_ID;
        
        int INSERT_RESULT = 0;

        CodeMapper mapper = sqlSession.getMapper(CodeMapper.class);
        INSERT_RESULT = mapper.createCodeEntity(request);

        Boolean ISRESULT = false;
        if(INSERT_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    
        return result;
    }

    /// 설명 : 코드 수정 API
    @GetMapping("/api/code/update_code_entity")
    public HashMap<String, Object> UpdateCodeEntity    (
                                                          String    Code_ID
                                                        , String    Parent_Code_ID
                                                        , String    Code_NM
                                                        , String    Code_KOR_NM
                                                        , String    Code_ENG_NM
                                                        , String    Extension_Code_1
                                                        , String    Extension_Code_2	
                                                        , String    Extension_Code_3	
                                                        , String    Extension_Code_4	
                                                        , String    Extension_Code_5	
                                                        , String    Use_YN
                                                        , String    Sort_Order
                                                       )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        CodeModel request = new CodeModel();
        
        request.Code_ID             = Code_ID;
        request.Parent_Code_ID      = Parent_Code_ID;
        request.Code_NM             = Code_NM;
        request.Code_KOR_NM         = Code_KOR_NM;
        request.Code_ENG_NM         = Code_ENG_NM;
        request.Extension_Code_1    = Extension_Code_1;
        request.Extension_Code_2	= Extension_Code_2;	
        request.Extension_Code_3	= Extension_Code_3;	
        request.Extension_Code_4	= Extension_Code_4;	
        request.Extension_Code_5	= Extension_Code_5;	
        request.Use_YN              = Use_YN;
        request.Sort_Order          = Integer.parseInt(Sort_Order);
        request.Login_User_ID       = "System";
        
        int UPDATE_RESULT = 0;

        CodeMapper mapper = sqlSession.getMapper(CodeMapper.class);
        UPDATE_RESULT = mapper.updateCodeEntity(request);

        Boolean ISRESULT = false;
        if(UPDATE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    
        return result;
    }


}
