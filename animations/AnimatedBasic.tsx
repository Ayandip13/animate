import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const AnimatedBasic = () => {

    const position = useRef(new Animated.Value(10)).current
    //We're storing the Animated.Value(0) inside a ref, so it persist the values across re-renders, and we use current for the value itself.

    const startAnimation = () => {
        Animated.timing(position, {
            toValue: 250,              // Animate from current value to 200
            duration: 1000,           // Duration: 1 second
            useNativeDriver: false   // Animation handled in JS thread
        }).start()
    }

    useEffect(() => {
        startAnimation()
    }, [])

    return (
        <Animated.View style={[styles.box, { marginLeft: position }]} />
    )
}

export default AnimatedBasic

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 150,
        backgroundColor: 'yellow',
    }
})