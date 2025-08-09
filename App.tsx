import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NoLibrary from './animations/NoLibrary'
import AnimatedBasic from './animations/AnimatedBasic'
import Value from './animations/Value'
import Value2 from './animations/Value2'
import Value3 from './animations/Value3'
import Interpolation from './animations/Interpolation'
import Reanimated1 from './animations/Reanimated1'
import Reanimated2 from './animations/Reanimated2'

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}>Animations</Text>
      {/* <NoLibrary /> */}
      {/* <AnimatedBasic /> */}
      {/* <Value /> */}
      {/* <Value2 />
      <Value3 /> */}
      {/* <Interpolation /> */}  //Using core Animated API
      {/* <Reanimated1 />    //Using Reanimated */}
      {/* <Reanimated2 />    //Using Reanimated(2) */}

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    backgroundColor: '#1C352D'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 40,
    textDecorationLine: 'underline'
  }
})