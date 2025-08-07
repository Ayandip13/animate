import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const NoLibrary = () => {
    const [position, setPosition] = useState(0);
    useEffect(() => {
        let interval: NodeJS.Timeout
        interval = setInterval(() => {

            interval = setInterval(() => {
                setPosition((prev) => prev < 200 ? prev + 5 : 0);
            }, 500);
            return () => clearInterval(interval)
        })
    }, [])

    return (
        <View style={[styles.box, { marginLeft: position }]} />
    )
}

export default NoLibrary

const styles = StyleSheet.create({
    box: {
        height: 150,
        width: 150,
        backgroundColor: 'yellow',
    }
})