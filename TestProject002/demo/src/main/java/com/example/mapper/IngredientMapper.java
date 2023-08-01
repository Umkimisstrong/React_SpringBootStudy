package com.example.mapper;
import com.example.entity.IngredientEntity;
import com.example.model.IngredientModel;

import java.util.ArrayList;





public interface IngredientMapper {

    // 도구 생성 : UP_RCP_Ingredient_C
    public int createIngredient(IngredientEntity IngredientEntity);

    // 도구 삭제 : UP_RCP_Ingredient_D
    public int deleteIngredient(IngredientModel IngredientModel);

    // 도구 수정 : UP_RCP_Ingredient_U
    public int updateIngredient(IngredientEntity IngredientEntity);

    // 도구 조회 : UP_RCP_Ingredient_L
    public ArrayList<IngredientEntity> selectIngredientList(IngredientModel IngredientModel);
    


}