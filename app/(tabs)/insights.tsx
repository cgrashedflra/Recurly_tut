import { styled } from "nativewind";
import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5" edges={["top", "bottom"]} >
      <View className="">
        <Text>Insights</Text>
      </View>

    </SafeAreaView >
  )
}
export default Insights