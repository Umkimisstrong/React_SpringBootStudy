package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.ibatis.session.SqlSession;

import com.example.mapper.AttachFileMapper;
import com.example.model.AttachFileModel;
import com.example.entity.AttachFileEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.*;


@RestController
public class AttachFileController {
    
    private int DEFAULT_ATTACH_FILE_GROUP = 0;

    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 파일 여러건 반환 API
    @GetMapping("/api/attachfile/select_attachfile_entity_list")
    public HashMap<String, Object> SelectAttachfileEntityList(
                                                                  String Attach_Category        // 파일 분류
                                                                , String Attach_Category_DIV    // 파일 분류 디비전
                                                                , String Attach_Category_ID     // 파일 분류 ID
                                                                , String Attach_File_Group      // 파일 그룹번호
                                                             )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        AttachFileModel request = new AttachFileModel();
       
       

        request.Attach_Category         = Attach_Category;
        request.Attach_Category_DIV     = Attach_Category_DIV;
        request.Attach_Category_ID      = Attach_Category_ID;
        request.Attach_File_Group       = (Attach_File_Group == null || Attach_File_Group == "") 
                                          ? DEFAULT_ATTACH_FILE_GROUP
                                          : Integer.parseInt(Attach_File_Group);

        
        List<AttachFileEntity> resultAttachFileEntityList = new ArrayList<AttachFileEntity>();

        AttachFileMapper mapper = sqlSession.getMapper(AttachFileMapper.class);
        resultAttachFileEntityList = mapper.selectAttachFileList(request);

        result.put("AttachFileEntityList", resultAttachFileEntityList);    
        return result;
    }

    

}
