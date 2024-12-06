import { StyleSheet, Text, View } from "react-native"

//การส่งออกรูปแบบไปใช้งาน
export default function HeaderApp(params) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ห้องสมุด</Text>
    </View> 
  )
}

//การสร้าง style รูปแบบกำหนดเอง
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f97316",
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontSize:21,
    padding:5
  },
});
