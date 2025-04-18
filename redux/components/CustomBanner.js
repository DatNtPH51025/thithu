// components/CustomBanner.js
import React, { useEffect, useRef } from 'react'
import { Animated, Image, Text, View, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const CustomBanner = ({ imageUrl, title }) => {
    const scaleAnim = useRef(new Animated.Value(1)).current

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.05,
                    duration: 4000,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: true,
                }),
            ])
        ).start()
    }, [scaleAnim])

    return (
        <View style={styles.container}>
            <Animated.Image
                source={{ uri: imageUrl }}
                style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
                resizeMode="cover"
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default CustomBanner

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        marginVertical: 16,
    },
    image: {
        width: width * 0.9,
        height: 180,
        borderRadius: 16,
    },
    title: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
})
