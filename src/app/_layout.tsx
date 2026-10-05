import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
     <Stack>
       <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: 'Accuiel' }} />
      <Stack.Screen name="About" options={{ title: 'About' }} />
      <Stack.Screen name="360" options={{ title: 'B360' }} />
      <Stack.Screen name="voyage" options={{ title: 'Voyage' }} />
    </Stack>
  );
}