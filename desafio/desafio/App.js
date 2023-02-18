import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import Genero1 from './components/Genero1'
import Genero2 from './components/Genero2'
import Genero3 from './components/Genero3'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>LIBROS</Text>
       <ScrollView style={styles.scrollstyle}>
      <Genero1/>
      <Genero2/>
      <Genero3/>
</ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#088A85',

  },
  text:{
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'#66498E',
    color:'#F3F310',
  },
 
});