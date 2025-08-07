import { StyleSheet, Text, View, Animated, useAnimatedValue } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Value = () => {

    // const position = useRef(new Animated.Value(10)).current
    //We're storing the Animated.Value(0) inside a ref, so it persist the values across re-renders, and we use current for the value itself.

    const position1 = useAnimatedValue(10)
    const position2 = useAnimatedValue(10)
    const position3 = Animated.add(position1, position2)
    // This is the newer method to use the animated values



    const xyValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current


    const startAnimation = () => {
        Animated.timing(position1, {
            toValue: 250,              // Animate from current value to 200
            duration: 1000,           // Duration: 1 second
            useNativeDriver: false   // Animation handled in JS thread
        }).start(() => {
            Animated.timing(position1, {
                toValue: 10,              // Animate from current value to 200
                duration: 1000,           // Duration: 1 second
                useNativeDriver: false   // Animation handled in JS thread
            }).start(startAnimation)
        })
    }

    const startXYAnimation = () => {
        Animated.timing(xyValue, {
            toValue: { x: 120, y: -120 },
            duration: 5000,
            useNativeDriver: false
        }).start()
    }


    useEffect(() => {
        // startAnimation()
        startXYAnimation()
    }, [])

    return (
        <View>
            {/* <Animated.View style={[styles.box, { marginLeft: position }]} /> */}
            {/* <Animated.View style={[styles.box3, { marginLeft: position }]} /> */}
            <Animated.View style={[styles.box2, { transform: xyValue.getTranslateTransform() }]} />
        </View>
    )
}

export default Value

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 150,
        backgroundColor: 'yellow',
        marginBottom: 10
    },
    box2: {
        marginTop: 20,
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: 'red',
        borderRadius: 50
    },
    // box3: {
    //     marginTop: 5,
    //     // marginLeft:10,
    //     height: 50,
    //     width: 50,
    //     borderRadius:50,
    //     backgroundColor: 'blue',
    // }
})