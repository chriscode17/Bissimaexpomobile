import { StyleSheet, Text, View } from 'react-native';

export default function _360() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>360</Text>
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
