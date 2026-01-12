import { Text, TextInput, TouchableOpacity, Image, View} from "react-native";

import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
    >
      <TouchableOpacity><Icon name='arrow-left' size={15} color="grey" /></TouchableOpacity>
      <Text style={{ fontWeight: "medium", fontSize: 12, color:'grey', textAlign:'center', marginTop: 30}}>English (US)  <TouchableOpacity><Icon name="chevron-down" size={12} color="grey" /></TouchableOpacity></Text>

      <Image source={require('../assets/images/favicon.jpg')} style={{ alignSelf: 'center', marginTop: 100, }} />

      
        
        <TextInput style={{ height: 60, borderColor: '#D3D3D3', borderWidth: 1 , borderRadius: 15, paddingLeft: 10, marginTop:70}} 
        placeholder="Mobile number or email" />
      

        <TextInput style={{ height: 60, borderColor: '#D3D3D3', borderWidth: 1 , borderRadius: 15,  paddingLeft: 10, marginTop: 10}} 
      placeholder="Password"/>

      <TouchableOpacity
        style={{
          backgroundColor: "#1a70e2",
          height: 50,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
          Log In
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 10, color: "black", textAlign: "center", fontWeight: "medium", marginTop:15 }}>Forgot Password?</Text>

<TouchableOpacity
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 150,
          borderColor: '#075186',
          borderWidth: 1
        }}
      >
        <Text style={{ color: '#075186', fontSize: 14, fontWeight: "medium" }}>
          Create new account
        </Text>
      </TouchableOpacity>

    <Image source={require('../assets/images/Meta_real.png')} style={{ height: 20, width: 60, alignSelf: 'center', marginTop: 20  }} />


    </SafeAreaView>
  );
}
