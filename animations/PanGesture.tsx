import { View, Text } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const PanGesture = () => {
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const savedX = useSharedValue(0)
    const savedY = useSharedValue(0)

    const gestureHandler = Gesture.Pan().onStart(() => {
        console.log('pan started');
    }).onUpdate((e) => {
        translateX.value = savedX.value + e.translationX
        translateY.value = savedY.value + e.translationY
    }).onEnd(() => {
        savedX.value = translateX.value
        savedY.value = translateY.value
    })

    const startAnimation = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX:translateX.value},
                {translateY:translateY.value}
            ]
        }
    })

    return (
        <View>
            <GestureDetector gesture={gestureHandler}>
                <Animated.View
                    style={[{
                        backgroundColor: 'orange',
                        width: 100,
                        height: 100
                    },
                    startAnimation
                    ]}
                />
            </GestureDetector>
        </View>
    )
}

export default PanGesture