


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewDeck from './NewDeck'
import Header from '../Share/Header'
import { purple, white } from "../utils/colors";

const Stack = createStackNavigator();

const NewDeckStack = () => {
  return (
    <Stack.Navigator
    screenOptions= {
      { headerTintColor:white,
           headerStyle :{
            backgroundColor:'#2f2679',
           }}
       } >
      <Stack.Screen name="NewDeck" component={NewDeck}
         options={
          ({ navigation }) => {
            console.log(navigation)
            return {
              headerTitle: ()=><Header navigation={navigation} title='Add  Deck'/>
            };
          }
        
          }  
      />
     
       

    </Stack.Navigator>
  );
};

export default NewDeckStack;