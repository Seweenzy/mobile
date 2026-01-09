import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ed7070",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", padding:30 }}>Hello, my name is Seweenzy and I welcome you to my first mobile app!</Text>
      
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop:5}}>Thanks for stopping by!</Text>
    </View>
  );
}
