import { Stack } from 'expo-router';
import { SessionProvider, useSession } from '@/ctx';
import { SplashScreenController } from '@/splash';
export default function RootLayout() {
  return (
    <SessionProvider>
      <SplashScreenController />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: 'Accuiel' }}/>
        <Stack.Screen name="about" options={{ title: 'Profil' }} />
        <Stack.Screen name="360" options={{ title: 'Bissima Horizon 360' }} />
        <Stack.Screen name="voyage" options={{ title: 'Bissima international' }} />
      </Stack>
    </SessionProvider>
  );
}
function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="sign-in" />
      </Stack.Protected>
    </Stack>
  );
}