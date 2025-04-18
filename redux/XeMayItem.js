import { Alert, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { deleteXeAct, getListXeMay } from './XeMayAction';
import { useDispatch } from 'react-redux';

const XeMayItem = ({XeMay}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleEdit = () => {
    navigation.navigate('edit', { XeMay });
  };

  const handleDelete = () => {
    // Hiển thị hộp thoại xác nhận
    Alert.alert(
      "Xác nhận xóa",
      "Bạn có chắc chắn muốn xóa xe này không?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Hủy xóa"),
          style: "cancel",
        },
        {
          text: "Xóa",
          onPress: () => {
            // Nếu chọn "Xóa", thực hiện xóa
            dispatch(deleteXeAct(XeMay.id));
            dispatch(getListXeMay());
            Alert.alert("Xóa thành công");
          },
        },
      ],
      { cancelable: true }
    );
  };

 
  return (
    <View>
          <Image source={{ uri: XeMay.hinh_anh_PH51025 }} style={{width: 100, height: 100}}/>
          <Text>Tên xe:  {XeMay.ten_xe_ph51025}</Text>
      <Text>giá xe:{XeMay.gia_xe_PH51025}</Text>
      <Text>Màu xe:{XeMay.mau_xe_PH51025}</Text>
      <Text>Mô tả xe:{XeMay.mo_ta_PH51025}</Text>
      <TouchableOpacity onPress={() => handleEdit()}>
        <Text style={{color: 'blue'}}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete()}>
        <Text style={{ color: 'blue' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default XeMayItem
