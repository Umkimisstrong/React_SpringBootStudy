package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.ibatis.session.SqlSession;

import com.example.mapper.AccountMapper;
import com.example.model.AccountModel;
import com.example.entity.AccountEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.*;


@RestController
public class AccountController {
    
    private int DEFAULT_PAGE_NUMBER = 1;
    private int DEFAULT_ROW_COUNT = 10;
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 계정 1건 반환 API
    @GetMapping("/api/account/select_account_entity")
    public HashMap<String, Object> SelectAccountEntity(
                                                        String Account_ID   // 계정 ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        AccountModel request = new AccountModel();

        request.Account_ID = Account_ID;
        
        AccountEntity resultAccountEntity = new AccountEntity();

        AccountMapper mapper = sqlSession.getMapper(AccountMapper.class);
        resultAccountEntity = mapper.selectAccountEntity(request);

        result.put("AccountEntity", resultAccountEntity);    
        return result;
    }

    /// 설명 : 계정 여러건 반환 API
    @GetMapping("/api/account/select_account_entity_list")
    public HashMap<String, Object> SelectAccountEntityList(
                                                               String Account_ID        // 계정 ID
                                                             , String ACT_Name          // 계정 이름
                                                             , String ACT_NickName      // 계정 닉네임
                                                             , String ACT_Activate_YN   // 계정 활성화 여부
                                                             , String Delete_YN         // 계정 삭제 여부
                                                             , String Use_YN            // 계정 사용 여부
                                                             , String PAGE_NUMBER       // 페이지 번호
                                                             , String ROW_COUNT         // 행 수
                                                          )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        AccountModel request = new AccountModel();
      
        request.Account_ID      = Account_ID;
        request.ACT_Name        = ACT_Name;
        request.ACT_NickName    = ACT_NickName;
        request.ACT_Activate_YN = ACT_Activate_YN;
        request.Delete_YN       = Delete_YN;
        request.PAGE_NUMBER     = (PAGE_NUMBER == null || PAGE_NUMBER == "")
                                ? DEFAULT_PAGE_NUMBER
                                : Integer.parseInt(PAGE_NUMBER);
        request.ROW_COUNT       = (ROW_COUNT == null || ROW_COUNT == "")
                                ? DEFAULT_ROW_COUNT
                                : Integer.parseInt(ROW_COUNT);
        
        List<AccountEntity> resultAccountEntityList = new ArrayList<AccountEntity>();

        AccountMapper mapper = sqlSession.getMapper(AccountMapper.class);
        resultAccountEntityList = mapper.selectAccountEntityList(request);

        result.put("AccountEntityList", resultAccountEntityList);    
        return result;
    }

    

}
