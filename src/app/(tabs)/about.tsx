import { StyleSheet, Text, View } from 'react-native';
export default function AboutScreen() {
  return (
    <View style={styles.container}>
     <Text style={styles.text}>PROFIL</Text>
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
