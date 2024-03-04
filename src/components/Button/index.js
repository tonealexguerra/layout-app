import { StyleSheet, TouchableHighlight, Text } from "react-native";

export function Button(){
    return (
        <TouchableHighlight activeOpacity={0.4} underlayColor='#d4d4d4' style={styles.buttonContainer} onPress={()=>alert('bla')}>
            <Text style={styles.button}>PRÓXIMA TELA</Text>
        </TouchableHighlight>
    )  
}

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#7A9C42',
        width:130,
        height:45,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom:20,
      },
      button:{
        color:'#FFF',
        height:'100%',
        textAlign: 'center',
        textAlignVertical: 'center',
      }
});