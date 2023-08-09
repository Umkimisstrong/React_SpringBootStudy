package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.ibatis.session.SqlSession;

import com.example.mapper.EquipmentMapper;
import com.example.model.EquipmentModel;
import com.example.entity.EquipmentEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.*;


@RestController
public class EquipmentController {
    
    private String BOOLEAN_RESULT = "ISRESULT";
    
    @Autowired
    private SqlSession sqlSession;

    /// 설명 : 도구 여러건 반환 API
    @GetMapping("/api/rcp/select_equipment_entity_list")
    public HashMap<String, Object> SelectEquipmentEntityList(
                                                            String EQUIP_Category           // 도구 분류
                                                        ,   String EQUIP_Category_DIV       // 도구 분류 디비전
                                                        ,   String EQUIP_Category_ID        // 도구 분류 ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        EquipmentModel request = new EquipmentModel();

        request.EQUIP_Category      = EQUIP_Category;
        request.EQUIP_Category_DIV  = EQUIP_Category_DIV;
        request.EQUIP_Category_ID   = EQUIP_Category_ID;
        
        List<EquipmentEntity> resultEquipmententity = new ArrayList<EquipmentEntity>();


        EquipmentMapper mapper = sqlSession.getMapper(EquipmentMapper.class);
        resultEquipmententity = mapper.selectEquipmentList(request);

        result.put("EquipmentEntityList", resultEquipmententity);    
        return result;
    }

    /// 설명 : 도구 생성 API
    @GetMapping("/api/rcp/create_equipment_entity")
    public HashMap<String, Object> CreateEquipmentEntity(
                                                              String    EQUIP_Parent_ID     // 도구 상위 ID
                                                            , String    EQUIP_Category      // 도구 분류
                                                            , String    EQUIP_Category_DIV  // 도구 분류 디비전
                                                            , String    EQUIP_Category_ID   // 도구 분류 ID
                                                            , String    EQUIP_Title         // 도구 제목
                                                            , String    EQUIP_Amount        // 도구 양
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        EquipmentEntity request = new EquipmentEntity();

        request.EQUIP_Parent_ID     =   Long.parseLong(EQUIP_Parent_ID);
        request.EQUIP_Category      =   EQUIP_Category;
        request.EQUIP_Category_DIV  =   EQUIP_Category_DIV;
        request.EQUIP_Category_ID   =   EQUIP_Category_ID;
        request.EQUIP_Title         =   EQUIP_Title;
        request.EQUIP_Amount        =   EQUIP_Amount;
        request.Login_User_ID       =   "System";
    
        int INSERT_RESULT = 0;

        EquipmentMapper mapper = sqlSession.getMapper(EquipmentMapper.class);

        INSERT_RESULT = mapper.createEquipment(request);

        Boolean ISRESULT = false;
        if(INSERT_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    

        return result;
    }

    /// 설명 : 도구 삭제 API
    @GetMapping("/api/rcp/delete_equipment_entity")
    public HashMap<String, Object> DeleteEquipmentEntity(
                                                              String    EQUIP_ID     // 도구 ID
                                                      )  throws SQLException, ClassNotFoundException
    {
        HashMap<String, Object> result = new HashMap<String, Object>();

        EquipmentModel request = new EquipmentModel();

        request.EQUIP_ID = Long.parseLong(EQUIP_ID);

        int DELETE_RESULT = 0;

        EquipmentMapper mapper = sqlSession.getMapper(EquipmentMapper.class);

        DELETE_RESULT = mapper.deleteEquipment(request);

        Boolean ISRESULT = false;
        if(DELETE_RESULT>0)
            ISRESULT = true;

        result.put(BOOLEAN_RESULT, ISRESULT);    

        return result;
    }

    
   

    

}
