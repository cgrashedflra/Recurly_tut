import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top", "bottom"]}>
      <View className="flex-1 px-5 py-4">
        {/* Header */}
        <Text className="text-7xl font-sans-extrabold">
          Home
        </Text>

        {/* Navigation Links */}
        <View className="gap-3">
          <Link href="/onBoarding" asChild>
            <Text className="rounded bg-primary text-white p-4 font-sans-semibold">
              Go to Onboarding
            </Text>
          </Link>

          <Link href="/(auth)/Sign-in" asChild>
            <Text className="rounded bg-primary text-white p-4 font-sans-semibold">
              Go to Sign in
            </Text>
          </Link>

          <Link href="/(auth)/Sign-up" asChild>
            <Text className="rounded bg-primary text-white p-4 font-sans-semibold">
              Go to Sign up
            </Text>
          </Link>
        </View>

        {/* Subscription Links */}
        <View className="mt-8 gap-3">
          <Text className="text-lg font-sans-bold text-primary mb-2">
            Subscriptions
          </Text>

          <Link href="/subscriptions/leo" asChild>
            <Text className="rounded bg-accent text-white p-3 font-sans-medium">
              Leo Subscription
            </Text>
          </Link>

          <Link
            href={{
              pathname: "/subscriptions/[id]",
              params: { id: "claude" },
            }}
            asChild
          >
            <Text className="rounded bg-accent text-white p-3 font-sans-medium">
              Claude Max Subscription
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}