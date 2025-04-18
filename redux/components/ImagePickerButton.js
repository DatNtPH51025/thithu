// components/ImagePickerButton.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePickerButton = () => {
    const [imageUri, setImageUri] = useState(null);

    const selectImage = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 1,
        });

        if (!result.didCancel && result.assets && result.assets.length > 0) {
            setImageUri(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={selectImage} style={styles.button}>
                <Text style={styles.buttonText}>Chọn ảnh</Text>
            </TouchableOpacity>

            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { alignItems: 'center', marginVertical: 12 },
    button: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 10,
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    imagePreview: {
        marginTop: 16,
        width: 200,
        height: 200,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default ImagePickerButton;
