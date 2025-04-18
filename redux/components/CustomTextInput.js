// components/CustomTextInput.js
import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    label: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#fff',
    },
});

export default CustomTextInput;
