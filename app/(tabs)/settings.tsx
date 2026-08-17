import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.redBox} />
            <Text>Settings</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    redBox: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
    },
});

export default Settings