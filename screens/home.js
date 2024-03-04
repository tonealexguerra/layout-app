import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Button } from '../src/components/Button';

export function Home() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBack}>
          <Image source={require('../src/images/balde.png')} />
        </View>
        <View style={styles.containerBlock}>
          <Text style={styles.title}>Criando nosso Primeiro Layout</Text>
          <Text style={styles.content}>Este app tem o objetivo de nos auxiliar a estruturar layouts e navegação entre telas</Text>

          <View style={styles.buttonContainer}>
            <Text style={styles.button}>PRÓXIMA TELA</Text>
          </View>

          <Button />
        </View>
        
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageBack:{
      width: '100%',
      height: '60%',
      backgroundColor:'#A8F6B0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerBlock:{
      flex:1,
      paddingHorizontal:25,
      paddingVertical:30
    },
    title:{
      fontSize:18,
      fontWeight:'bold',
      marginBottom:20
    },
    content:{
      fontSize:16,
      color:'#494949',
    },
    /*
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
    */

  });