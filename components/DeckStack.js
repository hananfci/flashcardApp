


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./DeckList";
import DeckDetails from"./DeckDetails";
import NewCard from './NewCard';
import Quiz from './Quiz'
import Header from '../Share/Header'
import { purple, white } from "../utils/colors";

const Stack = createStackNavigator();

const DeckStack = () => {
  return (
    <Stack.Navigator
    screenOptions= {
      { headerTintColor:white,
           headerStyle :{
            backgroundColor:'#2f2679',
           }}
       } >
      <Stack.Screen name="DeckList" component={DeckList}
        options={
          ({ navigation }) => {
            console.log(navigation)
            return {
              title:  "All Decks",
              //headerTitle: ()=><Header navigation={navigation} title='All Decks'/>
              
            };
          }
        
          }  
       
      />
      <Stack.Screen
        name="DeckDetails"
        component={DeckDetails}  
        options={
          ({ route }) => {
           
            console.log(route)
            const {name}= route.params
            const info = 'Deck'
            return {
              title:  `${name} ${info}`
            };
          }
        
          }  
      />
        <Stack.Screen
        name="Quiz"
        component={Quiz} 
        options={
          ({ route }) => {
           
            console.log(route)
            const {name}= route.params
            const info = 'Cards'
            return {
              title:  `${name} ${info}`
            };
          }
        
          }    
      />
       <Stack.Screen
        name="NewCard"
        component={NewCard} 
        options={
          ({ route }) => {
           
            console.log(route)
            const {name}= route.params
            const info = 'New card'
            return {
              title:  `${name} ${info}`
            };
          }
        
          }  
      />
     

    </Stack.Navigator>
  );
};

export default DeckStack;