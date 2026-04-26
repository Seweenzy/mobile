import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text } from "react-native";
import { router } from "expo-router";
const ManageSubscriptions = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to Manage Subscription page!!!</Text>

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

export default ManageSubscriptions;
