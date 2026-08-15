import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
    return (
        <View>
            <Text>Sign-in</Text>
            <Link href="/(auth)/Sign-up" className='text-shadow-mauve-400'>Don't have an account?</Link>
        </View>
    )
}

export default SignIn