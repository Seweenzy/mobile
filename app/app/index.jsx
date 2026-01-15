import { Text, TextInput, TouchableOpacity, Image, View} from "react-native";

import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from "../components/button";
import Input from "../components/input";

import {useState} from 'react'

export default function Index() {

  
  const [lightMode,setlightMode]=useState(true)
  
  const[email, setEmail]= useState('')

  console.log(email)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: lightMode ? 'pink': 'grey',
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
    >{/*
      <TouchableOpacity><Icon name='arrow-left' size={15} color="grey" /></TouchableOpacity>
      <Text style={{ fontWeight: "medium", fontSize: 12, color:'grey', textAlign:'center', marginTop: 30}}>English (US)  <TouchableOpacity><Icon name="chevron-down" size={12} color="grey" /></TouchableOpacity></Text>

      <Image source={require('../assets/images/facebook-logo.jpg')} style={{ height:100, width: 100, alignSelf: 'center', marginTop: 10, }} />

      
        
        <TextInput onChangeText={(text)=>{setEmail(text)}} style={{ height: 60, borderColor: '#D3D3D3', borderWidth: 1 , borderRadius: 15, paddingLeft: 10, marginTop:10}} 
        placeholder="Mobile number or email" />
      

        <TextInput style={{ height: 60, borderColor: '#D3D3D3', borderWidth: 1 , borderRadius: 15,  paddingLeft: 10, marginTop: 10}} 
      placeholder="Password"/>

     <TouchableOpacity  onPress={()=>setlightMode(!lightMode)}
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
          marginTop: 10,
          borderColor: '#075186',
          borderWidth: 1
        }}
      >
        <Text style={{ color: '#075186', fontSize: 14, fontWeight: "medium" }}>
          Create new account
        </Text>
      </TouchableOpacity>

   <Image source={require('../assets/images/Meta_real.png')} style={{ height: 20, width: 60, alignSelf: 'center', marginTop: 20  }} />
      

     <View style={{gap:20}}>
       <Button  style={{backgroundColor:'blue', marginTop:20}} text={'Click Me'}/>
      <Button style={{backgroundColor:'grey'}} text={'Press Me'}/>
      <Button style={{backgroundColor:'orange'}} text={'Sign Up'}/>
      <Button style={{backgroundColor:'pink'}}text={'Sign In'}/>
     </View>
     */}

    <View style={{marginTop:40, gap:20}}>
       <Input type= {'default'}label ={'Full name'} placeholder={'Enter your full name'}/>
     <Input type= {'email-address'}label ={'Email address'} placeholder={'Enter your email address'}/>
     <Input type= {'number-pad'} label ={'Phone number'} placeholder={'Enter your phone number'}/>
    </View>

    <TouchableOpacity onPress={()=>setlightMode(!lightMode)} style={{backgroundColor:'blue', height: 50, justifyContent:'center',
       marginTop:40, borderRadius:15
        }}>

      <Text style={{alignSelf:'center', color:'white', fontWeight:'bold', fontSize:18}}>Submit</Text>

    </TouchableOpacity>

    </SafeAreaView>
  );
}
