import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
export default function Genero2() {

const LIBROS = [
  {
    name: 'La paciente silenciosa',
    author: 'Alex Michaelides',
    image:'https://m.media-amazon.com/images/I/41R0uVX8eEL.jpg',
    },
     {
    name: 'Las Doncellas',
    author: 'Alex Michaelides',
    image:'https://quelibroleo.com/images/libros/libro-1621595366.jpg',
    },
     {
    name:'The Maidens: the instant sunday times bestseller from the author of the silent patient',
    author: 'Alex Michaelides',
    image:'https://m.media-amazon.com/images/I/41wY7ckH5eL.jpg',
    },
    ];
return(
  LIBROS.map( (LIBROS,i)=>{
    {
    return(
      <ListItem key={i}>
      <Avatar rounded source={{uri:LIBROS.image}}/>
      <ListItem.Content>
      <ListItem.Title> {LIBROS.name} </ListItem.Title>
            <ListItem.Subtitle> {LIBROS.author} </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
    </ListItem>
    
    )
    }//cierra el if
    
  }

  )
)

}