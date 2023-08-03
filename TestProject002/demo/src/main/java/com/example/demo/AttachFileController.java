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
    
    private String BOOLEAN_RESULT = "ISRESULT";
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

    /// 설명 : 파일 생성 API
    @GetMapping("/api/attachfile/create_attachfile_entity")
    public HashMap<String, Object> CreateAttachfileEntity(
                                                               String Attach_Category           // 파일 분류
                                                             , String Attach_Category_DIV       // 파일 분류 디비전
                                                             , String Attach_Category_ID        // 파일 분류 ID
                                                             , String Attach_File_Group         // 파일 그룹번호
                                                             , String Attach_FilePath	        // 파일 절대경로
                                                             , String Attach_RealFile_NM        // 파일 실제명
                                                             , String Attach_ServerFile_NM      // 파일 서버명
                                                             , String Attach_FileSize	        // 파일 크기
                                                             , String Attach_FileType		    // 파일 확장자
                                                             , String Use_YN		            // 사용여부
                                                             , String Open_YN				    // 공개여부
                                                             , String Attach_Remarks            // 파일 비고
                                                         )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        AttachFileEntity request = new AttachFileEntity();
       
       
        request.Attach_Category         = Attach_Category;
        request.Attach_Category_DIV     = Attach_Category_DIV;
        request.Attach_Category_ID      = Attach_Category_ID;
        request.Attach_File_Group       = (Attach_File_Group == null || Attach_File_Group == "") 
                                          ? DEFAULT_ATTACH_FILE_GROUP
                                          : Integer.parseInt(Attach_File_Group);

        request.Attach_FilePath	    = Attach_FilePath;
        request.Attach_RealFile_NM      = Attach_RealFile_NM;
        request.Attach_ServerFile_NM    = Attach_ServerFile_NM;
        request.Attach_FileSize	        = Integer.parseInt(Attach_FileSize);
        request.Attach_FileType		    = Attach_FileType;
        request.Use_YN		            = Use_YN;
        request.Open_YN				    = Open_YN;
        request.Attach_Remarks          = Attach_Remarks;
        request.Login_User_ID		    = "System";
        
        int CREATE_RESULT = 0;

        AttachFileMapper mapper = sqlSession.getMapper(AttachFileMapper.class);
        CREATE_RESULT = mapper.createAttachFile(request);
        Boolean ISRESULT = false;
        if(CREATE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    
        return result;
    }

    /// 설명 : 파일 삭제 API
    @GetMapping("/api/attachfile/delete_attachfile_entity")
    public HashMap<String, Object> DeleteAttachfileEntity(
                                                               String Attach_ID             // 파일 ID
                                                         )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        AttachFileModel request = new AttachFileModel();
       
        request.Attach_ID = Long.parseLong(Attach_ID);

        int DELETE_RESULT = 0;

        AttachFileMapper mapper = sqlSession.getMapper(AttachFileMapper.class);

        DELETE_RESULT = mapper.deleteAttachFile(request);
        Boolean ISRESULT = false;
        if(DELETE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    
        return result;
    }

}
