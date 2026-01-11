import { Text, TextInput, TouchableOpacity } from "react-native";

import {SafeAreaView} from 'react-native-safe-area-context';

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
      <Text>English (US)</Text>

      <TextInput style={{ height: 60, borderColor: 'grey', borderWidth: 1 , borderRadius: 8, margin: 10, paddingLeft: 10}} 
      placeholder="Mobile number or email"/>

        <TextInput style={{ height: 60, borderColor: 'grey', borderWidth: 1 , borderRadius: 10, margin: 10, paddingLeft: 10, marginTop: 10}} 
      placeholder="Password"/>

      <TouchableOpacity
        style={{
          backgroundColor: "#1877F2",
          height: 50,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Log In
        </Text>
      </TouchableOpacity>

      <Text>Forgot Password?</Text>



    </SafeAreaView>
  );
}
