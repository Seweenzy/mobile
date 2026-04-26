import { Tabs, Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="my-name" />
      <Stack.Screen name="my-account" />
    </Stack>
  );
};

export default ProfileLayout;
