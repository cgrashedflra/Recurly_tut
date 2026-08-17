import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
    return (
        <View>
            <Text>Sign-in</Text>
            <Link href="/(auth)/Sign-up" className='text-accent'>Don't have an account?</Link>
        </View>
    )
}

export default SignIn