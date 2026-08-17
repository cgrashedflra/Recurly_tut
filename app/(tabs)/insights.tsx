import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5" edges={["top", "bottom"]}>
      <View>
        <Text>Insights</Text>
      </View>

    </SafeAreaView >
  )
}
export default Insights