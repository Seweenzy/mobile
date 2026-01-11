import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f7a8a8",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", padding:30, color:'#ffffff'}}>Hello, my name is Seweenzy and I welcome you to my first mobile app!</Text>
      
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop:5, color:'#ffffff'}}>Thanks for stopping by!</Text>

      <Image source={require('../assets/images/icon.png')}/>
    </View>
  );
}
