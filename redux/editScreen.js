import { StyleSheet, Text, View, Alert, Image, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListXeMay, updateXeAct } from './XeMayAction';
import CustomTextInput from './components/CustomTextInput';
import CustomButton from './components/Buttonsomponent';
import * as ImagePicker from 'expo-image-picker';

const EditXe = ({ route, navigation }) => {
    const { XeMay } = route.params;
    const [ten_xe_ph51025, setName] = useState(XeMay.ten_xe_ph51025);
    const [hinh_anh_PH51025, setImage] = useState(XeMay.hinh_anh_PH51025);
    const [gia_xe_PH51025, setPrice] = useState(XeMay.gia_xe_PH51025);
    const [mau_xe_PH51025, setColor] = useState(XeMay.mau_xe_PH51025);
    const [mo_ta_PH51025, setMota] = useState(XeMay.mo_ta_PH51025);

    const dispatch = useDispatch();

    // Request permission to access media library
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Ứng dụng cần quyền truy cập thư viện ảnh để chọn hình.');
            }
        })();
    }, []);

    // Pick an image from the library
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // Handle edit product
    const clickEdit = () => {
        const editedProduct = {
            ten_xe_ph51025: ten_xe_ph51025,
            hinh_anh_PH51025: hinh_anh_PH51025,
            gia_xe_PH51025: gia_xe_PH51025,
            mau_xe_PH51025: mau_xe_PH51025,
            mo_ta_PH51025: mo_ta_PH51025
        };

        dispatch(updateXeAct(XeMay.id, editedProduct));
        dispatch(getListXeMay());

        Alert.alert("Sửa sản phẩm thành công!");
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sửa Sản Phẩm</Text>

            <CustomTextInput
                placeholder='Tên xe'
                value={ten_xe_ph51025}
                onChangeText={setName}
            />
            <CustomTextInput
                placeholder='Giá xe'
                value={gia_xe_PH51025}
                onChangeText={setPrice}
            />

            {/* Chọn ảnh xe */}
            <Button title="Chọn ảnh xe" onPress={pickImage} />

            {/* Hiển thị ảnh đã chọn */}
            {hinh_anh_PH51025 !== "" && (
                <Image source={{ uri: hinh_anh_PH51025 }} style={styles.image} />
            )}

            <CustomTextInput
                placeholder='Màu xe'
                value={mau_xe_PH51025}
                onChangeText={setColor}
            />
            <CustomTextInput
                placeholder='Mô tả xe'
                value={mo_ta_PH51025}
                onChangeText={setMota}
            />

            <CustomButton
                title='Sửa'
                onPress={clickEdit}
                backgroundColor='#2196F3'
            />
        </View>
    );
};

export default EditXe;

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    image: {
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom: 12,
        borderRadius: 8,
    },
});
