import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
// import { Icon } from "react-native-vector-icons/dist/";
const ListItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.listitem}>
            <View style={styles.listitemView}>
                <Text style={styles.listitemText}> {item.text} </Text>
                {/* <Icon name="remove" size={20}/> */}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
listitem:{
    padding:15,
    backgroundColor:'grey',
    borderBottomWidth:2,
    borderColor: '#eee'
},
listitemView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
},
listitemText:{
    fontSize:18
}
});

export default ListItem;