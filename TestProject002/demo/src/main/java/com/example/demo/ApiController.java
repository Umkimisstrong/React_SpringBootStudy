package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.mapper.CodeMapper;
import com.example.model.CodeModel;
import java.util.HashMap;
import java.sql.*;
import org.apache.ibatis.session.SqlSession;

@RestController
public class ApiController {
    
    @Autowired
    private SqlSession sqlSession;

    @GetMapping("/api/hello")
    public HashMap<String, String> hello(String Code_ID)  throws SQLException, ClassNotFoundException
    {
        HashMap<String, String> result = new HashMap<String, String>();

        CodeModel request = new CodeModel();
        if(Code_ID == "" || Code_ID == null)
        {
            Code_ID = "Centero";
        }
        request.Code_ID = Code_ID;
        
        CodeModel resultCode = new CodeModel();
        CodeMapper mapper = sqlSession.getMapper(CodeMapper.class);

        resultCode = mapper.selectCodeNm(request);

        //result.put("message", "안녕하세요");
        result.put("message", resultCode.Code_NM);


        
        return result;
    }
}
