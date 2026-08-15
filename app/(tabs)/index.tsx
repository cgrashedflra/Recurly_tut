import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onBoarding" className="mt-4 rounded bg-sky-700 text-white p-4">Go to Onboarding</Link>
      <Link href='/Subscriptions/claude'>Claude Subs</Link>
    </View>
  );
}