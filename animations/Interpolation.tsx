import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Interpolation = () => {
    const translateX = useRef(new Animated.Value(0)).current
    const dissapearing = useRef(new Animated.Value(1)).current
    const translateY = useRef(new Animated.Value(0)).current
    const scale = useRef(new Animated.Value(1)).current
    const rotate = useRef(new Animated.Value(0)).current

    const scalling = () => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 2,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start()
    }

    const startAnim = () => {
        Animated.sequence([
            Animated.timing(translateX, {
                toValue: 100,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(translateX, {
                toValue: -100,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(translateX, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start()
    }

    const jump = () => {
        Animated.sequence([
            Animated.timing(translateY, {
                toValue: -100,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(translateY, {
                duration: 300,
                useNativeDriver: true,
                toValue: 0
            })
        ]).start()
    }

    const dissapear = () => {
        Animated.sequence([
            Animated.timing(dissapearing, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(dissapearing, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start()
    }

    const rotatation = () => {
        Animated.sequence([
            Animated.timing(rotate, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(rotate, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start()
    }

    const rotateStyle = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })


    return (
        <View>
            <Animated.Text
                style={[
                    {
                        textAlign: 'center',
                        opacity: dissapearing,
                        color: '#fff',
                        fontSize: 19,
                        marginTop: 100,
                    },
                    {
                        transform: [
                            { scale: scale },
                            { translateY: translateY },
                            { translateX: translateX },
                            { rotate: rotateStyle }
                        ]
                    }
                ]}>
                Interpolation
            </Animated.Text>


            <View style={{ backgroundColor: "#fff", height: 1, width: "100%",marginTop:-5 }} />

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={jump}
                style={styles.button}
            >
                <Text style={styles.btnText}>Jump</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={dissapear}
                style={styles.button}
            >
                <Text style={styles.btnText}>Disappear</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={startAnim}
                style={styles.button}
            >
                <Text style={styles.btnText}>X direction</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={scalling}
                style={styles.button}
            >
                <Text style={styles.btnText}>Scale it</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={rotatation}
                style={styles.button}
            >
                <Text style={styles.btnText}>Rotate it</Text>
            </TouchableOpacity>

            <View
                style={{
                    marginTop: 10,
                    borderRadius: 25,
                    flexDirection: 'row'
                }}>
                <TouchableOpacity activeOpacity={0.5} style={[styles.button, { paddingHorizontal: 30 }]}>
                    <Text style={styles.btnText}>expand it</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={[styles.button, { paddingHorizontal: 30, marginLeft: -20 }]}>
                    <Text style={styles.btnText}>shrink it</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Interpolation

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#A6B28B',
        padding: 10,
        marginHorizontal: 50,
        borderRadius: 50
    },
    btnText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    animatedView: {
        backgroundColor: '#F5C9B0',
        height: 100,
        width: 100
    }
})
