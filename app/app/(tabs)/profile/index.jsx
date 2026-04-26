import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text } from "react-native";
import { router } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "yellow", flex: 1 }}>
      <Text>This is Profile Screen</Text>

      <Pressable
        onPress={() => {
          router.push("/(tabs)/profile/my-account");
        }}
        style={{
          height: 50,
          backgroundColor: "red",
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: "50",
        }}
      >
        <Text>My Account</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          router.push("/(tabs)/profile/my-name");
        }}
        style={{
          height: 50,
          backgroundColor: "red",
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: "50",
        }}
      >
        <Text>My Name</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Index;
