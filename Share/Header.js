import React from 'react';

import {  StyleSheet,View, Text  } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { white } from '../utils/colors';

export default function Header ({navigation,title}) {
   const openmenu = ()=>{
    navigation.openDrawer()
   }
    return (
        <View  style={styles.Header}>
            <Entypo name="menu" size={30} color={white} onPress={openmenu} />
            <View style={styles.viewtitle}>
            <Text style={styles.headerText}> {title}</Text>
           </View>
      
      </View>

    );

}
const styles= StyleSheet.create({
    viewtitle:{
        marginLeft:100
    },
Header:{
   
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
},
headerText:{
 fontWeight:'bold',
 fontSize:20,
  color:white,
},
icon:{
    position:"absolute",
    left:16,
}
})
