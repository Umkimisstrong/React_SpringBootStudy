package com.example.mapper;
import com.example.entity.EquipmentEntity;
import com.example.model.EquipmentModel;

import java.util.ArrayList;





public interface EquipmentMapper {

    // 도구 생성 : UP_RCP_Equipment_C
    public int createEquipment(EquipmentEntity equipmentEntity);

    // 도구 삭제 : UP_RCP_Equipment_D
    public int deleteEquipment(EquipmentModel equipmentModel);

    // 도구 조회 : UP_RCP_Equipment_L
    public ArrayList<EquipmentEntity> selectEquipmentList(EquipmentModel equipmentModel);
    


}