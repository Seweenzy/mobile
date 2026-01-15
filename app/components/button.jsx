import { TouchableOpacity, Text } from "react-native"


const Button=({text, style})=>{

    return (

        <TouchableOpacity style={{backgroundColor:'purple', height:50, justifyContent:'center', borderRadius:12, ...style}}>

        <Text style={{alignSelf:'center'}}>{text}</Text>

        </TouchableOpacity>
        
    )
}

export default Button;

