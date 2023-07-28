package com.example.mapper;
import com.example.model.CodeModel;

import java.util.ArrayList;

import com.example.entity.CodeEntity;




public interface CodeMapper {

    // 단일 코드 반환 : UP_CMM_Code_S
    public CodeEntity selectCodeEntity(CodeModel codeModel);

    // 복수 코드 반환 : UP_CMM_Code_L
    public ArrayList<CodeEntity> selectCodeEntityList(CodeModel codeModel);

    // 코드 생성 : UP_CMM_Code_C
    public int createCodeEntity(CodeModel codeModel);

    // 코드 수정 : UP_CMM_Code_U
    public int ureateCodeEntity(CodeModel codeModel);


}