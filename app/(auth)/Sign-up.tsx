import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
    return (
        <View>
            <Text>Sign-Up</Text>
            <Link href="/(auth)/Sign-in" className='text-shadow-mauve-400'>Already have an account?</Link>
        </View>
    )
}

export default SignUp