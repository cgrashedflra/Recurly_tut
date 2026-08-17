import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
    return (
        <View>
            <Text>Sign-Up</Text>
            <Link href="/(auth)/Sign-in" className='text-accent'>Already have an account?</Link>
        </View>
    )
}

export default SignUp