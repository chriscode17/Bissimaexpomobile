import * as SplashScreen from 'expo-splash-screen';
import { Image, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./image2/bisima.png')} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
