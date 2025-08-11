import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { runOnJS } from 'react-native-worklets'

const Like = () => {
  const [liked, setLiked] = useState<boolean>(false)
  const likeY = useSharedValue(0)
  const likeScale = useSharedValue(1)
  const likeRot = useSharedValue('0deg')

  const startAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: likeY.value },
        { scale: likeScale.value },
        { rotateY: likeRot.value }
      ]
    }
  })

  const updateLike = () => {
    setLiked(liked)
    likeY.value = withSpring(-100)
    likeScale.value = withSpring(2)
    likeRot.value = withSpring('180deg')
    setTimeout(() => {
      likeY.value = withSpring(0)
      likeScale.value = withSpring(1)
      likeRot.value = withSpring('0deg')
    }, 1000);
  }
  const gestureHandler = Gesture.Tap().numberOfTaps(2).onEnd(() => {
    runOnJS(updateLike)()
  })


  return (
    <View>
      <GestureDetector gesture={gestureHandler}>
        <Animated.Image
          style={[{
            marginTop: 100,
            width: 50,
            height: 50,
            marginHorizontal: 185
          },
            startAnimation]}
          source={
            liked ? require('../assets/heart.png') :
              require('../assets/heart-outline.png')}
        />
      </GestureDetector>
    </View>
  )
}

export default Like