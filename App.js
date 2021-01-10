import React, {useState} from 'react';
import {View, Text,Image, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { uuid } from 'uuid/v4';

const App = () => {

  const [items, setItems] = useState([
    {id:uuid, text: 'milk'},
    {id:uuid, text: 'water'},
    {id:uuid, text: 'juice'},
    {id:uuid, text: 'tea'},
  ]);

  return (
<View style={styles.container}>
  
   <Header title="shaaping listain"/>

  {/* <FlatList
    data={items}
    renderItem={({item})=> <Text>{item.text}</Text>}
    /> */}
  <FlatList
    data={items}
    renderItem={({item})=> <ListItem item={item} />}
    />
   <Text style={styles.text}>Hello Rumi</Text>
    <Image source={{uri: 'https://yt3.ggpht.com/yti/ANoDKi5x4sd_khqUsXDd8-M-JLuDa6fuxwAKJ-9Dwdhl1g=s88-c-k-c0x00ffffff-no-rj-mo'}} style ={styles.img} />

</View>
  );
};
const deleteItem = (id)=>{
  setItems(prevItems =>{
    return prevItems.filter(item=> item.id != id);
  })
}
// <style> this thing actually
const styles = StyleSheet.create({
 container: {
   flex:1, justifyContent:'center', alignItems:'center',
   paddingTop:60
 },
 text:{
   color:'blue', fontSize:30
  },
  img:{
    width:100,
    height: 100,
    borderRadius: 100/2,
  } 
});



export default App;