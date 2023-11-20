package com.example.entity;


public class CodeEntity extends CommonEntity {

    // 코드
    public String Code_ID;

    // 상위코드
    public String Parent_Code_ID;

    // 코드명칭
    public String Code_NM;

    // 코드국문
    public String Code_KOR_NM;

    // 코드영문
    public String Code_ENG_NM;
    
    // 확장코드
    public String Extension_Code_1;

    public String Extension_Code_2;

    public String Extension_Code_3;

    public String Extension_Code_4;

    public String Extension_Code_5;

    // 사용여부 Y / N
    public String Use_YN;

    // 정렬
    public int Sort_Order;

    // 텍스트 필드
    public String Text_Filed;

    // 밸류 필드
    public String Value_Filed;
    
}
