import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Value2 = () => {

    const zoomAnim = useRef(new Animated.Value(0)).current

    const startAnim = () => {
        Animated.timing(zoomAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(zoomAnim, {
                duration: 500,
                useNativeDriver: false,
                toValue: 0.9
            }).start(startAnim)
        })
    }

    useEffect(() => {
        startAnim()
    }, [])

    return (
        <View>
            <Animated.Text
                style={{
                    transform: [{ scale: zoomAnim }],
                    fontSize: 20,
                    color: '#fff',
                    textAlign: 'center'
                }}>Value2</Animated.Text>
        </View>
    )
}

export default Value2