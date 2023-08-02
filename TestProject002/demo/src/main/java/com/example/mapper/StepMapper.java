package com.example.mapper;
import com.example.entity.StepEntity;
import com.example.model.StepModel;

import java.util.ArrayList;





public interface StepMapper {

    // 단계 생성 : UP_RCP_Step_C
    public int createStep(StepEntity stepEntity);

    // 단계 삭제 : UP_RCP_Step_D
    public int deleteStep(StepModel stepModel);

    // 단계 조회 : UP_RCP_Step_L
    public ArrayList<StepEntity> selectStepList(StepModel stepModel);


}