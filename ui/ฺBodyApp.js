import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

//การส่งออกรูปแบบไปใช้งาน
export default function BodyApp(params) {
  return (
    <View style={styles.container}>
      <View style={styles.boxSearch}>
        <TextInput placeholder="กรุณากรอกข้อมูลที่ต้องการค้นหา" />
      </View>

      <View style={styles.boxBar}>
        {tabBar.map((item) => (
          <TouchableOpacity style={styles.buttonBar} key={item.title}>
            <Text style={styles.textBar}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const tabBar = [
  {
    title: "ทั้งหมด",
    value: "all",
  },
  {
    title: "รหัสหนังสือ",
    value: "b_id",
  },
  {
    title: "ชื่อเรื่อง",
    value: "b_name",
  },
  {
    title: "ผู้เขียน",
    value: "b_write",
  },
];

//การสร้าง style รูปแบบกำหนดเอง
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  boxSearch: {
    padding: 15,
    borderColor: "#f97316",
    borderWidth: 1,
    borderRadius: 9,
    width: "80%",
    marginTop: 15,
  },
  boxBar: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    height: 65,
    marginTop: 10,
    gap:3
  },
  buttonBar: {
    flex:1,
    height: 45,
    padding: 5,
    backgroundColor: "#f97316",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  textBar: {
    color: "#fff",
    fontSize: 16,
  },
});
