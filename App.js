import React from 'react';
import {View, Text,Image, StyleSheet} from 'react-native';

const App = () => {
  return (
<View style={styles.container}>
   <Text style={styles.text}>Hello Rumi</Text>
    <Image source={{uri: 'https://yt3.ggpht.com/yti/ANoDKi5x4sd_khqUsXDd8-M-JLuDa6fuxwAKJ-9Dwdhl1g=s88-c-k-c0x00ffffff-no-rj-mo'}} style ={styles.img} />
</View>
  );
};

// <style> this thing actually
const styles = StyleSheet.create({
 container: {
   flex:1, justifyContent:'center', alignItems:'center',
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