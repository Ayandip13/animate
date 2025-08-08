import { Animated, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Value3 = () => {
    const basePosition = useRef(new Animated.Value(50)).current
    const oscilation = useRef(new Animated.Value(-50)).current

    const combinedPosition = Animated.add(basePosition, oscilation)

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(oscilation, {
                toValue: 50,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(oscilation, {
                toValue: -50,
                duration: 500,
                useNativeDriver: false,
            }),
        ]).start(startAnimation)
    }


    useEffect(() => {
        startAnimation()
    }, [])

    return (
        <View>
            <Animated.View
                style={[styles.circle, { transform: [{ translateX: combinedPosition }] }]}
            />
        </View>
    )
}

export default Value3

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'green',
        marginTop: 10,
        marginLeft: 50
    },
})
