import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { runOnJS } from 'react-native-worklets'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const Like2 = () => {
    const likeScale = useSharedValue(1)
    const opacity = useSharedValue(1)
    const rotate = useSharedValue('0deg')

    const startAnimation = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { scale: likeScale.value },
                { rotate: rotate.value }
            ]
        }
    })

    const gestureHandler = Gesture.Tap().numberOfTaps(2).onEnd(() => {
        likeScale.value = withSpring(2),
            opacity.value = withSpring(3),
            rotate.value = withTiming('45deg', { duration: 100 }, () => {
                rotate.value = withTiming('-45deg', { duration: 200 }, () => {
                    rotate.value = withTiming('0deg', { duration: 200 })
                })
            })
        setTimeout(() => {
            likeScale.value = withSpring(1),
                opacity.value = withSpring(1)
        }, 400);
    })

    // const handlerFunc = () => {

    // }

    return (
        <GestureDetector gesture={gestureHandler}>
            <Animated.Image
                style={[{
                    marginHorizontal: 185,
                    width: 50,
                    height: 50
                }, startAnimation]}
                source={require('../assets/heart.png')} />
        </GestureDetector>
    )
}

export default Like2