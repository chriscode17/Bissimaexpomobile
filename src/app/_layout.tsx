import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
     <Stack>
       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: 'Accuiel' }}/>
      <Stack.Screen name="about" options={{ title: 'Profil' }} />
      <Stack.Screen name="360" options={{ title: 'Bissima Horizon 360' }} />
      <Stack.Screen name="voyage" options={{ title: 'Bissima international' }} />
    </Stack>
  );
}