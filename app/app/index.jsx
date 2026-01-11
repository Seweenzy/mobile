import { Text, View, Image } from "react-native";

import {SafeAreaView} from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f7a8a8",
      }}
    >
      <Text 
      style={{ fontSize: 20, fontWeight: "bold", paddingHorizontal:30, color:'#ffffff'}}>
        Hello, my name is Seweenzy and I welcome you to my first mobile app!</Text>
      
      <Text 
      style={{ fontSize: 16, fontWeight: "bold", marginTop:5, color:'#ffffff', paddingHorizontal:30}}>
        Thanks for stopping by!</Text>

      <Image style={{ width: 100, height: 100, marginTop: 20, marginHorizontal:30}} source={require('../assets/images/icon.png')}/>
    </SafeAreaView>
  );
}
