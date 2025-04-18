// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor = '#2196F3' }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 8,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CustomButton;
