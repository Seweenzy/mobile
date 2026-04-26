import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text } from "react-native";
import { router } from "expo-router";

const Account = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "yellow", flex: 1 }}>
      <Text>This is Settings Account Screen</Text>

      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Text>Go back</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Account;
