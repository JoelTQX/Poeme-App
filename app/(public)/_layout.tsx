import { Stack } from 'expo-router';
// 1. Import your context
import { AssessmentProvider } from '../../src/context/SmileAssessmentContext';

export default function RootLayout() {
  return (
    // 2. Wrap your Stack with the Provider
    <AssessmentProvider>
      {/* 3. This Stack will find all your screens */}
      <Stack screenOptions={{ headerShown: false }}>
        
        {/*
          Because your files are in the 'Screens' subfolder,
          their names must include 'Screens/'.
        */}
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
        <Stack.Screen name="Screens/difference" options={{ headerShown: false }} />
        <Stack.Screen name="Screens/about-us" options={{ headerShown: false }} />
        <Stack.Screen name="Screens/pricing" options={{ headerShown: false }} />

        {/* You do NOT need to list all your other screens
          (like smileAssessmentPage1, blog1, etc.).
          Expo Router will find them automatically.
        */}

      </Stack>
    </AssessmentProvider>
  );
}

