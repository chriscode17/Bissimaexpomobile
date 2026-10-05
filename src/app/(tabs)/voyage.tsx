import { StyleSheet, Text, View } from 'react-native';

export default function voyageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Voyage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F2E8DA",
     justifyContent: "center",
     alignItems: "center",
  
  },
  text: {
    color:'#25292e' ,
  },
});
