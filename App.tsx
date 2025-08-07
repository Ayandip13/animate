import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NoLibrary from './animations/NoLibrary'
import AnimatedBasic from './animations/AnimatedBasic'
import Value from './animations/Value'

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}>Animations</Text>
      {/* <NoLibrary /> */}
      {/* <AnimatedBasic /> */}
      <Value />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    backgroundColor: '#222'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 40,
    textDecorationLine: 'underline'
  }
})