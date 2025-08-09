import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const Reanimated2 = () => {
    const traanslateX = useSharedValue(0)
    const traanslateY = useSharedValue(0)
    const rotate = useSharedValue('0deg')
    const scale = useSharedValue(1)
    const opacity = useSharedValue(1)


    const boxStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateX: traanslateX.value },
                { translateY: traanslateY.value },
                { rotate: rotate.value },
                { scale: scale.value },
            ]
        }
    })

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Animated.View
                style={[{
                    backgroundColor: '#fff',
                    width: 90,
                    height: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }, boxStyle]}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>A</Text>
            </Animated.View>


            <TouchableOpacity
                onPress={() => {
                    if (traanslateX.value == 0) {
                        traanslateX.value = withTiming(100, { duration: 1000 })
                    } else {
                        traanslateX.value = withTiming(0, { duration: 1000 })
                    }
                }}
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#A6B28B',
                    padding: 10,
                    marginHorizontal: 50,
                    borderRadius: 10
                }}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>Move Lft & Rgt</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    if (traanslateY.value == 0) {
                        traanslateY.value = withTiming(100, { duration: 1000 })
                    } else {
                        traanslateY.value = withTiming(0, { duration: 1000 })
                    }
                }}
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#A6B28B',
                    padding: 10,
                    marginHorizontal: 50,
                    borderRadius: 10
                }}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>Move Up & Dwn</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    if (rotate.value == '0deg') {
                        rotate.value = withTiming('180deg', { duration: 1000 })
                    } else {
                        rotate.value = withTiming('0deg', { duration: 1000 })
                    }
                }}
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#A6B28B',
                    padding: 10,
                    marginHorizontal: 50,
                    borderRadius: 10
                }}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>Move Up & Dwn</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    if (scale.value == 1) {
                        scale.value = withSpring(0.8)
                    } else {
                        scale.value = withTiming(1)
                    }
                }}
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#A6B28B',
                    padding: 10,
                    marginHorizontal: 50,
                    borderRadius: 10
                }}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>Scale it</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    if (traanslateX.value == 0) {
                        traanslateX.value = withTiming(50, { duration: 1000 })
                        rotate.value = withTiming('360deg', { duration: 1000 })
                        scale.value = withTiming(2, { duration: 1000 })
                    } else {
                        traanslateX.value = withTiming(0, { duration: 1000 })
                        rotate.value = withTiming('0deg', { duration: 1000 })
                        rotate.value = withTiming('0deg', { duration: 1000 })
                        scale.value = withTiming(1, { duration: 1000 })
                    }
                }}
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#A6B28B',
                    padding: 10,
                    marginHorizontal: 50,
                    borderRadius: 10
                }}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>Combination(1)</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    if (opacity.value == 1) {
                        opacity.value = withSpring(0.6)
                        scale.value = withSpring(0.8)
                        traanslateX.value = withSpring(50)
                    } else {
                        opacity.value = withTiming(1)
                        scale.value = withTiming(1)
                        traanslateX.value = withTiming(0)
                    }
                }}
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    backgroundColor: '#A6B28B',
                    padding: 10,
                    marginHorizontal: 50,
                    borderRadius: 10
                }}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: 'bold' }}>Combination(2)</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Reanimated2

const styles = StyleSheet.create({})