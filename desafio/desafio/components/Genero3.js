import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
export default function Genero3() {

const LIBROS = [
   {
    name: 'Hamlet',
    author: 'William Shakespeare',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hamlet_und_Horatio_auf_dem_Friedhof_%28Eug%C3%A8ne_Ferdinand_Victor_Delacroix%29.jpg/200px-Hamlet_und_Horatio_auf_dem_Friedhof_%28Eug%C3%A8ne_Ferdinand_Victor_Delacroix%29.jpg',
    },
      {
    name: 'El rey Lear',
    author: 'William Shakespeare',
    image:'https://shakespeareobra.files.wordpress.com/2008/08/lear.jpg',
    },
      {
    name: 'El mercader de Venecia',
    author: 'William Shakespeare',
    image:'https://covers.alibrate.com/b/59872e94cba2bce50c1bbc16/e79300a7-d7bc-4e36-b5ad-27204a7688da/share',
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
            
    </ListItem>
    
    )
    }//cierra el if
    
  }

  )
)

}