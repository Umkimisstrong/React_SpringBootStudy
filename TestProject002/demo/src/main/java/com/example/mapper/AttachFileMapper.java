package com.example.mapper;
import com.example.model.AttachFileModel;
import com.example.entity.AttachFileEntity;

import java.util.ArrayList;





public interface AttachFileMapper {

    // 파일 저장 : UP_CMM_AttachFile_C
    public int createAttachFile(AttachFileEntity attachFileEntity);

    // 파일 삭제 : UP_CMM_AttachFile_D
    public int deleteAttachFile(AttachFileModel attachFileModel);

    // 파일 조회 : UP_CMM_AttachFile_L
    public ArrayList<AttachFileEntity> selectAttachFileList(AttachFileModel attachFileModel);


}