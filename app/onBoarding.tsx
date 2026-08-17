import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const OnBoarding = () => {
    return (
        <View>
            <Text>onBoarding</Text>
            <Link href="/(auth)/Sign-in" className='mx-3 py-4'>Log-in</Link>
        </View>
    )
}

export default OnBoarding