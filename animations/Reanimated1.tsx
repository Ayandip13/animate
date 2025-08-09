import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const Reanimated1 = () => {
    // Shared values: hold animation state
    const X = useSharedValue(0) // X position of the circle
    const Y = useSharedValue(0) // Y position of the circle

    // Animated style: updates when shared values change
    const animatedBoxStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: X.value }, // Move horizontally
                { translateY: Y.value }  // Move vertically
            ],
        }
    })

    // Handler to toggle X movement
    const handlerX = () => {
        if (X.value == 100) {
            // Move back to original position
            X.value = withSpring(0)
        } else {
            // Move 100 units to the right
            X.value = withSpring(100)
        }
    }

    // Handler to toggle Y movement
    const handlerY = () => {
        if (Y.value == 0) {
            // Move 100 units upward
            Y.value = withSpring(-100)
        } else {
            // Move back to original position
            Y.value = withSpring(0)
        }
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Animated.View
                style={[
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#A6B28B',
                        height: 100,
                        width: 100,
                        borderRadius: 50
                    },
                    animatedBoxStyle // Apply animation style here
                ]}
            >
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Hubba</Text>
            </Animated.View>

            <TouchableOpacity
                onPress={handlerX}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Click to move on X direction
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handlerY}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Click to move on Y direction
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Reanimated1

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#A6B28B',
        padding: 10,
        marginHorizontal: 50,
        borderRadius: 50,
        paddingHorizontal: 30
    },
    buttonText: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold'
    }
})
