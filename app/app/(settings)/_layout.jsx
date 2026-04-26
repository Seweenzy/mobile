import { Stack } from "expo-router";

const SettingsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="account" />
      <Stack.Screen name="manage-subscriptions" />
    </Stack>
  );
};
export default SettingsLayout;
