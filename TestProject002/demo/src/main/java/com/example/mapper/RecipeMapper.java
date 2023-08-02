package com.example.mapper;
import com.example.entity.RecipeEntity;
import com.example.model.RecipeModel;

import java.util.ArrayList;





public interface RecipeMapper {

    // 레시피 생성 : UP_RCP_Recipe_C
    public RecipeEntity createRecipe(RecipeEntity recipeEntity);

    // 레시피 삭제 : UP_RCP_Recipe_D
    public int deleteRecipe(RecipeModel recipeModel);

    // 레시피 수정 : UP_RCP_Recipe_U
    public int updateRecipe(RecipeEntity recipeEntity);

    // 레시피 여러건 조회 : UP_RCP_Recipe_L
    public ArrayList<RecipeEntity> selectRecipeList(RecipeModel recipeModel);

    // 레시피 한건 조회 : UP_RCP_Recipe_S
    public RecipeEntity selectRecipeEntity(RecipeModel recipeModel);

}