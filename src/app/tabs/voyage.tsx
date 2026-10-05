import { StyleSheet, Image, View } from 'react-native';

export default function voyageScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../image2/bissima1.png')} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F2E8DA",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'#25292e' ,
  },
});
