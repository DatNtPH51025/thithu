import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import CustomTextInput from './components/CustomTextInput';
import CustomButton from './components/Buttonsomponent';
import { addXeAct, getListXeMay } from './XeMayAction';

const AddXe = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [ten_xe_ph51025, setName] = useState("");
    const [hinh_anh_PH51025, setImage] = useState("");
    const [gia_xe_PH51025, setPrice] = useState("");
    const [mau_xe_PH51025, setColor] = useState("");
    const [mo_ta_PH51025, setMota] = useState("");

    // Xin quyền truy cập ảnh
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Ứng dụng cần quyền truy cập thư viện ảnh để chọn hình.');
            }
        })();
    }, []);

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

    const clickAdd = () => {
        const newXe = {
            ten_xe_ph51025,
            hinh_anh_PH51025,
            gia_xe_PH51025,
            mau_xe_PH51025,
            mo_ta_PH51025
        };

        dispatch(addXeAct(newXe));
        dispatch(getListXeMay());

        Alert.alert("Thêm Xe thành công!");
        navigation.navigate("xeMayScreen");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thêm Xe</Text>
            <CustomTextInput placeholder="Tên xe" value={ten_xe_ph51025} onChangeText={setName} />
            <CustomTextInput placeholder="Giá xe" value={gia_xe_PH51025} onChangeText={setPrice} />

            <Button title="Chọn ảnh xe" onPress={pickImage} />
            {hinh_anh_PH51025 !== "" && (
                <Image source={{ uri: hinh_anh_PH51025 }} style={styles.image} />
            )}

            <CustomTextInput placeholder="Màu xe" value={mau_xe_PH51025} onChangeText={setColor} />
            <CustomTextInput placeholder="Mô tả xe" value={mo_ta_PH51025} onChangeText={setMota} />

            <CustomButton title="Thêm" onPress={clickAdd} backgroundColor="#2196F3" />
        </View>
    );
};

export default AddXe;

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
