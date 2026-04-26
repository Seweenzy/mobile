import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Pressable } from "react-native";
import { router } from "expo-router";

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>This is Settings Screen</Text>

      <Pressable
        onPress={() => {
          router.push("../account");
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
        <Text>Go to Settings Account Page!</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Settings;
