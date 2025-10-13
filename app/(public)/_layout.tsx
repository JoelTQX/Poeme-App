import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Mount the tabs group */}
      <Stack.Screen name="tabs" options={{ headerShown: false }} />

      {/* Non-tab screens */}
      <Stack.Screen name="difference" options={{ headerShown: false }} />
      <Stack.Screen name="about-us" options={{ headerShown: false }} />
      <Stack.Screen name="pricing" options={{ headerShown: false }} />
    </Stack>
  );
}
