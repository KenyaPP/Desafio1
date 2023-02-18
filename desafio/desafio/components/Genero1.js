import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import {ListItem,Avatar,} from 'react-native-elements';
export default function Genero1() {

const LIBROS = [
  {
    name: 'Combre Barroscas',
    author: 'Emily Brontë',
    image:'https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625454187128ea32cdb140e8_6034d7d1f3e0f5072bb2b1ca_Cumbres-borrascosas-emily-bronte-editorial-alma.jpeg',
    },
     {
    name: 'No coward soul is mine',
    author: 'Emily Brontë',
    image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91tZ8XE6h5L.jpg',
    },
     {
    name: 'The Brontë Sisters: The Complete Novels',
    author: 'Emily Brontë',
    image:'https://m.media-amazon.com/images/I/51xF2B6cIEL.jpg',
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