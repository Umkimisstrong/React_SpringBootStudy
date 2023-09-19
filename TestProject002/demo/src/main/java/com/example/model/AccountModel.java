package com.example.model;

import java.util.Date;
import java.util.ArrayList;

import com.example.entity.AccountEntity;

public class AccountModel extends CommonModel {

    // 계정 ID
    public String Account_ID;

    // 계정 Email
    public String ACT_Email;

    // 계정 Password
    public String ACT_Password;

    // 계정 이름
    public String ACT_Name;

    // 계정 닉네임
    public String ACT_NickName;

    // 활성화 여부
    public String ACT_Activate_YN;

    // 활성화 날짜
    public Date ACT_Activate_DT;

    // 삭제 여부
    public String Delete_YN;

    // 사용 여부
    public String Use_YN;

    // AccountEntity 리스트
    public ArrayList<AccountEntity> AccountEntityList;

    // 분기변수
    public String ACT_FLAG;


    
}
