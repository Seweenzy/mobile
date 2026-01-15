import { TextInput, View, StyleSheet, Text } from "react-native"


const Input=({placeholder, label, type})=>{

    return(
        <View style={styles.container}>
            <Text style={{marginBottom:10, fontWeight:'medium', fontSize:16}}>{label}</Text>
            <TextInput keyboardType ={type} style={{paddingLeft:20, height:50, backgroundColor:'white', borderRadius:12}} placeholderTextColor={'black'} placeholder={placeholder}/>
        </View>
    )
}

const styles= StyleSheet.create({

    container:{
        //backgroundColor:'white',
        //borderRadius:12,
        justifyContent:'center',
        //height:50,
        
        
        
    }

}
)
  

export default Input; 