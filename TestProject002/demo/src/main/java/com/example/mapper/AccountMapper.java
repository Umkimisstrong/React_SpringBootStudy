package com.example.mapper;
import com.example.model.AccountModel;
import com.example.entity.AccountEntity;


import java.util.ArrayList;





public interface AccountMapper {

    // 단일 계정 반환 : UP_ACT_Account_S
    public AccountEntity selectAccountEntity(AccountModel accountModel);

    // 복수 계정 반환 : UP_ACT_Account_L
    public ArrayList<AccountEntity> selectAccountEntityList(AccountModel accountModel);

    // 계정 생성 : UP_ACT_Account_C
    public int createAccountEntity(AccountModel accountModel);

    // 계정 수정 : UP_ACT_Account_U
    public int updateAccountEntity(AccountModel accountModel);

    // 계정 사용 여부 수정 : UP_ACT_Account_Use_YN_U
    public int updateAccountUseYN(AccountModel accountModel);


}